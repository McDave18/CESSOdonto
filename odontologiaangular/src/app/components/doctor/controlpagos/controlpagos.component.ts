import { Component, OnInit } from '@angular/core';
import { ControlpagosService } from 'src/app/services/controlpagos.service';
import { Controlpagos } from 'src/app/models/controlpagos';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-controlpagos',
  templateUrl: './controlpagos.component.html',
  styleUrls: ['./controlpagos.component.css'],
  providers: [ControlpagosService]
})
export class ControlpagosComponent implements OnInit {

  public formpago;
  identity: any;
  constructor(private _controlpagosservices:ControlpagosService, public _loginServices: LoginService ) { 
    this.formpago= new Controlpagos('','','',0,0,0,'','')
    this.identity = _loginServices.getIdentity();  
    console.log(this.identity)
  }


  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.formpago)
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Tratamiento Paciente',
      useBom: true,
      noDownload: true,
      headers: ["ID16y17", "ID11y21", "ID26y27", "ID36y37", "Poblacion", "Facultad", "Enfermedades", "Consulta", "Penicilina","Otros","Cuales","Anestesia","¿Problemas?", "¿Qué ocurrio?", "Sangrado", "Hemorragia", "Anticoagulante", "Tranquilizantes", "Otros", "Cuales", "Diabetes", "Parentesco","Cara","Blando","Duro","Labios","Boca","Cuello","Salivales","Carrillos","Lengua","Amigdalas","dDS18","dDS17","dDS16","dDS15","dDS14","dDS13","dDS12","dDS11","dDS55","dDS54","dDS53","dDS52","dDS51","dIS28","dIS27","dIS26","dIS25","dIS24","dIS23","dIS22","dIS21","dIS65","dIS64","dIS63","dIS62","dIS61","dDI48","dDI47","dDI46","dDI45","dDI44","dDI43","dDI42","dDI41","dDI85","dDI84","dDI83","dDI82","dDI81","dII38","dII37","dII36","dII35","dII34","dII33","dII32","dII31","dII75","dII74","dII73","dII72","dII7"],
      nullToEmptyString: true,
    };


    //aqui es lo que envias a la api y en la api llamas el nombre 
    // como dice ahi fecha,name,sexo
    var data = [
      {
        FECH: this.formpago.fecha1,
        Name: this.formpago.namep,
        Trata: this.formpago.trat,
        Cos: this.formpago.costo,
        Abon: this.formpago.abono,
        Sald: this.formpago.saldo,
        Fol: this.formpago.folio,
        Alta: this.formpago.cldoc
      }
    ];

    new AngularCsv(data, this.formpago.namep, options);
    this._controlpagosservices.registrarControlpagos(this.formpago).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}