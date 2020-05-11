import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pulseBtnMenu:boolean = false;

  clickMenuResponsive(pulseBtnMenu:boolean){
    this.pulseBtnMenu=!pulseBtnMenu;
    return this.pulseBtnMenu;
  }

}
