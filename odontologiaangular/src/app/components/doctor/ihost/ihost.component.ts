import { Component, OnInit } from '@angular/core';
import { IHOSTService } from 'src/app/services/ihost.service';
import { IHOST } from 'src/app/models/ihost';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';

@Component({
  selector: 'app-ihost',
  templateUrl: './ihost.component.html',
  styleUrls: ['./ihost.component.css'],
  providers: [IHOSTService]

})
export class IHOSTComponent implements OnInit {

  public formihost;
  constructor(private _ihostservices:IHOSTService ) { 
    
    this.formihost= new IHOST(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'')
  }


  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.formihost)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Formulario Paciente',
      useBom: true,
      noDownload: true,
      headers: ["ID16y17", "ID11y21", "ID26y27", "ID36y37", "Poblacion", "Facultad", "Enfermedades", "Consulta", "Penicilina","Otros","Cuales","Anestesia","¿Problemas?", "¿Qué ocurrio?", "Sangrado", "Hemorragia", "Anticoagulante", "Tranquilizantes", "Otros", "Cuales", "Diabetes", "Parentesco","Cara","Blando","Duro","Labios","Boca","Cuello","Salivales","Carrillos","Lengua","Amigdalas","dDS18","dDS17","dDS16","dDS15","dDS14","dDS13","dDS12","dDS11","dDS55","dDS54","dDS53","dDS52","dDS51","dIS28","dIS27","dIS26","dIS25","dIS24","dIS23","dIS22","dIS21","dIS65","dIS64","dIS63","dIS62","dIS61","dDI48","dDI47","dDI46","dDI45","dDI44","dDI43","dDI42","dDI41","dDI85","dDI84","dDI83","dDI82","dDI81","dII38","dII37","dII36","dII35","dII34","dII33","dII32","dII31","dII75","dII74","dII73","dII72","dII7"],
      nullToEmptyString: true,
    };


    //aqui es lo que envias a la api y en la api llamas el nombre 
    // como dice ahi fecha,name,sexo
    var data = [
      {
        T1617P: this.formihost.TD16y17_Pl,
        T1121P: this.formihost.TD11y21_Pl,
        T2627P: this.formihost.TD26y27_Pl,
        T3637P: this.formihost.TD36y37_Pl,
        T3141P: this.formihost.TD31y41_Pl,
        T4647P: this.formihost.TD46y47_Pl,
        T1617S: this.formihost.TD16y17_Sa,
        T1121S: this.formihost.TD11y21_Sa,
        T2627S: this.formihost.TD26y27_Sa,
        T3637S: this.formihost.TD36y37_Sa,
        T3141S: this.formihost.TD31y41_Sa,
        T4647S: this.formihost.TD46y47_Sa,
        TPT: this.formihost.TerPlT,
        TST: this.formihost.TerSaT,
        TTI: this.formihost.TotalTerIH,
        OBS: this.formihost.Obser,
      }
    ];

    new AngularCsv(data, this.formihost.Obser, options);
    this._ihostservices.registrarIHOST(this.formihost).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}


