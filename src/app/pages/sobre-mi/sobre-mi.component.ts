import { Component, OnInit } from '@angular/core';
import rutas_img from './recursos/rutas_img.json';
import textos from './recursos/textos.json';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
  list_imagenes = []
  text;

  constructor() { }

  ngOnInit(): void {
    this.list_imagenes = rutas_img
    this.text = textos
  }

}
