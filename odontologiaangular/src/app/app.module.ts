import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/admin/panel/panel.component';
import { PacientesComponent } from './components/admin/pacientes/pacientes.component';
import { DoctoresComponent } from './components/admin/doctores/doctores.component';
import { Formulario1Component } from './components/doctor/formulario1/formulario1.component';
import { PaneldoctorComponent } from './components/doctor/panel/panel.doctor.component';
import { FormsModule} from '@angular/forms';
import { Formulario2Component } from './components/doctor/formulario2/formulario2.component';
import { HttpClientModule } from '@angular/common/http';
import { Formulario3Component } from './components/doctor/formulario3/formulario3.component';
import { FormularioDocComponent } from './components/admin/formulariodoc/formulariodoc.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    PacientesComponent,
    DoctoresComponent,
    Formulario1Component,
    PaneldoctorComponent,
    Formulario2Component,
    Formulario3Component,
    FormularioDocComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
