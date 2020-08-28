import { Component, OnInit } from '@angular/core';
import { Placadbt } from 'src/app/models/placadbt';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { PlacadbtService } from 'src/app/services/placadbt.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';

@Component({
  selector: 'app-placadbt',
  templateUrl: './placadbt.component.html',
  styleUrls: ['./placadbt.component.css'],
  providers: [PlacadbtService]

})
export class PlacadbtComponent implements OnInit {

  public formdbt;
  public info_paciente:any;
  constructor(private _placadbservices:PlacadbtService,public _recivir:Data_enivarService ) 
  { 
  
    this.formdbt= new Placadbt('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"")
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
    }) 

  }

  onSubmit(form){
    console.log(this.formdbt)
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
        D1: this.formdbt.AdDS18,
        D2: this.formdbt.AdDS17,
        D3: this.formdbt.AdDS16,
        D4: this.formdbt.AdDS15,
        D5: this.formdbt.AdDS14,
        D6: this.formdbt.AdDS13,
        D7: this.formdbt.AdDS12,
        D8: this.formdbt.AdDS11,
        D14: this.formdbt.AdIS28,
        D15: this.formdbt.AdIS27,
        D16: this.formdbt.AdIS26,
        D17: this.formdbt.AdIS25,
        D18: this.formdbt.AdIS24,
        D19: this.formdbt.AdIS23,
        D20: this.formdbt.AdIS22,
        D21: this.formdbt.AdIS21,
        D27: this.formdbt.AdDI48,
        D28: this.formdbt.AdDI47,
        D29: this.formdbt.AdDI46,
        D30: this.formdbt.AdDI45,
        D31: this.formdbt.AdDI44,
        D32: this.formdbt.AdDI43,
        D33: this.formdbt.AdDI42,
        D34: this.formdbt.AdDI41,
        D40: this.formdbt.AdII38,
        D41: this.formdbt.AdII37,
        D42: this.formdbt.AdII36,
        D43: this.formdbt.AdII35,
        D44: this.formdbt.AdII34,
        D45: this.formdbt.AdII33,
        D46: this.formdbt.AdII32,
        D47: this.formdbt.AdII31,
        D48: this.formdbt.totala,
        OBBS: this.formdbt.AObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formdbt.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formdbt.AObser, options);
    this._placadbservices.registrarPlacadb(this.formdbt).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}