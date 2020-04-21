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



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adminpanel', component: PanelComponent, 
  children:[
    {path: '', component: DoctoresComponent},
  ]
},
{ path: 'doctorpanel', component: PaneldoctorComponent,
children:[
  {path: '', component: PacientesComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'formulario1', component: Formulario1Component},
  {path: 'formulario2', component: Formulario2Component},
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
