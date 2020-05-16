import { Component, OnInit } from '@angular/core';
import textos from './recursos/textos.json';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  text;
  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern('^[\s\S]{0,30}$')]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[\s\S]{0,70}$')]],
    telefono: ['',[Validators.required, Validators.pattern('(6|7)[ -]*([0-9][ -]*){8}')]],
    asunto: ['',[Validators.required, Validators.pattern('^[\s\S]{0,30}$')]],
    mensaje: ['', [Validators.required, Validators.pattern('^[\s\S]{0,400}$')]]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.text = textos
  }

  onSubmit() {
    console.log('form')
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
