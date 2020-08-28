import { Component, OnInit } from '@angular/core';
import { Plantratamiento } from 'src/app/models/plantratamiento';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { PlantratamientoService } from 'src/app/services/plantratamiento.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';

@Component({
  selector: 'app-plantratamiento',
  templateUrl: './plantratamiento.component.html',
  styleUrls: ['./plantratamiento.component.css'],
  providers: [PlantratamientoService]

})
export class PlantratamientoComponent implements OnInit {

  public formtra;
  public info_paciente:any;
  constructor(private _plantratamientoservices:PlantratamientoService,public _recivir:Data_enivarService ) 
  { 
  
    this.formtra= new Plantratamiento('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','')
  }


  ngOnInit(): void {
    this._recivir.dataid$.subscribe(res=>{
      this.info_paciente=res
      console.log("recibiendo info",this.info_paciente)
    }) 

  }

  onSubmit(form){
    console.log(this.formtra)
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

    var data = [
      {
        D1: this.formtra.TdDS18,
        D2: this.formtra.TdDS17,
        D3: this.formtra.TdDS16,
        D4: this.formtra.TdDS15,
        D5: this.formtra.TdDS14,
        D6: this.formtra.TdDS13,
        D7: this.formtra.TdDS12,
        D8: this.formtra.TdDS11,
        D14: this.formtra.TdIS28,
        D15: this.formtra.TdIS27,
        D16: this.formtra.TdIS26,
        D17: this.formtra.TdIS25,
        D18: this.formtra.TdIS24,
        D19: this.formtra.TdIS23,
        D20: this.formtra.TdIS22,
        D21: this.formtra.TdIS21,
        D27: this.formtra.TdDI48,
        D28: this.formtra.TdDI47,
        D29: this.formtra.TdDI46,
        D30: this.formtra.TdDI45,
        D31: this.formtra.TdDI44,
        D32: this.formtra.TdDI43,
        D33: this.formtra.TdDI42,
        D34: this.formtra.TdDI41,
        D40: this.formtra.TdII38,
        D41: this.formtra.TdII37,
        D42: this.formtra.TdII36,
        D43: this.formtra.TdII35,
        D44: this.formtra.TdII34,
        D45: this.formtra.TdII33,
        D46: this.formtra.TdII32,
        D47: this.formtra.TdII31,
        OBBS: this.formtra.TObser,
        Id_Pacient:this.info_paciente.Id_Paciente,
       
      }
    ];

    this.formtra.Id_Pacient=this.info_paciente.Id_Paciente
     

    new AngularCsv(data, this.formtra.TObser, options);
    this._plantratamientoservices.registrarPlantratamiento(this.formtra).subscribe(
      response=>{
        console.log(response)
      }
    )
  }

}

