import { Component, OnInit } from '@angular/core';
import textos from '../../recursos/textos.json';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  token
  text
  radioSelect = 3
  radioBuscar = 'id'
  disableInsert = true

  errorGlobal = ''
  resptBuscar = '';
  resptBorrar = '';

  //tabla
  columnas = []

  //mensajes de error
  msgError = 'error'
  msgNoFound = 'error-no-found'

  //forms
  formBuscar = this.fb.group({
    resp: ['', Validators.required]
  });

  formInsert = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern('(6|7)[ -]*([0-9][ -]*){8}')]]
  });

  formEditar = this.fb.group({
    nombre: [{value:'', disabled:true}, Validators.required],
    apellidos: [{value:'', disabled:true}, Validators.required],
    email: [{value:'', disabled:true}, [Validators.required, Validators.email]],
    telefono: [{value:'', disabled:true}, [Validators.required, Validators.pattern('(6|7)[ -]*([0-9][ -]*){8}')]]
  });

  formBorrar = this.fb.group({
    id: ['', Validators.required]
  });



  constructor(private fb: FormBuilder, private router: Router) {
    this.text = textos
  }

  ngOnInit(): void {
    this.token = 'llamar servicio que devuelve token'
    this.columnas = this.text.crud.tabla
    // this.disabledInsert()
  }

  //Radio menu   
  changeRadio(event: any) {
    this.resetFomrs()
    this.limpiarErrores()
    this.radioSelect = event.target.id
  }


  //Buscar
  changeRadioBuscar(event: any) {
    this.limpiarErrores()
    this.radioBuscar = event.target.id
  }

  onSubmitBuscar() {
    console.log(this.formBuscar)

    if (this.formBuscar.valid) {
      const value = this.formBuscar.value;
      console.log(value);

      if ( this.radioSelect === 1) { 
        console.log('buscar')

      } else if ( this.radioSelect === 3){
        this.enabledInsert()
        console.log('editar --> ' +this.disableInsert)
      }
    } else {
      this.disabledInsert()
      this.formBuscar.markAllAsTouched();
    }
  }


  //insertar
  onSubmitInsert() {
    console.log(this.formInsert)

    if (this.formInsert.valid) {
      const value = this.formInsert.value;
      console.log(value);
    } else {
      this.formInsert.markAllAsTouched();
    }
  }


  //editar
  onSubmitEditar() {
    console.log(this.formEditar)

    if (this.formEditar.valid) {
      const value = this.formEditar.value;
      console.log(value);
    } else {
      this.formEditar.markAllAsTouched();
    }
  }

  disabledInsert(){
    this.disableInsert = true
    this.formEditar.disable()    
  }

  enabledInsert(){
    this.disableInsert = false
    this.formEditar.enable()    
  }


  //borrar
  onSubmitBorrar() {
    console.log(this.formBorrar)

    if (this.formBorrar.valid) {
      const value = this.formBorrar.value;
      console.log(value);
    } else {
      this.formBorrar.markAllAsTouched();
    }
  }

  private resetFomrs(){
    this.formBuscar.reset()
    this.formInsert.reset()
    this.formEditar.reset()
    this.formBorrar.reset()
  }

  private limpiarErrores() {
    this.errorGlobal = ''
  }


}
