import { Component, OnInit } from '@angular/core';
import textos from './recursos/textos.json';
import {FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss']
})
export class CrudAppComponent implements OnInit {
  text;
  formLogin = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required, ]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.text = textos
  }
  
  onSubmit() {
    console.log(this.formLogin)
    console.log(this.formLogin.get('email'))

    if (this.formLogin.valid) {
      const value = this.formLogin.value;
      console.log(value);
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

}
