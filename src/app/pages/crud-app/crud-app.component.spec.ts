import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAppComponent } from './crud-app.component';

describe('CrudAppComponent', () => {
  let component: CrudAppComponent;
  let fixture: ComponentFixture<CrudAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
