import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarTablaComponent } from './mostar-tabla.component';

describe('MostarTablaComponent', () => {
  let component: MostarTablaComponent;
  let fixture: ComponentFixture<MostarTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostarTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostarTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
