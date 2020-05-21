import { Component, OnInit } from '@angular/core';
import { Formulario2 } from 'src/app/models/formulario2';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Formulario2Service } from 'src/app/services/formulario2.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css'],
  providers: [Formulario2Service]
})
export class Formulario2Component implements OnInit {

  public form2;
  constructor(private _formulario2services:Formulario2Service ) { this.form2= new Formulario2(0,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','')}


  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.form2)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Formulario Paciente',
      useBom: true,
      noDownload: false,
      headers: ["Fecha", "Nombre", "Sexo", "Celular", "Poblacion", "Facultad", "Pregunta 1", "Pregunta 2", "Pregunta 3","Pregunta 3a","Pregunta 3b","Pregunta 4","Pregunta 4a", "Pregunta 4b", "Pregunta 5", "Pregunta 5a", "Pregunta 6", "Pregunta 6a", "Pregunta 6b", "Pregunta 6c", "Pregunta 7", "Pregunta 7a","cara","Blando","Duro","Labios","Boca","Cuello","Salivales","Carrillos","Lengua","Amigdalas"],
      nullToEmptyString: true,
    };


    //aqui es lo que envias a la api y en la api llamas el nombre 
    // como dice ahi fecha,name,sexo
    var data = [
      {
        Fecha: this.form2.fecha,
        name: this.form2.nombre,
        Sexo: this.form2.sexo,
        Telefono: this.form2.celular,
        Poblacion: this.form2.poblacion,
        Facultad: this.form2.poblacion1,

        Pregunta1: this.form2.Iask1,
        Pregunta2: this.form2.Iask2,
        Pregunta3: this.form2.Iask3,
        Pregunta3a: this.form2.Iask31,
        Pregunta3b: this.form2.Iask32,
        Pregunta4: this.form2.Iask4,
        Pregunta4a: this.form2.Iask41,
        Pregunta4b: this.form2.Iask42,
        Pregunta5: this.form2.Iask5,
        Pregunta5a: this.form2.Iask51,
        Pregunta5b: this.form2.Iask52,
        Pregunta6: this.form2.Iask6,
        Pregunta6a: this.form2.Iask61,
        Pregunta6b: this.form2.Iask62,
        Pregunta6c: this.form2.Iask63,
        Pregunta7: this.form2.Iask7,
        Pregunta7a: this.form2.Iask7a,
        Cara: this.form2.cara,
        Blando: this.form2.blando,
        Duro: this.form2.duro,
        Labios: this.form2.labios,
        Boca: this.form2.boca,
        Cuello: this.form2.cuello,
        Salivales: this.form2.salivales,
        Carrillos: this.form2.carrillos,
        Lengua: this.form2.lengua,
        Amigdalas: this.form2.amigdalas,

        

      },
      
    ];

    new AngularCsv(data, this.form2.nombre, options);
    this._formulario2services.registrarFormulario2(this.form2).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
