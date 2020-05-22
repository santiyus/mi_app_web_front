import { Component, OnInit } from '@angular/core';
import textos from './recursos/textos.json';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCrudService } from './services/http-crud-service.service'
import { Usuario } from './model/usuario';


@Component({
  selector: 'app-crud-app',
  templateUrl: './crud-app.component.html',
  styleUrls: ['./crud-app.component.scss']
})
export class CrudAppComponent implements OnInit {
  text;
  usuario: Usuario
  userError = false
  spinner = false
  formLogin = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required,]
  });

  constructor(private fb: FormBuilder, private router: Router, private _httpService: HttpCrudService) { }

  ngOnInit(): void {
    this.text = textos
    this.userError = false
    this.spinner = false
  }

  onSubmit() {
    this.spinner = true


    if (this.formLogin.valid) {
      const value = this.formLogin.value;
      this.usuario = new Usuario(value.user.toLowerCase(), value.pass)

      this._httpService.generarToken(this.usuario)
        .subscribe(
          data => {
            this._httpService.setToken(data)
            this.spinner = false
            this.router.navigate(['/app/crud']);
          },
          error => {
            console.log(error)
            this.userError = true
            this.spinner = false
          }
        )

    } else {
      this.spinner = false
      this.formLogin.markAllAsTouched();
    }
  }

}
