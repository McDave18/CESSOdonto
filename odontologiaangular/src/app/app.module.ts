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
import { HomeComponent } from './components/home/home.component';
import { IHOSComponent } from './components/doctor/ihos/ihos.component';
import { FormularioAtmComponent } from './components/doctor/formularioatm/formularioatm.component';
import { PlantratamientoComponent } from './components/doctor/plantratamiento/plantratamiento.component';
import { ControlpagosComponent } from './components/doctor/controlpagos/controlpagos.component';
import { MenuComponent} from './components/shared/menu/menu.component'
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth.guard';
import { OdontogramaComponent } from './components/doctor/odontograma/odontograma.component';
import { IHOSTComponent } from './components/doctor/ihost/ihost.component';
import { PlacadbComponent } from './components/doctor/placadb/placadb.component';
import { PlacadbtComponent } from './components/doctor/placadbt/placadbt.component';


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
    FormularioDocComponent,
    HomeComponent,
    IHOSComponent,
    FormularioAtmComponent,
    PlantratamientoComponent,
    ControlpagosComponent,
    MenuComponent,
    OdontogramaComponent,
    IHOSTComponent,
    PlacadbComponent,
    PlacadbtComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
