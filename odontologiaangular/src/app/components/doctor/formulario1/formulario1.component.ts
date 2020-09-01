import { Component, OnInit } from '@angular/core';
import { Formulario1 } from 'src/app/models/formulario1';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Formulario1Service } from 'src/app/services/formulario1.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 

// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const Swal = require('sweetalert2')


@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css'],
  providers: [Formulario1Service]
})
export class Formulario1Component implements OnInit {

  public form1;
  public info_paciente:any;
  constructor(private _formulario1services:Formulario1Service,public _recivir:Data_enivarService  ) 
  { 
    this.form1= new Formulario1('','','','','','','','','','','','','','Elija una opción','Elija una opción','Elija una opción','','','','Elija una opción','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','') 
  }

  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.form1)
          this.getFormulariohealth(res.Id_Paciente);
      }
    }) 

  }

  getFormulariohealth(id){
    console.log(id,"paciente")
    
    this._formulario1services.getFormulario1(id).subscribe(res=>{
      console.log("datos formulario1",res);
      if(!isNullOrUndefined(res.Health[0])){ 
      let datos = res.Health[0]
      this.form1.Id_Pacient=id;
      this.form1.Iask1=datos.P1;
      this.form1.iask2=datos.P2;
      this.form1.iask3=datos.P3;
      this.form1.iask31=datos.P3_1;
      this.form1.Iask5=datos.P5;
      this.form1.iask4=datos.P4;
      this.form1.iask41=datos.P4_1;
      this.form1.iask42=datos.P4_2;
      this.form1.iask43=datos.P4_3;
      this.form1.IIask7=datos.P7;
      this.form1.IIask8=datos.P8;
      this.form1.IIask9=datos.P9;
      this.form1.IIask10=datos.P10;
      this.form1.IIask11=datos.P11;
      this.form1.IIask12=datos.P12;
      this.form1.IIask13=datos.P13;
      this.form1.IIask14=datos.P14;
      this.form1.IIask15=datos.P15;
      this.form1.IIask16=datos.P16;
      this.form1.IIask17=datos.P17;
      this.form1.IIask18=datos.P18;
      this.form1.IIask19=datos.P19;
      this.form1.IIask20=datos.P20;
      this.form1.IIask21=datos.P21;
      this.form1.IIask22=datos.P22;
      this.form1.IIask23=datos.P23;
      this.form1.IIask24=datos.P24;
      this.form1.IIask25=datos.P25;
      this.form1.IIask26=datos.P26;
      this.form1.IIask27=datos.P27;
      this.form1.IIask28=datos.P28;
      this.form1.IIIask29=datos.P29;
      this.form1.IIIask30=datos.P30;
      this.form1.IIIask31=datos.P31;
      this.form1.IIIask32=datos.P32;
      this.form1.IIIask33=datos.P33;
      this.form1.IIIask34=datos.P34;
      this.form1.IIIask35=datos.P35;
      this.form1.IIIask36=datos.P36;
      this.form1.IIIask37=datos.P37;
      this.form1.IIIask38=datos.P38;
      this.form1.IIIask39=datos.P39;
      this.form1.IIIask40=datos.P40;
      this.form1.IIIask41=datos.P41;
      this.form1.IIIask42=datos.P42;
      this.form1.IIIask43=datos.P43;
      this.form1.IIIask44=datos.P44;
      this.form1.IIIask45=datos.P45;
      this.form1.IIIask46=datos.P46;
      this.form1.IIIask47=datos.P47;
      this.form1.IIIask48=datos.P48;
      this.form1.IIIask49=datos.P49;
      this.form1.IIIask50=datos.P50;
      this.form1.IVask51=datos.P51;
      this.form1.IVask52=datos.P52;
      this.form1.IVask53=datos.P53;
      this.form1.IVask54=datos.P54;
      this.form1.IVask55=datos.P55;
      this.form1.IVask56=datos.P56;
      this.form1.IVask57=datos.P57;
      this.form1.IVask58=datos.P58;
      this.form1.IVask59=datos.P59;
      this.form1.IVask60=datos.P60;
      this.form1.Vask61=datos.P61;
      this.form1.Vask62=datos.P62;
      this.form1.Vask641=datos.P62_1;
      this.form1.Vask63=datos.P63;
      this.form1.Vask64=datos.P64;
      this.form1.VIask65=datos.P65;
      this.form1.VIask66=datos.P66;
      this.form1.VIIask67=datos.P67;
      this.form1.VIIask671=datos.P67_1;
      this.form1.fecha2=datos.fecha_hh;
      this.form1.firma=datos.FirmaP;
      
      }
    })
  }


  onSubmit(form){
    console.log(this.form1)
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
      headers: ["Alerta Médica", "Alergias", "Fecha", "Nombre del paciente", "Celular", "Pregunta 1", "Pregunta 2", "Pregunta 3","Pregunta 3a","Pregunta 4","Pregunta 5", "Pregunta 5a", "Pregunta 5b", "Pregunta 5c", "Pregunta 7", "Pregunta 8", "Pregunta 9", "Pregunta 10", "Pregunta 11", "Pregunta 12", "Pregunta 13", "Pregunta 14", "Pregunta 15", "Pregunta 16", "Pregunta 17", "Pregunta 18", "Pregunta 19", "Pregunta 20", "Pregunta 21", "Pregunta 22", "Pregunta 23", "Pregunta 24", "Pregunta 25", "Pregunta 26", "Pregunta 27", "Pregunta 28", "Pregunta 29", "Pregunta 30", "Pregunta 31", "Pregunta 32", "Pregunta 33", "Pregunta 34", "Pregunta 35", "Pregunta 36", "Pregunta 37", "Pregunta 38", "Pregunta 39", "Pregunta 40", "Pregunta 41", "Pregunta 42", "Pregunta 43", "Pregunta 44", "Pregunta 45", "Pregunta 46", "Pregunta 47", "Pregunta 48", "Pregunta 49", "Pregunta 50", "Pregunta 51", "Pregunta 52", "Pregunta 53", "Pregunta 54", "Pregunta 55", "Pregunta 56", "Pregunta 57", "Pregunta 58", "Pregunta 59", "Pregunta 60", "Pregunta 61", "Pregunta 62", "Pregunta 63", "Pregunta 64", "Pregunta 64a", "Pregunta 65", "Pregunta 66", "Pregunta 67", "Pregunta 67a", "Firma", "Fecha"],
      nullToEmptyString: true,
    };

    var data = [
      {
        Pregunta1: this.form1.Iask1,
        Pregunta2: this.form1.iask2,
        Pregunta3: this.form1.iask3,
        Pregunta3a: this.form1.iask31,
        Pregunta4: this.form1.Iask5,
        Pregunta5: this.form1.iask4,
        Pregunta5a: this.form1.iask41,
        Pregunta5b: this.form1.iask42,
        Pregunta5c: this.form1.iask43,

        Pregunta7: this.form1.IIask7,
        Pregunta8: this.form1.IIask8,
        Pregunta9: this.form1.IIask9,
        Pregunta10: this.form1.IIask10,
        Pregunta11: this.form1.IIask11,
        Pregunta12: this.form1.IIask12,
        Pregunta13: this.form1.IIask13,
        Pregunta14: this.form1.IIask14,
        Pregunta15: this.form1.IIask15,
        Pregunta16: this.form1.IIask16,
        Pregunta17: this.form1.IIask17,
        Pregunta18: this.form1.IIask18,
        Pregunta19: this.form1.IIask19,
        Pregunta20: this.form1.IIask20,
        Pregunta21: this.form1.IIask21,
        Pregunta22: this.form1.IIask22,
        Pregunta23: this.form1.IIask23,
        Pregunta24: this.form1.IIask24,
        Pregunta25: this.form1.IIask25,
        Pregunta26: this.form1.IIask26,
        Pregunta27: this.form1.IIask27,
        Pregunta28: this.form1.IIask28,

        Pregunta29: this.form1.IIIask29,
        Pregunta30: this.form1.IIIask30,
        Pregunta31: this.form1.IIIask31,
        Pregunta32: this.form1.IIIask32,
        Pregunta33: this.form1.IIIask33,
        Pregunta34: this.form1.IIIask34,
        Pregunta35: this.form1.IIIask35,
        Pregunta36: this.form1.IIIask36,
        Pregunta37: this.form1.IIIask37,
        Pregunta38: this.form1.IIIask38,
        Pregunta39: this.form1.IIIask39,
        Pregunta40: this.form1.IIIask40,
        Pregunta41: this.form1.IIIask41,
        Pregunta42: this.form1.IIIask42,
        Pregunta43: this.form1.IIIask43,
        Pregunta44: this.form1.IIIask44,
        Pregunta45: this.form1.IIIask45,
        Pregunta46: this.form1.IIIask46,
        Pregunta47: this.form1.IIIask47,
        Pregunta48: this.form1.IIIask48,
        Pregunta49: this.form1.IIIask49,
        Pregunta50: this.form1.IIIask50,

        Pregunta51: this.form1.IVask51,
        Pregunta52: this.form1.IVask52,
        Pregunta53: this.form1.IVask53,
        Pregunta54: this.form1.IVask54,
        Pregunta55: this.form1.IVask55,
        Pregunta56: this.form1.IVask56,
        Pregunta57: this.form1.IVask57,
        Pregunta58: this.form1.IVask58,
        Pregunta59: this.form1.IVask59,
        Pregunta60: this.form1.IVask60,

        Pregunta61: this.form1.Vask61,
        Pregunta62: this.form1.Vask62,
        Pregunta63: this.form1.Vask63,
        Pregunta64: this.form1.Vask64,
        Pregunta64a: this.form1.Vask641,

        Pregunta65: this.form1.VIask65,
        Pregunta66: this.form1.VIask66,

        Pregunta67: this.form1.VIIask67,
        Pregunta67a: this.form1.VIIask671,
        FirmaP: this.form1.firma,
        Fecha2: this.form1.fecha2,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.form1.Id_Pacient=this.info_paciente.Id_Paciente


    new AngularCsv(data, this.form1.firma, options);
    
    this._formulario1services.registrarFormulario1(this.form1).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      }
    )
  }

}
