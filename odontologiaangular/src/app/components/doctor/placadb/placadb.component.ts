import { Component, OnInit } from '@angular/core';
import { Placadb } from 'src/app/models/placadb';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { PlacadbService } from 'src/app/services/placadb.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';

@Component({
  selector: 'app-placadb',
  templateUrl: './placadb.component.html',
  styleUrls: ['./placadb.component.css'],
  providers: [PlacadbService]

})
export class PlacadbComponent implements OnInit {

  public formdb;
  public info_paciente:any;
  constructor(private _placadbservices:PlacadbService,public _recivir:Data_enivarService ) 
  { 
  
    this.formdb= new Placadb('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"")
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
    }) 

  }

  onSubmit(form){
    console.log(this.formdb)
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
        D1: this.formdb.IdDS18,
        D2: this.formdb.IdDS17,
        D3: this.formdb.IdDS16,
        D4: this.formdb.IdDS15,
        D5: this.formdb.IdDS14,
        D6: this.formdb.IdDS13,
        D7: this.formdb.IdDS12,
        D8: this.formdb.IdDS11,
        D14: this.formdb.IdIS28,
        D15: this.formdb.IdIS27,
        D16: this.formdb.IdIS26,
        D17: this.formdb.IdIS25,
        D18: this.formdb.IdIS24,
        D19: this.formdb.IdIS23,
        D20: this.formdb.IdIS22,
        D21: this.formdb.IdIS21,
        D27: this.formdb.IdDI48,
        D28: this.formdb.IdDI47,
        D29: this.formdb.IdDI46,
        D30: this.formdb.IdDI45,
        D31: this.formdb.IdDI44,
        D32: this.formdb.IdDI43,
        D33: this.formdb.IdDI42,
        D34: this.formdb.IdDI41,
        D40: this.formdb.IdII38,
        D41: this.formdb.IdII37,
        D42: this.formdb.IdII36,
        D43: this.formdb.IdII35,
        D44: this.formdb.IdII34,
        D45: this.formdb.IdII33,
        D46: this.formdb.IdII32,
        D47: this.formdb.IdII31,
        D48: this.formdb.totali,
        OBBS: this.formdb.IObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formdb.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formdb.IObser, options);
    this._placadbservices.registrarPlacadb(this.formdb).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}