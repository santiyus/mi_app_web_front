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
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    telefono: ['',[Validators.required, Validators.pattern('(6|7)[ -]*([0-9][ -]*){8}')]],
    asunto: ['',Validators.required],
    mensaje: ['', Validators.required]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.text = textos
  }

  onSubmit() {
    console.log('form')
    console.log(this.form)
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
