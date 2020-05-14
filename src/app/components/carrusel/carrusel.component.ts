import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import rutas_img from './recursos/rutas_img.json';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  imgList = []
  slider;

  constructor(private _config:NgbCarouselConfig) {
    _config.interval= 3000
    _config.pauseOnHover = true
    _config.showNavigationArrows=true
   }

  ngOnInit(): void {
    this.imgList = rutas_img
  }

  private _crearSlider(): void {
  }





}


