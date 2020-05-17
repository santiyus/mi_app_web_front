import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CrudAppComponent } from './pages/crud-app/crud-app.component';
import { CvComponentComponent } from './pages/cv-component/cv-component.component';
import { ErrorComponent } from './pages/error/error.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortadaComponent } from './pages/portada/portada.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { DeleteComponent } from './pages/crud-app/crud-components/delete/delete.component';
import { EditComponent } from './pages/crud-app/crud-components/edit/edit.component';
import { InsertComponent } from './pages/crud-app/crud-components/insert/insert.component';
import { MostarTablaComponent } from './pages/crud-app/crud-components/mostar-tabla/mostar-tabla.component';
import { SelectComponent } from './pages/crud-app/crud-components/select/select.component';
import { UpdateComponent } from './pages/crud-app/crud-components/update/update.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './pages/crud-app/crud-components/crud/crud.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    CrudAppComponent,
    CvComponentComponent,
    ErrorComponent,
    InicioComponent,
    PortadaComponent,
    SobreMiComponent,
    DeleteComponent,
    EditComponent,
    InsertComponent,
    MostarTablaComponent,
    SelectComponent,
    UpdateComponent,
    FooterComponent,
    MenuComponent,
    LinkedinComponent,
    CarruselComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
