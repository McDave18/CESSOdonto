import { Component, OnInit } from '@angular/core';
import { IHOSTService } from 'src/app/services/ihost.service';
import { IHOST } from 'src/app/models/ihost';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-ihost',
  templateUrl: './ihost.component.html',
  styleUrls: ['./ihost.component.css'],
  providers: [IHOSTService]

})
export class IHOSTComponent implements OnInit {

  public formihost;
  public info_paciente:any;
  constructor(private _ihostservices:IHOSTService ,public _recivir:Data_enivarService) { 
    
    this.formihost= new IHOST('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'')
  }

  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formihost)
          this.getFormularioihost(res.Id_Paciente);
      }
    })

  }

  getFormularioihost(id){
    console.log(id,"paciente")
    
    this._ihostservices.getIHOST(id).subscribe(res=>{
      console.log("datos formulario ihost",res);
      if(!isNullOrUndefined(res.Ihost[0])){ // creo q asi es si el array tine mas de 1  entra y te muestra los datos
      let datos = res.Ihost[0]
      
      this.formihost.Id_Pacient=id;//se guardó el formulario pero no el Id aber de nuevo voy
      this.formihost.TD16y17_Pl=datos.TD16y17_Placa;
      this.formihost.TD11y21_Pl=datos.TD11y21_Placa;
      this.formihost.TD26y27_Pl=datos.TD26y27_Placa;
      this.formihost.TD36y37_Pl=datos.TD36y37_Placa;
      this.formihost.TD31y41_Pl=datos.TD31y41_Placa;
      this.formihost.TD46y47_Pl=datos.TD46y47_Placa;
      this.formihost.TD16y17_Sa=datos.TD16y17_Sarro;
      this.formihost.TD11y21_Sa=datos.TD11y21_Sarro;
      this.formihost.TD26y27_Sa=datos.TD26y27_Sarro;
      this.formihost.TD36y37_Sa=datos.TD36y37_Sarro;
      this.formihost.TD31y41_Sa=datos.TD31y41_Sarro;
      this.formihost.TD46y47_Sa=datos.TD46y47_Sarro;
      this.formihost.TerPlT=datos.TerPlacaTotal;
      this.formihost.TerSaT=datos.TerSarroTotal;
      this.formihost.TotalTerIH=datos.TotalTerIHOS;
      this.formihost.Obser=datos.ObservacionesIHOS;
    }
    })
  }

  onSubmit(form){
    console.log(this.formihost)
    console.log(this.info_paciente.Id_Paciente)
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
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formihost.Id_Pacient=this.info_paciente.Id_Paciente
    this.formihost.TerPlT= this.formihost.TD16y17_Pl+this.formihost.TD11y21_Pl+this.formihost.TD26y27_Pl+this.formihost.TD36y37_Pl+this.formihost.TD31y41_Pl+this.formihost.TD46y47_Pl
    this.formihost.TerSaT= this.formihost.TD16y17_Sa+this.formihost.TD11y21_Sa+this.formihost.TD26y27_Sa+this.formihost.TD36y37_Sa+this.formihost.TD31y41_Sa+this.formihost.TD46y47_Sa
    this.formihost.TotalTerIH= ((this.formihost.TD16y17_Pl+this.formihost.TD11y21_Pl+this.formihost.TD26y27_Pl+this.formihost.TD36y37_Pl+this.formihost.TD31y41_Pl+this.formihost.TD46y47_Pl)/6)+((this.formihost.TD16y17_Sa+this.formihost.TD11y21_Sa+this.formihost.TD26y27_Sa+this.formihost.TD36y37_Sa+this.formihost.TD31y41_Sa+this.formihost.TD46y47_Sa)/6)

    new AngularCsv(data, this.formihost.Obser, options);
    this._ihostservices.registrarIHOST(this.formihost).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}


