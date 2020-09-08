import { Component, OnInit } from '@angular/core';
import { Odontograma } from 'src/app/models/odontograma';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { OdontogramaService } from 'src/app/services/odontograma.service';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { isNullOrUndefined } from 'util';
import Swal from 'sweetalert2'; 
import { SumaOPipe } from 'src/app/pipes/suma-o.pipe';
import { SumaCPipe } from 'src/app/pipes/sumac.pipe';
import { SumaPPipe } from 'src/app/pipes/suma-p.pipe';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
// const Swal = require('sweetalert2')

@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css'],
  providers: [OdontogramaService,SumaOPipe,SumaCPipe, SumaPPipe] 
})
export class OdontogramaComponent implements OnInit {

    public formodonto;
    public info_paciente:any;
    
    constructor(public dientesuma:SumaCPipe, public dientesuma2:SumaPPipe, public dientesuma3:SumaOPipe, private _odontogramaservices:OdontogramaService, public _recivir:Data_enivarService ) { 
      
      this.formodonto= new Odontograma('',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'')
    }
  
    ngOnInit(): void {
      this._recivir.dataid$.subscribe(res=>{
        this.info_paciente=res
        console.log("recibiendo info",this.info_paciente)
        if(!isNullOrUndefined(res)){
          console.log(this.formodonto)
            this.getFormularioodonto(res.Id_Paciente);
        }
      }) 
  
    }

