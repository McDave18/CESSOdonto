import { Component, OnInit } from '@angular/core';
import { Placadbt3 } from 'src/app/models/placadbt3';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Placadbt3Service } from 'src/app/services/placadbt3.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-placadb3',
  templateUrl: './placadb3.component.html',
  styleUrls: ['./placadb3.component.css'],
  providers: [Placadbt3Service]

})
export class Placadb3Component implements OnInit {

  public formdbt3;
  public info_paciente:any;
  constructor(private _placadb3services:Placadbt3Service,public _recivir:Data_enivarService ) 
  { 
    this.formdbt3= new Placadbt3('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"")
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formdbt3)
          this.getFormularioplacadbt3(res.Id_Paciente);
      }
    }) 

  }

  getFormularioplacadbt3(id){
    console.log(id,"paciente")
    
    this._placadb3services.getPlacadbt3(id).subscribe(res=>{
      console.log("datos Placadb3",res);
      if(!isNullOrUndefined(res.PlacaAct3[0])){ 
      let datos = res.PlacaAct3[0]
      
      this.formdbt3.Id_Pacient=id;
      this.formdbt3.AdDS18=datos.A3DDS18;
      this.formdbt3.AdDS17=datos.A3DDS17;
      this.formdbt3.AdDS16=datos.A3DDS16;
      this.formdbt3.AdDS15=datos.A3DDS15;
      this.formdbt3.AdDS14=datos.A3DDS14;
      this.formdbt3.AdDS13=datos.A3DDS13;
      this.formdbt3.AdDS12=datos.A3DDS12;
      this.formdbt3.AdDS11=datos.A3DDS11;
      this.formdbt3.AdIS28=datos.A3DIS28;
      this.formdbt3.AdIS27=datos.A3DIS27;
      this.formdbt3.AdIS26=datos.A3DIS26;
      this.formdbt3.AdIS25=datos.A3DIS25;
      this.formdbt3.AdIS24=datos.A3DIS24;
      this.formdbt3.AdIS23=datos.A3DIS23;
      this.formdbt3.AdIS22=datos.A3DIS22;
      this.formdbt3.AdIS21=datos.A3DIS21;
      this.formdbt3.AdDI48=datos.A3DDI48;
      this.formdbt3.AdDI47=datos.A3DDI47;
      this.formdbt3.AdDI46=datos.A3DDI46;
      this.formdbt3.AdDI45=datos.A3DDI45;
      this.formdbt3.AdDI44=datos.A3DDI44;
      this.formdbt3.AdDI43=datos.A3DDI43;
      this.formdbt3.AdDI42=datos.A3DDI42;
      this.formdbt3.AdDI41=datos.A3DDI41;
      this.formdbt3.AdII38=datos.A3DII38;
      this.formdbt3.AdII37=datos.A3DII37;
      this.formdbt3.AdII36=datos.A3DII36;
      this.formdbt3.AdII35=datos.A3DII35;
      this.formdbt3.AdII34=datos.A3DII34;
      this.formdbt3.AdII33=datos.A3DII33;
      this.formdbt3.AdII32=datos.A3DII32;
      this.formdbt3.AdII31=datos.A3DII31;
      this.formdbt3.totala=datos.TotalPlacaActual3;
      this.formdbt3.AObser=datos.A3Obser;
     
      }
    })
  }

  onSubmit(form){
    console.log(this.formdbt3)
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
        D1: this.formdbt3.AdDS18,
        D2: this.formdbt3.AdDS17,
        D3: this.formdbt3.AdDS16,
        D4: this.formdbt3.AdDS15,
        D5: this.formdbt3.AdDS14,
        D6: this.formdbt3.AdDS13,
        D7: this.formdbt3.AdDS12,
        D8: this.formdbt3.AdDS11,
        D14: this.formdbt3.AdIS28,
        D15: this.formdbt3.AdIS27,
        D16: this.formdbt3.AdIS26,
        D17: this.formdbt3.AdIS25,
        D18: this.formdbt3.AdIS24,
        D19: this.formdbt3.AdIS23,
        D20: this.formdbt3.AdIS22,
        D21: this.formdbt3.AdIS21,
        D27: this.formdbt3.AdDI48,
        D28: this.formdbt3.AdDI47,
        D29: this.formdbt3.AdDI46,
        D30: this.formdbt3.AdDI45,
        D31: this.formdbt3.AdDI44,
        D32: this.formdbt3.AdDI43,
        D33: this.formdbt3.AdDI42,
        D34: this.formdbt3.AdDI41,
        D40: this.formdbt3.AdII38,
        D41: this.formdbt3.AdII37,
        D42: this.formdbt3.AdII36,
        D43: this.formdbt3.AdII35,
        D44: this.formdbt3.AdII34,
        D45: this.formdbt3.AdII33,
        D46: this.formdbt3.AdII32,
        D47: this.formdbt3.AdII31,
        D48: this.formdbt3.totala,
        OBBS: this.formdbt3.AObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formdbt3.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formdbt3.AObser, options);
    this._placadb3services.registrarPlacadb3(this.formdbt3).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      
      }
    )
  }

}