import { Component, OnInit } from '@angular/core';
import { ControlpagosService } from 'src/app/services/controlpagos.service';
import { Controlpagos } from 'src/app/models/controlpagos';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { LoginService } from 'src/app/services/login.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-controlpagos',
  templateUrl: './controlpagos.component.html',
  styleUrls: ['./controlpagos.component.css'],
  providers: [ControlpagosService]
})
export class ControlpagosComponent implements OnInit {

  public formpago;
  identity: any;
  public info_paciente:any;
  constructor(private _controlpagosservices:ControlpagosService, public _loginServices: LoginService,public _recivir:Data_enivarService ) { 
    this.formpago= new Controlpagos('','',0,0,0,'','')
    this.identity = _loginServices.getIdentity();  
    console.log(this.identity)
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formpago)
          this.getFormulariopagos(res.Id_Paciente);
      }
    }) 

  }

  getFormulariopagos(id){
    console.log(id,"paciente")
    
    this._controlpagosservices.getControlpagos(id).subscribe(res=>{
      console.log("datos formulariopagos",res);
      if(!isNullOrUndefined(res.Pagos[0])){ // creo q asi es si el array tine mas de 1  entra y te muestra los datos
      let datos = res.Pagos[0]
      
      this.formpago.Id_Pacient=id;//se guardó el formulario pero no el Id aber de nuevo voy 
      this.formpago.fecha1=datos.Fecha_Trat;
      this.formpago.costo=datos.CostoT;
      this.formpago.abono=datos.Abono_T;
      this.formpago.saldo=datos.SaldoT;
      this.formpago.folio=datos.FolioT;
      this.formpago.Alta=datos.Doctor_T;
      
      }
    })
  }

  onSubmit(form){
    console.log(this.formpago)
    console.log(this.info_paciente.Id_Paciente)
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
        Alta:this.identity.name+this.identity.surname,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formpago.Id_Pacient=this.info_paciente.Id_Paciente
    this.formpago.Alta=this.identity.name+this.identity.surname

    new AngularCsv(data, this.formpago.namep, options);
    this._controlpagosservices.registrarControlpagos(this.formpago).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}