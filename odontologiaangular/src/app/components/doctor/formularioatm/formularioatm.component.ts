import { Component, OnInit } from '@angular/core';
import { FormularioAtm } from 'src/app/models/formularioatm'
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { FormularioAtmService } from 'src/app/services/formularioatm.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const Swal = require('sweetalert2')


@Component({
  selector: 'app-formularioatm',
  templateUrl: './formularioatm.component.html',
  styleUrls: ['./formularioatm.component.css'],
  providers: [FormularioAtmService]
})
export class FormularioAtmComponent implements OnInit {
  public formatm;
  public info_paciente:any;
  constructor(private _formularioatmservices:FormularioAtmService,public _recivir:Data_enivarService ) { 

    this.formatm= new FormularioAtm('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
  }
  
  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formatm)
          this.getAtm(res.Id_Paciente);
      }
    }) 

  }

  getAtm(id){
    console.log(id,"paciente")
    
    this._formularioatmservices.getFormularioatm(id).subscribe(res=>{
      console.log("datos formularioatm",res);
      if(!isNullOrUndefined(res.Atm[0])){ 
      let datos = res.Atm[0]
      
      this.formatm.Id_Pacient=id;
      this.formatm.ATMMov_Mand_Dim_Aper=datos.Mov_Mand_Dim_Aper;
      this.formatm.ATMMov_Mand_Dim_Vert1=datos.Mov_Mand_Dim_Vert1;
      this.formatm.ATMMov_Mand_Dim_Vert2=datos.Mov_Mand_Dim_Vert2;
      this.formatm.ATMMov_Mand_Desv_Mand_Apertura=datos.Mov_Mand_Desv_Mand_Apertura;
      this.formatm.ATMMov_Mand_Desv_Mand_Cierre=datos.Mov_Mand_Desv_Mand_Cierre;
      this.formatm.ATMR_Art_Chasquido=datos.R_Art_Chasquido;
      this.formatm.ATMR_Art_Apertura=datos.R_Art_Apertura;
      this.formatm.ATMR_Art_Cierre=datos.R_Art_Cierre;
      this.formatm.ATMR_Art_Der=datos.R_Art_Der=datos;
      this.formatm.ATMR_Art_Izq=datos.R_Art_Izq;
      this.formatm.ATMR_Art_Bilateral=datos.R_Art_Bilateral;
      this.formatm.ATMR_Art_Inicial=datos.R_Art_Inicial;
      this.formatm.ATMR_Art_Medio=datos.R_Art_Medio;
      this.formatm.ATMR_Art_Tardio=datos.R_Art_Tardio;
      this.formatm.ATMR_Art_Reciproco=datos.R_Art_Reciproco;
      this.formatm.ATMCrepitacion=datos.Crepitacion;
      this.formatm.ATMCrep_Der=datos.Crep_Der;
      this.formatm.ATMCrep_Izq=datos.Crep_Izq;
      this.formatm.ATMCrep_Bi=datos.Crep_B;
      this.formatm.ATMLuxacion=datos.Luxacion;
      this.formatm.ATMLux_Der=datos.Lux_Der;
      this.formatm.ATMLux_Izq=datos.Lux_Izq;
      this.formatm.ATMLux_Bi=datos.Lux_Bi;
      this.formatm.ATMDolor=datos.Dolor;
      this.formatm.ATMDolor_Der=datos.Dolor_Der;
      this.formatm.ATMDolor_Izq=datos.Dolor_Izq;
      this.formatm.ATMDolor_Bi=datos.Dolor_Bi;
      this.formatm.ATMSDP=datos.SDP;

      }
    })
  }


  onSubmit(form){
    console.log(this.formatm)
    console.log(this.info_paciente.Id_Paciente)
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
        Id_Pacient:this.info_paciente.Id_Paciente,
      }
    ];

    this.formatm.Id_Pacient=this.info_paciente.Id_Paciente

    new AngularCsv(data, this.formatm.firma, options);
    this._formularioatmservices.registrarFormularioAtm(this.formatm).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      }
    )
  }

}
