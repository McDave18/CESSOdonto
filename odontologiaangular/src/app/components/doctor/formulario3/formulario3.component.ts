import { Component, OnInit } from '@angular/core';
import { Formulario3 } from 'src/app/models/formulario3';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Formulario3Service } from 'src/app/services/formulario3.service';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css'],
  providers: [Formulario3Service]
})
export class Formulario3Component implements OnInit {

  public form3;
  constructor(private _formulario3services:Formulario3Service ) { this.form3= new Formulario3(0,'','','','','','')}


  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.form3)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Formulario Paciente',
      useBom: true,
      noDownload: false,
      headers: ["Fecha", "Nombre", "Sexo", "Celular", "Poblacion", "Facultad"],
      nullToEmptyString: true,
    };

    var data = [
      {
        Fecha: this.form3.fecha,
        name: this.form3.nombre,
        Sexo: this.form3.sexo,
        Telefono: this.form3.celular,
        Poblacion: this.form3.poblacion,
        Facultad: this.form3.poblacion1,
      }
    ];

    new AngularCsv(data, this.form3.anestesia, options);
    this._formulario3services.registrarFormulario3(this.form3).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
