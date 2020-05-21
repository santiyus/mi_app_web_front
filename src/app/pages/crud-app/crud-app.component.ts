import { Component, OnInit } from '@angular/core';
import textos from './recursos/textos.json';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCrudService } from './services/http-crud-service.service'


@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss']
})
export class CrudAppComponent implements OnInit {
  text;
  spinner = false
  formLogin = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required,]
  });

  constructor(private fb: FormBuilder, private router: Router, private _httpService: HttpCrudService) { }

  ngOnInit(): void {
    this.text = textos
  }

  onSubmit() {
    console.log(this.formLogin)
    const obje={
      "user":"userr",
      "pass":"12345"	
    }
    
    this._httpService.generarToken(obje)

    // console.log(this._httpService.)

    if (this.formLogin.valid) {
      const value = this.formLogin.value;
      console.log(value);
      this.router.navigate(['/app/crud']);
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

}
