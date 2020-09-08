import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/admin/panel/panel.component';
import { DoctoresComponent } from './components/admin/doctores/doctores.component';
import { PacientesComponent } from './components/doctor/pacientes/pacientes.component';
import { Formulario1Component } from './components/doctor/formulario1/formulario1.component';
import { PaneldoctorComponent } from './components/doctor/panel/panel.doctor.component';
import { from } from 'rxjs';
import { Formulario1 } from './models/formulario1';
import { Formulario2Component } from './components/doctor/formulario2/formulario2.component';
import { Formulario3Component } from './components/doctor/formulario3/formulario3.component';
import { FormularioDocComponent } from './components/admin/formulariodoc/formulariodoc.component';
import { HomeComponent } from "./components/home/home.component";
import { IHOSComponent } from "./components/doctor/ihos/ihos.component";
import { FormularioAtmComponent } from './components/doctor/formularioatm/formularioatm.component';
import { PlantratamientoComponent } from './components/doctor/plantratamiento/plantratamiento.component';
import { ControlpagosComponent } from './components/doctor/controlpagos/controlpagos.component';
import { AuthGuard } from './auth.guard';
import { LoginService } from './services/login.service';
import { OdontogramaComponent } from './components/doctor/odontograma/odontograma.component';
import { IHOSTComponent } from './components/doctor/ihost/ihost.component';
import { PlacadbComponent } from './components/doctor/placadb/placadb.component';
import { PlacadbtComponent} from './components/doctor/placadbt/placadbt.component';
import { ControlplacaComponent } from './components/doctor/controlplaca/controlplaca.component';
import { BusquedaComponent } from './components/doctor/busqueda/busqueda.component';
import { NotasComponent } from './components/doctor/notas/notas.component';
import { Placadb3Component } from './components/doctor/placadb3/placadb3.component';
import { Placadb4Component } from './components/doctor/placadb4/placadb4.component';
import { Placadb5Component } from './components/doctor/placadb5/placadb5.component';
import { Placadb6Component } from './components/doctor/placadb6/placadb6.component';
import { Placadb7Component } from './components/doctor/placadb7/placadb7.component';




const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adminpanel', component: PanelComponent, 
  children:[
    {path: '', component: DoctoresComponent},
  ]
},
{ path: 'doctorpanel', component: PaneldoctorComponent,canActivate:[AuthGuard],
children:[
  {path: '', component: PacientesComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'formulario1', component: Formulario1Component},
  {path: 'formulario2', component: Formulario2Component},
  {path: 'formulario3', component: Formulario3Component},
  {path: 'formulariodoc', component: FormularioDocComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ihos', component: IHOSComponent},
  {path: 'formularioatm', component: FormularioAtmComponent},
  {path: 'plantratamiento', component: PlantratamientoComponent},
  {path: 'controlpagos', component: ControlpagosComponent},
  {path: 'odontograma', component: OdontogramaComponent},
  {path: 'ihost', component: IHOSTComponent},
  {path: 'placadb', component: PlacadbComponent},
  {path: 'placadbt', component: PlacadbtComponent},
  {path: 'controlplaca', component: ControlplacaComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'notas', component: NotasComponent},
  {path: 'placadb3', component: Placadb3Component},
  {path: 'placadb4', component: Placadb4Component},
  {path: 'placadb5', component: Placadb5Component},
  {path: 'placadb6', component: Placadb6Component},
  {path: 'placadb7', component: Placadb7Component},
  
]
},{ path: 'salir/:sure',component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, LoginService],
})
export class AppRoutingModule { }
