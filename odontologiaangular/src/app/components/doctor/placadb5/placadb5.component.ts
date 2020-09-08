import { Component, OnInit } from '@angular/core';
import { Placadbt5 } from 'src/app/models/placadbt5';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Placadbt5Service } from 'src/app/services/placadbt5.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-placadb5',
  templateUrl: './placadb5.component.html',
  styleUrls: ['./placadb5.component.css'],
  providers: [Placadbt5Service]

})
export class Placadb5Component implements OnInit {

  public formdbt5;
  public info_paciente:any;
  constructor(private _placadb5services:Placadbt5Service,public _recivir:Data_enivarService ) 
  { 
    this.formdbt5= new Placadbt5('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"")
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formdbt5)
          this.getFormularioplacadbt5(res.Id_Paciente);
      }
    }) 

  }

  getFormularioplacadbt5(id){
    console.log(id,"paciente")
    
    this._placadb5services.getPlacadbt5(id).subscribe(res=>{
      console.log("datos Placadb5",res);
      if(!isNullOrUndefined(res.PlacaAct5[0])){ 
      let datos = res.PlacaAct5[0]
      
      this.formdbt5.Id_Pacient=id;
      this.formdbt5.AdDS18=datos.A5DDS18;
      this.formdbt5.AdDS17=datos.A5DDS17;
      this.formdbt5.AdDS16=datos.A5DDS16;
      this.formdbt5.AdDS15=datos.A5DDS15;
      this.formdbt5.AdDS14=datos.A5DDS14;
      this.formdbt5.AdDS13=datos.A5DDS13;
      this.formdbt5.AdDS12=datos.A5DDS12;
      this.formdbt5.AdDS11=datos.A5DDS11;
      this.formdbt5.AdIS28=datos.A5DIS28;
      this.formdbt5.AdIS27=datos.A5DIS27;
      this.formdbt5.AdIS26=datos.A5DIS26;
      this.formdbt5.AdIS25=datos.A5DIS25;
      this.formdbt5.AdIS24=datos.A5DIS24;
      this.formdbt5.AdIS23=datos.A5DIS23;
      this.formdbt5.AdIS22=datos.A5DIS22;
      this.formdbt5.AdIS21=datos.A5DIS21;
      this.formdbt5.AdDI48=datos.A5DDI48;
      this.formdbt5.AdDI47=datos.A5DDI47;
      this.formdbt5.AdDI46=datos.A5DDI46;
      this.formdbt5.AdDI45=datos.A5DDI45;
      this.formdbt5.AdDI44=datos.A5DDI44;
      this.formdbt5.AdDI43=datos.A5DDI43;
      this.formdbt5.AdDI42=datos.A5DDI42;
      this.formdbt5.AdDI41=datos.A5DDI41;
      this.formdbt5.AdII38=datos.A5DII38;
      this.formdbt5.AdII37=datos.A5DII37;
      this.formdbt5.AdII36=datos.A5DII36;
      this.formdbt5.AdII35=datos.A5DII35;
      this.formdbt5.AdII34=datos.A5DII34;
      this.formdbt5.AdII33=datos.A5DII33;
      this.formdbt5.AdII32=datos.A5DII32;
      this.formdbt5.AdII31=datos.A5DII31;
      this.formdbt5.totala=datos.TotalPlacaActual5;
      this.formdbt5.AObser=datos.A5Obser;
     
      }
    })
  }

  onSubmit(form){
    console.log(this.formdbt5)
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
        D1: this.formdbt5.AdDS18,
        D2: this.formdbt5.AdDS17,
        D3: this.formdbt5.AdDS16,
        D4: this.formdbt5.AdDS15,
        D5: this.formdbt5.AdDS14,
        D6: this.formdbt5.AdDS13,
        D7: this.formdbt5.AdDS12,
        D8: this.formdbt5.AdDS11,
        D14: this.formdbt5.AdIS28,
        D15: this.formdbt5.AdIS27,
        D16: this.formdbt5.AdIS26,
        D17: this.formdbt5.AdIS25,
        D18: this.formdbt5.AdIS24,
        D19: this.formdbt5.AdIS23,
        D20: this.formdbt5.AdIS22,
        D21: this.formdbt5.AdIS21,
        D27: this.formdbt5.AdDI48,
        D28: this.formdbt5.AdDI47,
        D29: this.formdbt5.AdDI46,
        D30: this.formdbt5.AdDI45,
        D31: this.formdbt5.AdDI44,
        D32: this.formdbt5.AdDI43,
        D33: this.formdbt5.AdDI42,
        D34: this.formdbt5.AdDI41,
        D40: this.formdbt5.AdII38,
        D41: this.formdbt5.AdII37,
        D42: this.formdbt5.AdII36,
        D43: this.formdbt5.AdII35,
        D44: this.formdbt5.AdII34,
        D45: this.formdbt5.AdII33,
        D46: this.formdbt5.AdII32,
        D47: this.formdbt5.AdII31,
        D48: this.formdbt5.totala,
        OBBS: this.formdbt5.AObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formdbt5.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formdbt5.AObser, options);
    this._placadb5services.registrarPlacadb5(this.formdbt5).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      
      }
    )
  }

}
