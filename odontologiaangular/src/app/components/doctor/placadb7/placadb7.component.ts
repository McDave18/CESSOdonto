import { Component, OnInit } from '@angular/core';
import { Placadbt7 } from 'src/app/models/placadbt7';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Placadbt7Service } from 'src/app/services/placadbt7.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-placadb7',
  templateUrl: './placadb7.component.html',
  styleUrls: ['./placadb7.component.css'],
  providers: [Placadbt7Service]

})
export class Placadb7Component implements OnInit {

  public formdbt7;
  public info_paciente:any;
  constructor(private _placadb7services:Placadbt7Service,public _recivir:Data_enivarService ) 
  { 
    this.formdbt7= new Placadbt7('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"")
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formdbt7)
          this.getFormularioplacadbt7(res.Id_Paciente);
      }
    }) 

  }

  getFormularioplacadbt7(id){
    console.log(id,"paciente")
    
    this._placadb7services.getPlacadbt7(id).subscribe(res=>{
      console.log("datos Placadb7",res);
      if(!isNullOrUndefined(res.PlacaAct7[0])){ 
      let datos = res.PlacaAct7[0]
      
      this.formdbt7.Id_Pacient=id;
      this.formdbt7.AdDS18=datos.A7DDS18;
      this.formdbt7.AdDS17=datos.A7DDS17;
      this.formdbt7.AdDS16=datos.A7DDS16;
      this.formdbt7.AdDS15=datos.A7DDS15;
      this.formdbt7.AdDS14=datos.A7DDS14;
      this.formdbt7.AdDS13=datos.A7DDS13;
      this.formdbt7.AdDS12=datos.A7DDS12;
      this.formdbt7.AdDS11=datos.A7DDS11;
      this.formdbt7.AdIS28=datos.A7DIS28;
      this.formdbt7.AdIS27=datos.A7DIS27;
      this.formdbt7.AdIS26=datos.A7DIS26;
      this.formdbt7.AdIS25=datos.A7DIS25;
      this.formdbt7.AdIS24=datos.A7DIS24;
      this.formdbt7.AdIS23=datos.A7DIS23;
      this.formdbt7.AdIS22=datos.A7DIS22;
      this.formdbt7.AdIS21=datos.A7DIS21;
      this.formdbt7.AdDI48=datos.A7DDI48;
      this.formdbt7.AdDI47=datos.A7DDI47;
      this.formdbt7.AdDI46=datos.A7DDI46;
      this.formdbt7.AdDI45=datos.A7DDI45;
      this.formdbt7.AdDI44=datos.A7DDI44;
      this.formdbt7.AdDI43=datos.A7DDI43;
      this.formdbt7.AdDI42=datos.A7DDI42;
      this.formdbt7.AdDI41=datos.A7DDI41;
      this.formdbt7.AdII38=datos.A7DII38;
      this.formdbt7.AdII37=datos.A7DII37;
      this.formdbt7.AdII36=datos.A7DII36;
      this.formdbt7.AdII35=datos.A7DII35;
      this.formdbt7.AdII34=datos.A7DII34;
      this.formdbt7.AdII33=datos.A7DII33;
      this.formdbt7.AdII32=datos.A7DII32;
      this.formdbt7.AdII31=datos.A7DII31;
      this.formdbt7.totala=datos.TotalPlacaActual7;
      this.formdbt7.AObser=datos.A7Obser;
     
      }
    })
  }

  onSubmit(form){
    console.log(this.formdbt7)
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
        D1: this.formdbt7.AdDS18,
        D2: this.formdbt7.AdDS17,
        D3: this.formdbt7.AdDS16,
        D4: this.formdbt7.AdDS15,
        D5: this.formdbt7.AdDS14,
        D6: this.formdbt7.AdDS13,
        D7: this.formdbt7.AdDS12,
        D8: this.formdbt7.AdDS11,
        D14: this.formdbt7.AdIS28,
        D15: this.formdbt7.AdIS27,
        D16: this.formdbt7.AdIS26,
        D17: this.formdbt7.AdIS25,
        D18: this.formdbt7.AdIS24,
        D19: this.formdbt7.AdIS23,
        D20: this.formdbt7.AdIS22,
        D21: this.formdbt7.AdIS21,
        D27: this.formdbt7.AdDI48,
        D28: this.formdbt7.AdDI47,
        D29: this.formdbt7.AdDI46,
        D30: this.formdbt7.AdDI45,
        D31: this.formdbt7.AdDI44,
        D32: this.formdbt7.AdDI43,
        D33: this.formdbt7.AdDI42,
        D34: this.formdbt7.AdDI41,
        D40: this.formdbt7.AdII38,
        D41: this.formdbt7.AdII37,
        D42: this.formdbt7.AdII36,
        D43: this.formdbt7.AdII35,
        D44: this.formdbt7.AdII34,
        D45: this.formdbt7.AdII33,
        D46: this.formdbt7.AdII32,
        D47: this.formdbt7.AdII31,
        D48: this.formdbt7.totala,
        OBBS: this.formdbt7.AObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formdbt7.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formdbt7.AObser, options);
    this._placadb7services.registrarPlacadb7(this.formdbt7).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      
      }
    )
  }

}