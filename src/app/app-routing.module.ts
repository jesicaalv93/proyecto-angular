import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './componentes/home/encabezado.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';

const routes: Routes= [
  {path: '', component: EncabezadoComponent},
  {path: 'home', component: EncabezadoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: SobreMiComponent},
  {path: 'resume', component: ExperienciaComponent},
  {path: 'portfolio', component: PortafolioComponent},
  {path: 'skill', component: HabilidadesComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
