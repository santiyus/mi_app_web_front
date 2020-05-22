import { Component, OnInit } from '@angular/core';
import textos from './recursos/textos.json';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Correo } from './model/correo'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  text;
  url = ''
  spinner = false
  okEmail = false
  koEmail = false
  noEmail = false
  expRegEmail = '(?(?:^\w+\.?[-+\w]*@\w+(?:[-.]\w+)*\.[a-zA-Z]{2,}$)^.{6,80}$|^\w+\.?[-+\w]*@\w+(?:[-.]\w+)*\.[a-zA-Z]{2,}$)'
  form = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.pattern('(6|7)[ -]*([0-9][ -]*){8}')],
    asunto: [''],
    mensaje: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.text = textos
  }


  onSubmitTemporal() {
    this.noEmail = true
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.value;
      const correo = new Correo(value.nombre, value.email, value.telefono, value.asunto, value.mensaje)
      this.http.post(this.url + '/crud/borrar_cliente/', correo)
        .subscribe(
          data => {
            data ? this.okEmail = true : this.koEmail = true
            this.form.reset()
            this.spinner = false
          },
          error => {
            this.koEmail = true
            this.spinner = false
          }
        )

    } else {
      this.form.markAllAsTouched();
    }
  }
}
