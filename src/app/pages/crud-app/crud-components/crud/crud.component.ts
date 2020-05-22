import { Component, OnInit } from '@angular/core';
import textos from '../../recursos/textos.json';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCrudService } from '../../services/http-crud-service.service'
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  token
  text
  radioSelect = 1
  radioBuscar = 'id'
  disableInsert = true
  spinner = false

  //tabla
  columnas = []
  listRow

  //mensajes de error
  validGlobal = false
  validTable = true
  msgError = false
  msgNoFound = false
  msgErrorFormat = false

  //forms
  formBuscar = this.fb.group({
    resp: ['', Validators.required]
  });

  formInsert = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern('(6|7|9)[ -]*([0-9][ -]*){8}')]]
  });

  formEditar = this.fb.group({
    id: [{ value: '', disabled: true }, Validators.required],
    nombre: [{ value: '', disabled: true }, Validators.required],
    apellidos: [{ value: '', disabled: true }, Validators.required],
    email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
    telefono: [{ value: '', disabled: true }, [Validators.required, Validators.pattern('(6|7|9)[ -]*([0-9][ -]*){8}')]]
  });

  formBorrar = this.fb.group({
    id: ['', Validators.required]
  });



  constructor(private fb: FormBuilder, private router: Router, private _httpService: HttpCrudService) {
    this.text = textos
  }

  ngOnInit(): void {
    this.token = this._httpService.getToken()
    if (!this.token && this.token === '') {
      this.router.navigate(['/app']);
    } else {
      this.columnas = this.text.crud.tabla
      this.cargarTablaInit()
    }
    this.spinner = true
  }

  //Radio menu   
  changeRadio(event: any) {
    this.resetFomrs()
    this.limpiarErrores()
    this.radioSelect = event.target.id
  }

  //cargar tabla inicial
  private cargarTablaInit(): void {
    this._httpService.getAllClients()
      .subscribe(
        data => {
          this.listRow = data
          this.spinner = false
        },
        error => {
          this.validTable = false
          this.spinner = false
        }
      )
  }

  actualizarTabla(): void {
    this.cargarTablaInit()
  }


  //Buscar
  changeRadioBuscar(event: any) {
    this.limpiarErrores()
    this.radioBuscar = event.target.id
  }

  onSubmitBuscar() {
    this.spinner = true
    this.limpiarErrores()

    if (this.formBuscar.valid) {

      if (this.radioSelect == 1 && this.radioBuscar == 'name')
        this.optionBuscarName(this.formBuscar.get('resp').value)
      else if ((this.radioSelect == 1 && this.radioBuscar == 'id') || this.formBuscar.get('resp')) {
        if (isNaN(this.formBuscar.get('resp').value)) {
          this.msgErrorFormat = true
          this.spinner = false
        } else
          this.optionBuscarId(this.formBuscar.get('resp').value)
      }
    } else {
      this.disabledInsert()
      this.formBuscar.markAllAsTouched();
    }
  }


  optionBuscarName(pName) {
    this._httpService.getClientName(pName)
      .subscribe(
        data => {
          if (data && data.length != 0) {
            this.listRow = data
          } else
            this.msgNoFound = true
          this.radioBuscar = 'id'
          this.formBuscar.reset()
          this.spinner = false
        },
        error => {
          this.msgError = true
          this.spinner = false
        }
      )
  }


  optionBuscarId(pId) {
    this._httpService.getClientId(pId)
      .subscribe(
        data => {
          if (data && Object.keys(data).length != 0 && this.radioSelect == 1) {
            this.formBuscar.reset()
            this.listRow = [data]
          }
          else if (data && Object.keys(data).length != 0 && this.radioSelect == 3) {
            this.formEditar.setValue({
              id: data.id,
              nombre: data.nombre,
              apellidos: data.apellidos,
              email: data.email,
              telefono: data.n_telefono
            });
            this.enabledInsert()
            this.listRow = [data]
          } else
            this.msgNoFound = true
          this.spinner = false
        },
        error => {
          this.cargarTablaInit()
          this.msgError = true
          this.spinner = false
        }
      )
  }


  //insertar
  onSubmitInsert() {
    this.spinner = true
    this.limpiarErrores()

    if (this.formInsert.valid) {
      const value = this.formInsert.value;
      const client = {
        "nombre": value.nombre,
        "apellidos": value.apellidos,
        "email": value.email,
        "n_telefono": value.telefono
      }

      this._httpService.putNewClient(client)
        .subscribe(
          data => {
            data ? this.validGlobal = true : this.msgError = true
            this.resetFomrs()
            this.cargarTablaInit()
            this.spinner = false
          },
          error => {
            this.cargarTablaInit()
            this.msgError = true
            this.spinner = false
          }
        )
    } else {
      this.spinner = false
      this.formInsert.markAllAsTouched();
    }
  }


  //editar
  onSubmitEditar() {
    this.spinner = true
    this.limpiarErrores()

    if (this.formEditar.valid) {
      const value = this.formEditar.value;
      const cliente = new Cliente(value.id, value.nombre, value.apellidos, value.email, value.telefono)

      this._httpService.putEditClient(cliente)
        .subscribe(
          data => {
            data ? this.validGlobal = true : this.msgError = true
            this.resetFomrs()
            this.cargarTablaInit()
            this.spinner = false
          },
          error => {
            this.cargarTablaInit()
            this.msgError = true
            this.spinner = false
          }
        )
    } else {
      this.spinner = false
      this.formEditar.markAllAsTouched();
    }
  }

  disabledInsert() {
    this.disableInsert = true
    this.formEditar.disable()
  }

  enabledInsert() {
    this.disableInsert = false
    this.formEditar.enable()
  }


  //borrar
  onSubmitBorrar() {
    this.spinner = true
    this.limpiarErrores()

    if (this.formBorrar.valid) {
      if (isNaN(this.formBorrar.get('id').value)) {
        this.msgErrorFormat = true
        this.spinner = false
      } else {
        const value = this.formBorrar.get('id').value;
        this._httpService.deleteClient(value)
          .subscribe(
            data => {
              data ? this.validGlobal = true : this.msgNoFound = true

              this.cargarTablaInit()
              this.formBorrar.reset()
              this.spinner = false
            },
            error => {
              this.msgError = true
              this.spinner = false
            }
          )

      }
    } else {
      this.spinner = false
      this.formBorrar.markAllAsTouched();
    }
  }


  cerrarSesion() {
    this._httpService.setToken('')
  }

  private resetFomrs() {
    this.formBuscar.reset()
    this.formInsert.reset()
    this.formEditar.reset()
    this.formBorrar.reset()
    this.disabledInsert()
  }


  private limpiarErrores() {
    this.validGlobal = false
    this.validTable = true
    this.msgNoFound = false
    this.msgError = false
    this.msgErrorFormat = false
  }


}
