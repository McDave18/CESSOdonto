import { Component, OnInit } from '@angular/core';
import { Placadbt4 } from 'src/app/models/placadbt4';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Placadbt4Service } from 'src/app/services/placadbt4.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-placadb4',
  templateUrl: './placadb4.component.html',
  styleUrls: ['./placadb4.component.css'],
  providers: [Placadbt4Service]

})
export class Placadb4Component implements OnInit {

  public formdbt4;
  public info_paciente:any;
  constructor(private _placadb4services:Placadbt4Service,public _recivir:Data_enivarService ) 
  { 
    this.formdbt4= new Placadbt4('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"")
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formdbt4)
          this.getFormularioplacadbt4(res.Id_Paciente);
      }
    }) 

  }

  getFormularioplacadbt4(id){
    console.log(id,"paciente")
    
    this._placadb4services.getPlacadbt4(id).subscribe(res=>{
      console.log("datos Placadb4",res);
      if(!isNullOrUndefined(res.PlacaAct4[0])){ 
      let datos = res.PlacaAct4[0]
      
      this.formdbt4.Id_Pacient=id;
      this.formdbt4.AdDS18=datos.A4DDS18;
      this.formdbt4.AdDS17=datos.A4DDS17;
      this.formdbt4.AdDS16=datos.A4DDS16;
      this.formdbt4.AdDS15=datos.A4DDS15;
      this.formdbt4.AdDS14=datos.A4DDS14;
      this.formdbt4.AdDS13=datos.A4DDS13;
      this.formdbt4.AdDS12=datos.A4DDS12;
      this.formdbt4.AdDS11=datos.A4DDS11;
      this.formdbt4.AdIS28=datos.A4DIS28;
      this.formdbt4.AdIS27=datos.A4DIS27;
      this.formdbt4.AdIS26=datos.A4DIS26;
      this.formdbt4.AdIS25=datos.A4DIS25;
      this.formdbt4.AdIS24=datos.A4DIS24;
      this.formdbt4.AdIS23=datos.A4DIS23;
      this.formdbt4.AdIS22=datos.A4DIS22;
      this.formdbt4.AdIS21=datos.A4DIS21;
      this.formdbt4.AdDI48=datos.A4DDI48;
      this.formdbt4.AdDI47=datos.A4DDI47;
      this.formdbt4.AdDI46=datos.A4DDI46;
      this.formdbt4.AdDI45=datos.A4DDI45;
      this.formdbt4.AdDI44=datos.A4DDI44;
      this.formdbt4.AdDI43=datos.A4DDI43;
      this.formdbt4.AdDI42=datos.A4DDI42;
      this.formdbt4.AdDI41=datos.A4DDI41;
      this.formdbt4.AdII38=datos.A4DII38;
      this.formdbt4.AdII37=datos.A4DII37;
      this.formdbt4.AdII36=datos.A4DII36;
      this.formdbt4.AdII35=datos.A4DII35;
      this.formdbt4.AdII34=datos.A4DII34;
      this.formdbt4.AdII33=datos.A4DII33;
      this.formdbt4.AdII32=datos.A4DII32;
      this.formdbt4.AdII31=datos.A4DII31;
      this.formdbt4.totala=datos.TotalPlacaActual4;
      this.formdbt4.AObser=datos.A4Obser;
     
      }
    })
  }

  onSubmit(form){
    console.log(this.formdbt4)
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
        D1: this.formdbt4.AdDS18,
        D2: this.formdbt4.AdDS17,
        D3: this.formdbt4.AdDS16,
        D4: this.formdbt4.AdDS15,
        D5: this.formdbt4.AdDS14,
        D6: this.formdbt4.AdDS13,
        D7: this.formdbt4.AdDS12,
        D8: this.formdbt4.AdDS11,
        D14: this.formdbt4.AdIS28,
        D15: this.formdbt4.AdIS27,
        D16: this.formdbt4.AdIS26,
        D17: this.formdbt4.AdIS25,
        D18: this.formdbt4.AdIS24,
        D19: this.formdbt4.AdIS23,
        D20: this.formdbt4.AdIS22,
        D21: this.formdbt4.AdIS21,
        D27: this.formdbt4.AdDI48,
        D28: this.formdbt4.AdDI47,
        D29: this.formdbt4.AdDI46,
        D30: this.formdbt4.AdDI45,
        D31: this.formdbt4.AdDI44,
        D32: this.formdbt4.AdDI43,
        D33: this.formdbt4.AdDI42,
        D34: this.formdbt4.AdDI41,
        D40: this.formdbt4.AdII38,
        D41: this.formdbt4.AdII37,
        D42: this.formdbt4.AdII36,
        D43: this.formdbt4.AdII35,
        D44: this.formdbt4.AdII34,
        D45: this.formdbt4.AdII33,
        D46: this.formdbt4.AdII32,
        D47: this.formdbt4.AdII31,
        D48: this.formdbt4.totala,
        OBBS: this.formdbt4.AObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formdbt4.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formdbt4.AObser, options);
    this._placadb4services.registrarPlacadb4(this.formdbt4).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      
      }
    )
  }

}
