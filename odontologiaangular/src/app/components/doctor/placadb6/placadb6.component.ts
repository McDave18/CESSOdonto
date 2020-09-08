import { Component, OnInit } from '@angular/core';
import { Placadbt6 } from 'src/app/models/placadbt6';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Placadbt6Service } from 'src/app/services/placadbt6.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const Swal = require('sweetalert2')

@Component({
  selector: 'app-placadb6',
  templateUrl: './placadb6.component.html',
  styleUrls: ['./placadb6.component.css'],
  providers: [Placadbt6Service]

})
export class Placadb6Component implements OnInit {

  public formdbt6;
  public info_paciente:any;
  constructor(private _placadb6services:Placadbt6Service,public _recivir:Data_enivarService ) 
  { 
    this.formdbt6= new Placadbt6('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"")
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formdbt6)
          this.getFormularioplacadbt6(res.Id_Paciente);
      }
    }) 

  }

  getFormularioplacadbt6(id){
    console.log(id,"paciente")
    
    this._placadb6services.getPlacadbt6(id).subscribe(res=>{
      console.log("datos Placadb6",res);
      if(!isNullOrUndefined(res.PlacaAct6[0])){ 
      let datos = res.PlacaAct6[0]
      
      this.formdbt6.Id_Pacient=id;
      this.formdbt6.AdDS18=datos.A6DDS18;
      this.formdbt6.AdDS17=datos.A6DDS17;
      this.formdbt6.AdDS16=datos.A6DDS16;
      this.formdbt6.AdDS15=datos.A6DDS15;
      this.formdbt6.AdDS14=datos.A6DDS14;
      this.formdbt6.AdDS13=datos.A6DDS13;
      this.formdbt6.AdDS12=datos.A6DDS12;
      this.formdbt6.AdDS11=datos.A6DDS11;
      this.formdbt6.AdIS28=datos.A6DIS28;
      this.formdbt6.AdIS27=datos.A6DIS27;
      this.formdbt6.AdIS26=datos.A6DIS26;
      this.formdbt6.AdIS25=datos.A6DIS25;
      this.formdbt6.AdIS24=datos.A6DIS24;
      this.formdbt6.AdIS23=datos.A6DIS23;
      this.formdbt6.AdIS22=datos.A6DIS22;
      this.formdbt6.AdIS21=datos.A6DIS21;
      this.formdbt6.AdDI48=datos.A6DDI48;
      this.formdbt6.AdDI47=datos.A6DDI47;
      this.formdbt6.AdDI46=datos.A6DDI46;
      this.formdbt6.AdDI45=datos.A6DDI45;
      this.formdbt6.AdDI44=datos.A6DDI44;
      this.formdbt6.AdDI43=datos.A6DDI43;
      this.formdbt6.AdDI42=datos.A6DDI42;
      this.formdbt6.AdDI41=datos.A6DDI41;
      this.formdbt6.AdII38=datos.A6DII38;
      this.formdbt6.AdII37=datos.A6DII37;
      this.formdbt6.AdII36=datos.A6DII36;
      this.formdbt6.AdII35=datos.A6DII35;
      this.formdbt6.AdII34=datos.A6DII34;
      this.formdbt6.AdII33=datos.A6DII33;
      this.formdbt6.AdII32=datos.A6DII32;
      this.formdbt6.AdII31=datos.A6DII31;
      this.formdbt6.totala=datos.TotalPlacaActual6;
      this.formdbt6.AObser=datos.A6Obser;
     
      }
    })
  }

  onSubmit(form){
    console.log(this.formdbt6)
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

    var data = [
      {
        D1: this.formdbt6.AdDS18,
        D2: this.formdbt6.AdDS17,
        D3: this.formdbt6.AdDS16,
        D4: this.formdbt6.AdDS15,
        D5: this.formdbt6.AdDS14,
        D6: this.formdbt6.AdDS13,
        D7: this.formdbt6.AdDS12,
        D8: this.formdbt6.AdDS11,
        D14: this.formdbt6.AdIS28,
        D15: this.formdbt6.AdIS27,
        D16: this.formdbt6.AdIS26,
        D17: this.formdbt6.AdIS25,
        D18: this.formdbt6.AdIS24,
        D19: this.formdbt6.AdIS23,
        D20: this.formdbt6.AdIS22,
        D21: this.formdbt6.AdIS21,
        D27: this.formdbt6.AdDI48,
        D28: this.formdbt6.AdDI47,
        D29: this.formdbt6.AdDI46,
        D30: this.formdbt6.AdDI45,
        D31: this.formdbt6.AdDI44,
        D32: this.formdbt6.AdDI43,
        D33: this.formdbt6.AdDI42,
        D34: this.formdbt6.AdDI41,
        D40: this.formdbt6.AdII38,
        D41: this.formdbt6.AdII37,
        D42: this.formdbt6.AdII36,
        D43: this.formdbt6.AdII35,
        D44: this.formdbt6.AdII34,
        D45: this.formdbt6.AdII33,
        D46: this.formdbt6.AdII32,
        D47: this.formdbt6.AdII31,
        D48: this.formdbt6.totala,
        OBBS: this.formdbt6.AObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formdbt6.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formdbt6.AObser, options);
    this._placadb6services.registrarPlacadb6(this.formdbt6).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
        console.log(error)
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      
      }
    )
  }

}
