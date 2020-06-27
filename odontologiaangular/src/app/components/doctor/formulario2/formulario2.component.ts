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
  constructor(private _formulario2services:Formulario2Service ) { 
    // tienes q crear el modielo del doctor
    this.form2= new Formulario2(0,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','')
  }


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
        //odontograma
        D1: this.form2.dDS18,
        D2: this.form2.dDS17,
        D3: this.form2.dDS16,
        D4: this.form2.dDS15,
        D5: this.form2.dDS14,
        D6: this.form2.dDS13,
        D7: this.form2.dDS12,
        D8: this.form2.dDS11,
        D9: this.form2.dDS55,
        D10: this.form2.dDS54,
        D11: this.form2.dDS53,
        D12: this.form2.dDS52,
        D13: this.form2.dDS51,
        D14: this.form2.dIS28,
        D15: this.form2.dIS27,
        D16: this.form2.dIS26,
        D17: this.form2.dIS25,
        D18: this.form2.dIS24,
        D19: this.form2.dIS23,
        D20: this.form2.dIS22,
        D21: this.form2.dIS21,
        D22: this.form2.dIS65,
        D23: this.form2.dIS64,
        D24: this.form2.dIS63,
        D25: this.form2.dIS62,
        D26: this.form2.dIS61,
        D27: this.form2.dDI48,
        D28: this.form2.dDI47,
        D29: this.form2.dDI46,
        D30: this.form2.dDI45,
        D31: this.form2.dDI44,
        D32: this.form2.dDI43,
        D33: this.form2.dDI42,
        D34: this.form2.dDI41,
        D35: this.form2.dDI85,
        D36: this.form2.dDI84,
        D37: this.form2.dDI83,
        D38: this.form2.dDI82,
        D39: this.form2.dDI81,
        D40: this.form2.dII38,
        D41: this.form2.dII37,
        D42: this.form2.dII36,
        D43: this.form2.dII35,
        D44: this.form2.dII34,
        D45: this.form2.dII33,
        D46: this.form2.dII32,
        D47: this.form2.dII31,
        D48: this.form2.dII75,
        D49: this.form2.dII74,
        D50: this.form2.dII73,
        D51: this.form2.dII72,
        D52: this.form2.dII71,
      }
    ];

    new AngularCsv(data, this.form2.anestesia, options);
    this._formulario2services.registrarFormulario2(this.form2).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}
