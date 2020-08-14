import { Component, OnInit } from '@angular/core';
import { Odontograma } from 'src/app/models/odontograma';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { OdontogramaService } from 'src/app/services/odontograma.service';

@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css'],
  providers: [OdontogramaService] 
})
export class OdontogramaComponent implements OnInit {

    public formodonto;
    constructor(private _odontogramaservices:OdontogramaService ) { 
      // tienes q crear el modielo del doctor
      this.formodonto= new Odontograma('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','')
    }
  
  
    ngOnInit(): void {
    }
  
    onSubmit(form){
      console.log(this.formodonto)
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
          //odontograma
          D1: this.formodonto.dDS18,
          D2: this.formodonto.dDS17,
          D3: this.formodonto.dDS16,
          D4: this.formodonto.dDS15,
          D5: this.formodonto.dDS14,
          D6: this.formodonto.dDS13,
          D7: this.formodonto.dDS12,
          D8: this.formodonto.dDS11,
          D9: this.formodonto.dDS55,
          D10: this.formodonto.dDS54,
          D11: this.formodonto.dDS53,
          D12: this.formodonto.dDS52,
          D13: this.formodonto.dDS51,
          D14: this.formodonto.dIS28,
          D15: this.formodonto.dIS27,
          D16: this.formodonto.dIS26,
          D17: this.formodonto.dIS25,
          D18: this.formodonto.dIS24,
          D19: this.formodonto.dIS23,
          D20: this.formodonto.dIS22,
          D21: this.formodonto.dIS21,
          D22: this.formodonto.dIS65,
          D23: this.formodonto.dIS64,
          D24: this.formodonto.dIS63,
          D25: this.formodonto.dIS62,
          D26: this.formodonto.dIS61,
          D27: this.formodonto.dDI48,
          D28: this.formodonto.dDI47,
          D29: this.formodonto.dDI46,
          D30: this.formodonto.dDI45,
          D31: this.formodonto.dDI44,
          D32: this.formodonto.dDI43,
          D33: this.formodonto.dDI42,
          D34: this.formodonto.dDI41,
          D35: this.formodonto.dDI85,
          D36: this.formodonto.dDI84,
          D37: this.formodonto.dDI83,
          D38: this.formodonto.dDI82,
          D39: this.formodonto.dDI81,
          D40: this.formodonto.dII38,
          D41: this.formodonto.dII37,
          D42: this.formodonto.dII36,
          D43: this.formodonto.dII35,
          D44: this.formodonto.dII34,
          D45: this.formodonto.dII33,
          D46: this.formodonto.dII32,
          D47: this.formodonto.dII31,
          D48: this.formodonto.dII75,
          D49: this.formodonto.dII74,
          D50: this.formodonto.dII73,
          D51: this.formodonto.dII72,
          D52: this.formodonto.dII71,
          OBBS: this.formodonto.Obser,
        }
      ];
  
      new AngularCsv(data, this.formodonto.Obser, options);
      this._odontogramaservices.registrarOdontograma(this.formodonto).subscribe(
        response=>{
          console.log(response)
        }
      )
    }
  
  }
