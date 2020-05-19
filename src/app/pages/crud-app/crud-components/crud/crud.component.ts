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
  radioSelect = 1
  radioBuscar = 'id'

  errorGlobal=''
  resptBuscar = '';
  resptBorrar = '';

  //mensajes de error
  msgError = 'error'
  msgNoFound = 'error-no-found'

  constructor(private fb: FormBuilder, private router: Router) {
    this.text = textos
  }

  ngOnInit(): void {
    this.token='llamar servicio que devuelve token'
  }

  // OPCION BUSCAR
  changeRadio(event: any) {
    this.limpiarErrores ()
    this.radioSelect = event.target.id
  }
  changeRadioBuscar(event: any) {
    this.limpiarErrores ()
    this.radioBuscar = event.target.id
  }

  buscarId() {
    this.errorGlobal = this.msgError
  }

  buscarName() {
    this.errorGlobal = this.msgNoFound
  }

  borrarId() {
  }

  private limpiarErrores (){
    this.errorGlobal=''
  }


}
