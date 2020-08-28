import { Component, OnInit } from '@angular/core';
import { Formulario3 } from 'src/app/models/formulario3';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Formulario3Service } from 'src/app/services/formulario3.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css'],
  providers: [Formulario3Service]
})

export class Formulario3Component implements OnInit {

  public form3;
  identity: any;

  constructor(private _formulario3services:Formulario3Service, public _loginServices: LoginService ) 
  { 
    this.form3= new Formulario3('','','','','','',0,'','','','','',0,'','','','','')
    this.identity = _loginServices.getIdentity();  
    console.log(this.identity)
  }
  


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
      title: 'Registro Paciente',
      useBom: true,
      noDownload: true,
      headers: ["Fecha", "Nombre", "Paterno", "Materno", "RFC","Sexo","Ciudad","Colonia","Calle","Codigo Postal", "Cel. Casa","Celular", "Doctor","Poblacion", "Facultad"],
      nullToEmptyString: true,
    };

    var data = [
      {
        Fecha: this.form3.fecha,
        FechaDOB: this.form3.fechadob,
        name: this.form3.nombre,
        AP: this.form3.paterno,
        AM: this.form3.materno,
        ED: this.form3.edad,
        RFC: this.form3.rfc,
        Sexo: this.form3.sexo,
        CD: this.form3.ciudad,
        Col: this.form3.colonia,
        Calle: this.form3.calle,
        CP: this.form3.cp,
        CelCasa: this.form3.celcasa,
        Telefono: this.form3.celular,
        Altas: this.identity.name+this.identity.surname,
        Poblacion: this.form3.poblacion,
        Facultad: this.form3.poblacion1,
      }
    ];

    this.form3.Altas=this.identity.name+this.identity.surname

    new AngularCsv(data, this.form3.paterno, options);
    this._formulario3services.registrarFormulario3(this.form3).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
