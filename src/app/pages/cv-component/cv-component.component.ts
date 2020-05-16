import { Component, OnInit } from '@angular/core';
import textos from './recursos/textos.json';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.scss']
})
export class CvComponentComponent implements OnInit {
  text;

  constructor() { }

  ngOnInit(): void {
    this.text = textos
  }

}