    getFormularioodonto(id){
      console.log(id,"paciente")
      
      
      this._odontogramaservices.getOdontograma(id).subscribe(res=>{
        console.log("datos odontograma",res.Odontograma);
        if(!isNullOrUndefined(res.Odontograma[0])){ 
        let datos = res.Odontograma[0]
        
        this.formodonto.Id_Pacient=id;
        this.formodonto.dDS18=datos.DDS18;
        this.formodonto.dDS17=datos.DDS17;
        this.formodonto.dDS16=datos.DDS16;
        this.formodonto.dDS15=datos.DDS15;
        this.formodonto.dDS14=datos.DDS14;
        this.formodonto.dDS13=datos.DDS13;
        this.formodonto.dDS12=datos.DDS12;
        this.formodonto.dDS11=datos.DDS11;
        this.formodonto.dDS55=datos.DDS55;
        this.formodonto.dDS54=datos.DDS54;
        this.formodonto.dDS53=datos.DDS53;
        this.formodonto.dDS52=datos.DDS52;
        this.formodonto.dDS51=datos.DDS51;
        this.formodonto.dIS28=datos.DIS28;
        this.formodonto.dIS27=datos.DIS27;
        this.formodonto.dIS26=datos.DIS26;
        this.formodonto.dIS25=datos.DIS25;
        this.formodonto.dIS24=datos.DIS24;
        this.formodonto.dIS23=datos.DIS23;
        this.formodonto.dIS22=datos.DIS22;
        this.formodonto.dIS21=datos.DIS21;
        this.formodonto.dIS65=datos.DIS65;
        this.formodonto.dIS64=datos.DIS64;
        this.formodonto.dIS63=datos.DIS63;
        this.formodonto.dIS62=datos.DIS62;
        this.formodonto.dIS61=datos.DIS61;
        this.formodonto.dDI48=datos.DDI48;
        this.formodonto.dDI47=datos.DDI47;
        this.formodonto.dDI46=datos.DDI46;
        this.formodonto.dDI45=datos.DDI45;
        this.formodonto.dDI44=datos.DDI44;
        this.formodonto.dDI43=datos.DDI43;
        this.formodonto.dDI42=datos.DDI42;
        this.formodonto.dDI41=datos.DDI41;
        this.formodonto.dDI85=datos.DDI85;
        this.formodonto.dDI84=datos.DDI84;
        this.formodonto.dDI83=datos.DDI83;
        this.formodonto.dDI82=datos.DDI82;
        this.formodonto.dDI81=datos.DDI81;
        this.formodonto.dII38=datos.DII38;
        this.formodonto.dII37=datos.DII37;
        this.formodonto.dII36=datos.DII36;
        this.formodonto.dII35=datos.DII35;
        this.formodonto.dII34=datos.DII34;
        this.formodonto.dII33=datos.DII33;
        this.formodonto.dII32=datos.DII32;
        this.formodonto.dII31=datos.DII31;
        this.formodonto.dII75=datos.DII75;
        this.formodonto.dII74=datos.DII74;
        this.formodonto.dII73=datos.DII73;
        this.formodonto.dII72=datos.DII72;
        this.formodonto.dII71=datos.DII71;
        this.formodonto.Obser=datos.ObserOdonto;
        }
      })
    }
    
  
    onSubmit(form){

      let o=  this.dientesuma.transform(this.formodonto.dDS18,this.formodonto.dDS17,this.formodonto.dDS16,this.formodonto.dDS15,this.formodonto.dDS14,this.formodonto.dDS13,this.formodonto.dDS12,this.formodonto.dDS11,this.formodonto.dDS55,this.formodonto.dDS54,this.formodonto.dDS53,this.formodonto.dDS52,this.formodonto.dDS51,this.formodonto.dIS28,this.formodonto.dIS27,this.formodonto.dIS26,this.formodonto.dIS25,this.formodonto.dIS24,this.formodonto.dIS23,this.formodonto.dIS22,this.formodonto.dIS21,this.formodonto.dIS65,this.formodonto.dIS64,this.formodonto.dIS63,this.formodonto.dIS62,this.formodonto.dIS61,this.formodonto.dDI48,this.formodonto.dDI47,this.formodonto.dDI46,this.formodonto.dDI45,this.formodonto.dDI44,this.formodonto.dDI43,this.formodonto.dDI42,this.formodonto.dDI41,this.formodonto.dDI85,this.formodonto.dDI84,this.formodonto.dDI83,this.formodonto.dDI82,this.formodonto.dDI81,this.formodonto.dII38,this.formodonto.dII37,this.formodonto.dII36,this.formodonto.dII35,this.formodonto.dII34,this.formodonto.dII33,this.formodonto.dII32,this.formodonto.dII31,this.formodonto.dII75,this.formodonto.dII74,this.formodonto.dII73,this.formodonto.dII72,this.formodonto.dII71)
      let p=  this.dientesuma2.transform(this.formodonto.dDS18,this.formodonto.dDS17,this.formodonto.dDS16,this.formodonto.dDS15,this.formodonto.dDS14,this.formodonto.dDS13,this.formodonto.dDS12,this.formodonto.dDS11,this.formodonto.dDS55,this.formodonto.dDS54,this.formodonto.dDS53,this.formodonto.dDS52,this.formodonto.dDS51,this.formodonto.dIS28,this.formodonto.dIS27,this.formodonto.dIS26,this.formodonto.dIS25,this.formodonto.dIS24,this.formodonto.dIS23,this.formodonto.dIS22,this.formodonto.dIS21,this.formodonto.dIS65,this.formodonto.dIS64,this.formodonto.dIS63,this.formodonto.dIS62,this.formodonto.dIS61,this.formodonto.dDI48,this.formodonto.dDI47,this.formodonto.dDI46,this.formodonto.dDI45,this.formodonto.dDI44,this.formodonto.dDI43,this.formodonto.dDI42,this.formodonto.dDI41,this.formodonto.dDI85,this.formodonto.dDI84,this.formodonto.dDI83,this.formodonto.dDI82,this.formodonto.dDI81,this.formodonto.dII38,this.formodonto.dII37,this.formodonto.dII36,this.formodonto.dII35,this.formodonto.dII34,this.formodonto.dII33,this.formodonto.dII32,this.formodonto.dII31,this.formodonto.dII75,this.formodonto.dII74,this.formodonto.dII73,this.formodonto.dII72,this.formodonto.dII71)
      let c=  this.dientesuma3.transform(this.formodonto.dDS18,this.formodonto.dDS17,this.formodonto.dDS16,this.formodonto.dDS15,this.formodonto.dDS14,this.formodonto.dDS13,this.formodonto.dDS12,this.formodonto.dDS11,this.formodonto.dDS55,this.formodonto.dDS54,this.formodonto.dDS53,this.formodonto.dDS52,this.formodonto.dDS51,this.formodonto.dIS28,this.formodonto.dIS27,this.formodonto.dIS26,this.formodonto.dIS25,this.formodonto.dIS24,this.formodonto.dIS23,this.formodonto.dIS22,this.formodonto.dIS21,this.formodonto.dIS65,this.formodonto.dIS64,this.formodonto.dIS63,this.formodonto.dIS62,this.formodonto.dIS61,this.formodonto.dDI48,this.formodonto.dDI47,this.formodonto.dDI46,this.formodonto.dDI45,this.formodonto.dDI44,this.formodonto.dDI43,this.formodonto.dDI42,this.formodonto.dDI41,this.formodonto.dDI85,this.formodonto.dDI84,this.formodonto.dDI83,this.formodonto.dDI82,this.formodonto.dDI81,this.formodonto.dII38,this.formodonto.dII37,this.formodonto.dII36,this.formodonto.dII35,this.formodonto.dII34,this.formodonto.dII33,this.formodonto.dII32,this.formodonto.dII31,this.formodonto.dII75,this.formodonto.dII74,this.formodonto.dII73,this.formodonto.dII72,this.formodonto.dII71)
      let total= c+p+o
     
      console.log("O:",o)
      console.log("P:",p)
      console.log("C:",c)
      console.log("CPO", total)
      //ese que agarraste es la suma de C P y O,  espara saver si saca la cbien  los tres tienen el mismo valor ? q o, cada pipe es para comparar con diferentes valores, pero lo que se compara son los mismos, solo que en en el sumaC se compara que sea igual a 3, en sumaP sea igual a 4, sumaO sea igual a 1 o 2, en esos 3 pipes se debe de comparar con todos los dientes ok
      // ((+(formodonto.dDS18|sumaP:formodonto.dDS17:formodonto.dDS16:formodonto.dDS15:formodonto.dDS14:formodonto.dDS13:formodonto.dDS12:formodonto.dDS11:formodonto.dDS55:formodonto.dDS54:formodonto.dDS53:formodonto.dDS52:formodonto.dDS51:formodonto.dIS28:formodonto.dIS27:formodonto.dIS26:formodonto.dIS25:formodonto.dIS24:formodonto.dIS23:formodonto.dIS22:formodonto.dIS21:formodonto.dIS65:formodonto.dIS64:formodonto.dIS63:formodonto.dIS62:formodonto.dIS61:formodonto.dDI48:formodonto.dDI47:formodonto.dDI46:formodonto.dDI45:formodonto.dDI44:formodonto.dDI43:formodonto.dDI42:formodonto.dDI41:formodonto.dDI85:formodonto.dDI84:formodonto.dDI83:formodonto.dDI82:formodonto.dDI81:formodonto.dII38:formodonto.dII37:formodonto.dII,this.6:formodonto.dII35:formodonto.dII34:formodonto.dII33:formodonto.dII32:formodonto.dII31:formodonto.dII75:formodonto.dII74:formodonto.dII73:formodonto.dII72:formodonto.dII71)+(formodonto.dDS18|sumaC:formodonto.dDS17:formodonto.dDS16:formodonto.dDS15:formodonto.dDS14:formodonto.dDS13:formodonto.dDS12:formodonto.dDS11:formodonto.dDS55:formodonto.dDS54:formodonto.dDS53:formodonto.dDS52:formodonto.dDS51:formodonto.dIS28:formodonto.dIS27:formodonto.dIS26:formodonto.dIS25:formodonto.dIS24:formodonto.dIS23:formodonto.dIS22:formodonto.dIS21:formodonto.dIS65:formodonto.dIS64:formodonto.dIS63:formodonto.dIS62:formodonto.dIS61:formodonto.dDI48:formodonto.dDI47:formodonto.dDI46:formodonto.dDI45:formodonto.dDI44:formodonto.dDI43:formodonto.dDI42:formodonto.dDI41:formodonto.dDI85:formodonto.dDI84:formodonto.dDI83:formodonto.dDI82:formodonto.dDI81:formodonto.dII38:formodonto.dII37:formodonto.dII36:formodonto.dII35:formodonto.dII34:formodonto.dII33:formodonto.dII32:formodonto.dII31:formodonto.dII75:formodonto.dII74:formodonto.dII73:formodonto.dII72:formodonto.dII71))|number
      console.log(this.formodonto)
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
          C1: this.formodonto.c1,
          P1: this.formodonto.p1,
          O1: this.formodonto.o1,
          CPO1: this.formodonto.cpo,
          OBBS: this.formodonto.Obser,
          Id_Pacient:this.info_paciente.Id_Paciente,
        }
      ];

      this.formodonto.Id_Pacient=this.info_paciente.Id_Paciente
      this.formodonto.c1=c
      this.formodonto.p1=p
      this.formodonto.o1=o
      this.formodonto.cpo=total
      //asi?
      new AngularCsv(data, this.formodonto.Obser, options);
      this._odontogramaservices.registrarOdontograma(this.formodonto).subscribe(
        response=>{
          console.log(response)
          Swal.fire('Yeih...', 'Se ha registrado correctamente', 'success')// aqui se pone  jajajajjaa
      
        },error=>{
          console.log(error)
            Swal.fire('Oops...', 'algo salió mal!', 'error')
        }
      )
    }
  
  }
