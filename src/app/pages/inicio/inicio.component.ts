import { Component, OnInit } from '@angular/core';
import rutas_img from './recursos/rutas_img.json';
import textos from './recursos/textos.json';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  list_imagenes = []
  text;

  constructor() { }

  ngOnInit(): void {
    this.list_imagenes = rutas_img
    this.text = textos
  }

}
