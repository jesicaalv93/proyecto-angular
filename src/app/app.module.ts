import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ResumenComponent,
    PortafolioComponent,
    ContactoComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
