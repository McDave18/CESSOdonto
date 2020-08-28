import { Component, OnInit } from '@angular/core';
import { Formulario2 } from 'src/app/models/formulario2';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { Formulario2Service } from 'src/app/services/formulario2.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css'],
  providers: [Formulario2Service]
})
export class Formulario2Component implements OnInit {

  public form2;
  public info_paciente:any;
  constructor(private _formulario2services:Formulario2Service,public _recivir:Data_enivarService ) { 
    
    this.form2= new Formulario2('','','','','','','','','','','','','','','','','','','','','','','','','','','')
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
      if(!isNullOrUndefined(res)){
        console.log(this.form2)
          this.getFormulariointe(res.Id_Paciente);
          this.getFormularioexplo(res.Id_Paciente);
      }
    }) 

  }

  getFormulariointe(id){
    console.log(id,"paciente")
    
    this._formulario2services.getFormulario2(id).subscribe(res=>{
      console.log("datos formulario2",res);
      if(!isNullOrUndefined(res.Interrogacion[0])){ 
      let datos = res.Interrogacion[0]
      
      this.form2.Id_Pacient=id;
      this.form2.enfermedades=datos.Enfermedades; 
      this.form2.diagnosticos=datos.Diagnosticos;
      this.form2.penicilina=datos.Alergia_Penicilina;
      this.form2.pen_otros=datos.Alergia_Otros;
      this.form2.pen_cuales=datos.Cuales;
      this.form2.anestesia=datos.Anestesia; 
      this.form2.prom_anestesia=datos.Problema_Anestesia;
      this.form2.des_anestesia=datos.Descripcion_4;
      this.form2.sangra=datos.SangraMucho;
      this.form2.hemorragia=datos.HemorragiaFrec;
      this.form2.usa_anti=datos.UsaAnti;
      this.form2.usa_tranqui=datos.UsaTranqui;
      //$interrogacion->6_2_Descripcion=$params["usa_tranqui_descrip"];
      this.form2.otros_med =datos.Otros_Med;//suptm estas cabron  que paso, ya guarda
      this.form2.otros_med_des= datos.Descripcion_6_4;
      this.form2.diabetico =datos.ParienteDiabetico;
      this.form2.par_cual=datos.Cuales_7_1;
      }
    })
  }
  getFormularioexplo(id){
    console.log(id,"paciente")
    
    this._formulario2services.getFormulario2ex(id).subscribe(res=>{
      console.log("datos formulario2",res.Exploracion);
      if(!isNullOrUndefined (res.Exploracion[0])){ // creo q asi es si el array tine mas de 1  entra y te muestra los datos
      let datos = res.Exploracion[0]
      
      this.form2.Id_Pacient=id;//crack esa era del otro
      this.form2.cara=datos.Cara;
      this.form2.blando=datos.PBlando;
      this.form2.duro=datos.PDuro;
      this.form2.labios=datos.Labios;
      this.form2.boca=datos.Piso_boca;
      this.form2.cuello=datos.Cuello;
      this.form2.salivales=datos.GSalivales;
      this.form2.carrillos=datos.Carrillos;
      this.form2.lengua=datos.Lengua;
      this.form2.amigdalas=datos.Amigdalas;

      
      }
    })
  }

  onSubmit(form){
    console.log(this.form2)
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
      headers: ["Fecha", "Nombre", "Sexo", "Celular", "Poblacion", "Facultad", "Enfermedades", "Consulta", "Penicilina","Otros","Cuales","Anestesia","¿Problemas?", "¿Qué ocurrio?", "Sangrado", "Hemorragia", "Anticoagulante", "Tranquilizantes", "Otros", "Cuales", "Diabetes", "Parentesco","Cara","Blando","Duro","Labios","Boca","Cuello","Salivales","Carrillos","Lengua","Amigdalas","dDS18","dDS17","dDS16","dDS15","dDS14","dDS13","dDS12","dDS11","dDS55","dDS54","dDS53","dDS52","dDS51","dIS28","dIS27","dIS26","dIS25","dIS24","dIS23","dIS22","dIS21","dIS65","dIS64","dIS63","dIS62","dIS61","dDI48","dDI47","dDI46","dDI45","dDI44","dDI43","dDI42","dDI41","dDI85","dDI84","dDI83","dDI82","dDI81","dII38","dII37","dII36","dII35","dII34","dII33","dII32","dII31","dII75","dII74","dII73","dII72","dII7"],
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
        //Interrogatorio
        Enfermedad: this.form2.enfermedades,
        Diagnostico: this.form2.diagnosticos,
        Penicilina: this.form2.penicilina,
        Pen2: this.form2.pen_otros,
        Pen3: this.form2.pen_cuales,
        Anestesia: this.form2.anestesia,
        Anestesia1: this.form2.prom_anestesia,
        Anestesia2: this.form2.des_anestesia,
        Sangrado: this.form2.sangra,
        Hemorragia: this.form2.hemorragia,
        Anti: this.form2.usa_anti,
        Tranqui: this.form2.usa_tranqui,
        //Tranqui1: this.form2.usa_tranqui_descrip,
        OtrosMed1: this.form2.otros_med,
        OtrosMed2: this.form2.otros_med_des,
        Diabetico: this.form2.diabetico,
        FamiliarDiab: this.form2.par_cual,
        //exploracion
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
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.form2.Id_Pacient=this.info_paciente.Id_Paciente
  
    new AngularCsv(data, this.form2.anestesia, options);
    this._formulario2services.registrarFormulario2(this.form2).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
