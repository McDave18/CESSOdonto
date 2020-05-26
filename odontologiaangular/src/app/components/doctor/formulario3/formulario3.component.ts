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

// export class AppComponent  {
//   age;
//   showAge;

//   ageCalculator(){
//     if(this.age){
//       const convertAge = new Date(this.age);
//       const timeDiff = Math.abs(Date.now() - convertAge.getTime());
//       this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
//     }
//   }
// }

export class Formulario3Component implements OnInit {

  public form3;

  constructor(private _formulario3services:Formulario3Service ) { this.form3= new Formulario3(0,'','','','','','',"","","","")}


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
      headers: ["Fecha", "Nombre", "Paterno", "Materno", "Sexo", "Celular", "Poblacion", "Facultad"],
      nullToEmptyString: true,
    };

    var data = [
      {
        Fecha: this.form3.fecha,
        name: this.form3.nombre,
        AP: this.form3.paterno,
        AM: this.form3.materno,
        Sexo: this.form3.sexo,
        Telefono: this.form3.celular,
        Poblacion: this.form3.poblacion,
        Facultad: this.form3.poblacion1,
        AGE: this.form3.age,
        ShowA: this.form3.showAge,
      }
    ];
    

    new AngularCsv(data, this.form3.paterno, options);
    this._formulario3services.registrarFormulario3(this.form3).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
