import { Component, OnInit } from '@angular/core';
import { IHOS } from 'src/app/models/ihos';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { IHOSService } from 'src/app/services/ihos.service';

@Component({
  selector: 'app-ihos',
  templateUrl: './ihos.component.html',
  styleUrls: ['./ihos.component.css'],
  providers: [IHOSService]

})
export class IHOSComponent implements OnInit {

  public formihos;
  constructor(private _ihosservices:IHOSService ) { 
    // tienes q crear el modelo del doctor
    this.formihos= new IHOS(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'')
  }


  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.formihos)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Formulario IHOS Inicial',
      useBom: true,
      noDownload: true,
      headers: ["ID16y17", "ID11y21", "ID26y27", "ID36y37", "Poblacion", "Facultad", "Enfermedades", "Consulta", "Penicilina","Otros","Cuales","Anestesia","¿Problemas?", "¿Qué ocurrio?", "Sangrado", "Hemorragia", "Anticoagulante", "Tranquilizantes", "Otros", "Cuales", "Diabetes", "Parentesco","Cara","Blando","Duro","Labios","Boca","Cuello","Salivales","Carrillos","Lengua","Amigdalas","dDS18","dDS17","dDS16","dDS15","dDS14","dDS13","dDS12","dDS11","dDS55","dDS54","dDS53","dDS52","dDS51","dIS28","dIS27","dIS26","dIS25","dIS24","dIS23","dIS22","dIS21","dIS65","dIS64","dIS63","dIS62","dIS61","dDI48","dDI47","dDI46","dDI45","dDI44","dDI43","dDI42","dDI41","dDI85","dDI84","dDI83","dDI82","dDI81","dII38","dII37","dII36","dII35","dII34","dII33","dII32","dII31","dII75","dII74","dII73","dII72","dII7"],
      nullToEmptyString: true,
    };


    //aqui es lo que envias a la api y en la api llamas el nombre 
    // como dice ahi fecha,name,sexo
    var data = [
      {
        
        I1617P: this.formihos.ID16y17_Pl,
        I1121P: this.formihos.ID11y21_Pl,
        I2627P: this.formihos.ID26y27_Pl,
        I3637P: this.formihos.ID36y37_Pl,
        I3141P: this.formihos.ID31y41_Pl,
        I4647P: this.formihos.ID46y47_Pl,
        I1617S: this.formihos.ID16y17_Sa,
        I1121S: this.formihos.ID11y21_Sa,
        I2627S: this.formihos.ID26y27_Sa,
        I3637S: this.formihos.ID36y37_Sa,
        I3141S: this.formihos.ID31y41_Sa,
        I4647S: this.formihos.ID46y47_Sa,
        IPT: this.formihos.InPlT,
        IST: this.formihos.InSaT,
        TII: this.formihos.TotalInIH,
        OBS: this.formihos.Obser,
      }
    ];

    new AngularCsv(data, this.formihos.Obser, options);
    this._ihosservices.registrarIHOS(this.formihos).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}

