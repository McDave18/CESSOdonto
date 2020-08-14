import { Component, OnInit } from '@angular/core';
import { FormularioAtm } from 'src/app/models/formularioatm'
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { FormularioAtmService } from 'src/app/services/formularioatm.service';

@Component({
  selector: 'app-formularioatm',
  templateUrl: './formularioatm.component.html',
  styleUrls: ['./formularioatm.component.css'],
  providers: [FormularioAtmService]
})
export class FormularioAtmComponent implements OnInit {
  public formatm;

  constructor(private _formularioatmservices:FormularioAtmService ) { 

    this.formatm= new FormularioAtm(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
  }
  
  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.formatm)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Registro Paciente',
      useBom: true,
      noDownload: true,
      headers: ["Nombre", "Paterno", "Materno", "RFC","Tipo De Doctor","Usuario","Contraseña"],
      nullToEmptyString: true,
    };

    var data = [
      {
        MVA: this.formatm.ATMMov_Mand_Dim_Aper,
        MV1: this.formatm.ATMMov_Mand_Dim_Vert1,
        MV2: this.formatm.ATMMov_Mand_Dim_Vert2,
        MDA: this.formatm.ATMMov_Mand_Desv_Mand_Apertura,
        MDC: this.formatm.ATMMov_Mand_Desv_Mand_Cierre,
        Chas: this.formatm.ATMR_Art_Chasquido,
        Aper: this.formatm.ATMR_Art_Apertura,
        Cie: this.formatm.ATMR_Art_Cierre,
        Der: this.formatm.ATMR_Art_Der,
        Izq: this.formatm.ATMR_Art_Izq, 
        Bil: this.formatm.ATMR_Art_Bilateral,
        Ini: this.formatm.ATMR_Art_Inicial,
        Medio: this.formatm.ATMR_Art_Medio,
        Tardio: this.formatm.ATMR_Art_Tardio,
        Reci: this.formatm.ATMR_Art_Reciproco, 
        Crepi: this.formatm.ATMCrepitacion,
        CrepiD: this.formatm.ATMCrep_Der,
        CrepiI: this.formatm.ATMCrep_Izq,
        CrepiB: this.formatm.ATMCrep_Bi,
        Luxa: this.formatm.ATMLuxacion,
        LuxaD: this.formatm.ATMLux_Der,
        LuxaI: this.formatm.ATMLux_Izq,
        LuxaB: this.formatm.ATMLux_Bi,
        Dolor: this.formatm.ATMDolor,
        DolorD: this.formatm.ATMDolor_Der, 
        DolorI: this.formatm.ATMDolor_Izq,
        DolorB: this.formatm.ATMDolor_Bi,
        Spd: this.formatm.ATMSDP,

      }
    ];
    

    new AngularCsv(data, this.formatm.firma, options);
    this._formularioatmservices.registrarFormularioAtm(this.formatm).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
