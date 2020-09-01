import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
import { Notas } from 'src/app/models/notas';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { LoginService } from 'src/app/services/login.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const Swal = require('sweetalert2') 


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
  providers: [NotasService]
})
export class NotasComponent implements OnInit {

  public formnota;
  identity: any;
  public info_paciente:any;
  public notas=[]
  constructor(private _notasservices:NotasService, public _loginServices: LoginService,public _recivir:Data_enivarService ) { 
    this.formnota= new Notas('','','','','')
    this.identity = _loginServices.getIdentity();  
    console.log(this.identity)
  }


  ngOnInit(): void {

    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.formnota)
          this.getFormularionotas(res.Id_Paciente);
          this.getnotas(res.Id_Paciente)
      }
    }) 

  }

  getFormularionotas(id){
    console.log(id,"paciente")
    
    this._notasservices.getNotas(id).subscribe(res=>{
      console.log("datos notas",res);
      if(!isNullOrUndefined(res.Notas[0])){ // creo q asi es si el array tine mas de 1  entra y te muestra los datos
      let datos = res.Notas[0]
      
      this.formnota.Id_Pacient=id;//se guardó el formulario pero no el Id aber de nuevo voy 
      this.formnota.fechanota=datos.FechaE;
      this.formnota.nodiente=datos.NoDiente;
      this.formnota.trata=datos.Tratamiento;
      this.formnota.nombredr=datos.NombreDr;
      
      }
    })
  }

  onSubmit(form){
    console.log(this.formnota)
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
        FECH: this.formnota.fechanota,
        Name: this.formnota.nodiente,
        Trata: this.formnota.trata,
        nombredr:this.identity.name+this.identity.surname,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formnota.Id_Pacient=this.info_paciente.Id_Paciente
    this.formnota.nombredr=this.identity.name+this.identity.surname

    new AngularCsv(data, this.formnota.fechanota, options);
    this._notasservices.registrarNotas(this.formnota).subscribe(
      response=>{
        console.log(response)
        Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
      },error=>{
          Swal.fire('Oops...', 'algo salió mal!', 'error')
      }
    )
  }
  getnotas(id){
    this._notasservices.getNotas(id).subscribe(notas=>{
      console.log(notas)
      this.notas=notas.Notas;
    })
  }

}
