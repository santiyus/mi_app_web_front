import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  @Input('imgList') imgList: []
  slider;
  rutaError;

  constructor(private _config: NgbCarouselConfig) {
    _config.interval = 3000
    _config.pauseOnHover = true
    _config.showNavigationArrows = true
  }

  ngOnInit(): void {
    this.rutaError = [{ "id": "img-error", "ruta": "assets/img/carrusel/error_img.jpg" }]
    
    if (typeof this.imgList == "undefined" && this.imgList == null)
      this.imgList = this.rutaError
  }

}


