import { Component, OnInit } from '@angular/core';
import { Formulario1 } from 'src/app/models/formulario1';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Formulario1Service } from 'src/app/services/formulario1.service';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css'],
  providers: [Formulario1Service]
})
export class Formulario1Component implements OnInit {

  public form1;
  constructor( ) { this.form1= new Formulario1(0,'','','','','','Elija una opción','Elija una opción','Elija una opción','','Elija una opción','','','','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','Elija una opción','','Elija una opción','Elija una opción','','','','') }

  ngOnInit(): void {

  }

  onSubmit(form){
    console.log(this.form1)
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
        AlertaM: this.form1.alertam,
        Alergia: this.form1.alergias,
        Fecha: this.form1.fecha,
        name: this.form1.nombre,
        Telefono: this.form1.celular,
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

      },
      
    ];

    new AngularCsv(data, this.form1.firma, options);
  }

}
