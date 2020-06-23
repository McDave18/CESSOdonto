import { Component, OnInit } from '@angular/core';
// import { FormularioDoc } from 'src/app/models/formulariodoc';
import { FormularioDoc } from 'src/app/models/formulariodoc'
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { FormularioDocService } from 'src/app/services/formulariodoc.service';

@Component({
  selector: 'app-formulariodoc',
  templateUrl: './formulariodoc.component.html',
  styleUrls: ['./formulariodoc.component.css'],
  providers: [FormularioDocService]
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

export class FormularioDocComponent implements OnInit {

  public formdoc;

  constructor(private _formulariodocservices:FormularioDocService ) { this.formdoc= new FormularioDoc(0,'','','','','','','',)}
  
  // age;
  // showAge;

  // ageCalculator(){
  //   if(this.age){
  //     const convertAge = new Date(this.age);
  //     const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  //     this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  //   }
  // }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.formdoc)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Registro Paciente',
      useBom: true,
      noDownload: false,
      headers: ["Nombre", "Paterno", "Materno", "RFC","Tipo De Doctor","Usuario","Contraseña"],
      nullToEmptyString: true,
    };

    var data = [
      {
        name: this.formdoc.nombre,
        AP: this.formdoc.paterno,
        AM: this.formdoc.materno,
        RFC: this.formdoc.rfc,
        TipD: this.formdoc.tipoD,
        NumIDM: this.formdoc.numid,
        PWD: this.formdoc.psswd
      }
    ];
    

    new AngularCsv(data, this.formdoc.paterno, options);
    this._formulariodocservices.registrarFormularioDoc(this.formdoc).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
