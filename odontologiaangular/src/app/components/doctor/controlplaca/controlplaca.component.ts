import { Component, OnInit } from '@angular/core';
import { ControlplacaService } from 'src/app/services/controlplaca.service';
import { Controlplaca } from 'src/app/models/controlplaca';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import Swal from 'sweetalert2'; 
import { isNullOrUndefined } from 'util';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const Swal = require('sweetalert2')


@Component({
  selector: 'app-controlplaca',
  templateUrl: './controlplaca.component.html',
  styleUrls: ['./controlplaca.component.css'],
  providers: [ControlplacaService]
})
export class ControlplacaComponent implements OnInit {

  public formcplaca;
  public info_paciente:any;
  public sesiones=[]
  constructor(private _controlplacaservices:ControlplacaService,public _recivir:Data_enivarService) 
  { 
    this.formcplaca= new Controlplaca('','','','')
    
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formcplaca)
          this.getFormularioplaca(res.Id_Paciente);
          this.getsesiones(res.Id_Paciente)
      }
    }) 

  }

  getFormularioplaca(id){
    console.log(id,"paciente")
    
    this._controlplacaservices.getControlsesiones(id).subscribe(res=>{
      console.log("datos formularioplaca",res);
      if(!isNullOrUndefined(res.Sesiones[0])){ 
      let datos = res.Sesiones[0]
      
      this.formcplaca.Id_Pacient=id;
      this.formcplaca.fechacpdb=datos.FechaCPDB;
      this.formcplaca.sesion=datos.Sesion;
      this.formcplaca.porcentaje=datos.Porc_P;
  
      
      }
    })
  }
  onSubmit(form){
    console.log(this.formcplaca)
    console.log(this.info_paciente.Id_Paciente)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Tratamiento Paciente',
      useBom: true,
      noDownload: true,
      headers: ["ID16y17", "ID11y21", "ID26y27", "ID36y37", "Poblacion", "Facultad", "Enfermedades", "Consulta", "Penicilina","Otros","Cuales","Anestesia","¿Problemas?", "¿Qué ocurrio?", "Sangrado", "Hemorragia", "Anticoagulante", "Tranquilizantes", "Otros", "Cuales", "Diabetes", "Parentesco","Cara","Blando","Duro","Labios","Boca","Cuello","Salivales","Carrillos","Lengua","Amigdalas","dDS18","dDS17","dDS16","dDS15","dDS14","dDS13","dDS12","dDS11","dDS55","dDS54","dDS53","dDS52","dDS51","dIS28","dIS27","dIS26","dIS25","dIS24","dIS23","dIS22","dIS21","dIS65","dIS64","dIS63","dIS62","dIS61","dDI48","dDI47","dDI46","dDI45","dDI44","dDI43","dDI42","dDI41","dDI85","dDI84","dDI83","dDI82","dDI81","dII38","dII37","dII36","dII35","dII34","dII33","dII32","dII31","dII75","dII74","dII73","dII72","dII7"],
      nullToEmptyString: true,
    };


    //aqui es lo que envias a la api y en la api llamas el nombre 
   
    var data = [
      {
        SA: this.formcplaca.fechacpdb,
        SB: this.formcplaca.sesion,
        SD: this.formcplaca.porcentaje,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formcplaca.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formcplaca.sesion, options);
    this._controlplacaservices.registrarControlplaca(this.formcplaca).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')
      
      },error=>{
        console.log(error)
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      }
    )
  }


    getsesiones(id){
      console.log("id",id)
      this._controlplacaservices.getControlsesiones(id).subscribe(sesiones=>{
        console.log(sesiones)
        this.sesiones=sesiones.Sesiones;
      })
    }

}