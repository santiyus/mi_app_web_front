import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//components 
import { PortadaComponent } from './pages/portada/portada.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { CvComponentComponent } from './pages/cv-component/cv-component.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CrudAppComponent } from './pages/crud-app/crud-app.component';
import { CrudComponent } from './pages/crud-app/crud-components/crud/crud.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre_mi', component: SobreMiComponent },
  { path: 'cv', component: CvComponentComponent },
  { path: 'app', component: CrudAppComponent },
  { path: 'app/crud', component: CrudComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '404', component: ErrorComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
