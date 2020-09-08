import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Formulario1Service } from 'src/app/services/formulario1.service';
import { OdontogramaService } from 'src/app/services/odontograma.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[Formulario1Service, OdontogramaService]
})
export class HomeComponent implements OnInit {

  public chart: any = null;
  public chart1: any = null;
  public tabaco=[];
  public sida=[];
  public hepatitis=[];
  public diabetes=[];
  public corazon=[];
  public infartos=[];
  public psiquiatrico=[];
  public drogas=[];
  public radiacion=[];
  public alcohol=[];
  public embarazadas=[];
  public c=[];
  public p=[];
  public o=[];

  constructor(private _form1:Formulario1Service, private _formodonto:OdontogramaService) { }

  ngOnInit(): void {
   
    this.contadoe_grafica();
    this.contador_grafica();
  }

  grafica()
{
  var ctx = document.getElementById('myChart');
  let data: [{
    x: 10,
    y: 20
}, {
    x: 15,
    y: 10
}]
  this.chart =   new Chart(ctx, {
    
    type: 'line',
    data: {
    //   datasets: [{
    //       data: [20, 50, 100, 75, 25, 0],
    //       backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',
    //             'rgba(153, 102, 255, 0.2)',
               
    //         ],
    //       label: 'Left dataset',

    //       // This binds the dataset to the left y axis
    //       yAxisID: 'left-y-axis'
    //   }, {
    //       data: [6, 15, 25, 20, 15, 10],
    //       label: 'trapitoset',

    //       // This binds the dataset to the right y axis
    //       yAxisID: 'right-y-axis'
    //   },
    //   {
    //     data: [2, 4, 5, 6, 15, 20],
    //     label: 'sida',

    //     // This binds the dataset to the right y axis
    //     yAxisID: 'sida-y-axis'
    // }],
    datasets: [
      {
        label: 'Sida',
        data: this.sida,
        borderWidth: 1,
        backgroundColor: [ 'rgba(244, 070, 017, 0.2)'],
      },  
      {
        label: 'Hepatitis',
        data: this.hepatitis,
        borderWidth: 1,
        backgroundColor: [ 'rgba(243, 218, 011, 0.2)'],
      },  
      {
        label: 'Diabetes',
        data: this.diabetes,
        borderWidth: 1,
        backgroundColor: [ 'rgba(215, 215, 215, 0.2)'],
      },  
      {
        label: 'Enfermedades del corazon',
        data: this.corazon,
        borderWidth: 1,
        backgroundColor: [ 'rgba(203, 044, 033, 0.2)'],
      }
      ,  
      {
        label: 'Infartos',
        data: this.infartos,
        borderWidth: 1,
        backgroundColor: [ 'rgba(201, 060, 032, 0.2)'],
      },  
      {
        label: 'Tratamiento psiquiátrico',
        data: this.psiquiatrico,
        borderWidth: 1,
        backgroundColor: [ 'rgba(132, 195, 190, 0.2)'],
      },  
      {
        label: 'Radiación',
        data: this.radiacion,
        borderWidth: 1,
        backgroundColor: [ 'rgba(108, 070, 117, 0.2)'],
      },  
      {
        label: 'Drogas',
        data: this.drogas,
        borderWidth: 1,
        backgroundColor: [ 'rgba(087, 166, 057, 0.2)'],
      },  
      {
        label: 'Tabaco',
        data: this.tabaco,
        borderWidth: 1,
        backgroundColor: [ 'rgba(108, 059, 042, 0.2)'],
      },  
      {
        label: 'Alcohol',
        data: this.alcohol,
        borderWidth: 1,
        backgroundColor: [ 'rgba(059, 131, 189, 0.2)'],
      },  
      {
        label: 'Embarazadas',
        data: this.embarazadas,
        borderWidth: 1,
        backgroundColor: [ 'rgba(042, 100, 120, 0.2)'],
      }

    ],
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          reverse: false,
          stepSize: 3
        },
      }]
    }
  }
  //   data: {
  //     datasets: [{
  //         label: 'First dataset',
  //         data: [0, 20, 40, 50]
  //     }],
  //     labels: ['January', 'February', 'March', 'April']
  // },
  // options: {
  //     scales: {
  //         yAxes: [{
  //             ticks: {
  //                 suggestedMin: 50,
  //                 suggestedMax: 100
  //             }
  //         }]
  //     }
  // }
  //   data:   {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //     }]
  // },
  //   options: {
  //       scales: {
  //           yAxes: [{
  //               stacked: true
  //           }]
  //       }
  //   }

});
}
grafica1()
{
  var ctx = document.getElementById('myChart1');
  let data: [{
    x: 10,
    y: 20
}, {
    x: 15,
    y: 10
}]
  this.chart1 =   new Chart(ctx, {
    
    type: 'line',
    data: {
    datasets: [
      {
        label: 'C',
        data: this.c,
        borderWidth: 1,
        backgroundColor: [ 'rgba(244, 070, 017, 0.2)'],
      },  
      {
        label: 'P',
        data: this.p,
        borderWidth: 1,
        backgroundColor: [ 'rgba(243, 218, 011, 0.2)'],
      },  
      {
        label: 'O',
        data: this.o,
        borderWidth: 1,
        backgroundColor: [ 'rgba(215, 215, 215, 0.2)'],
      }

    ],
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          reverse: false,
          stepSize: 3
        },
      }]
    }
  }

});
}
contadoe_grafica(){
  this._form1.contador(1,"P63").subscribe(res=>{
    console.log("contador tabaco",res)
    
    this.tabaco.push(res.en)
    this.tabaco.push(res.fe)
    this.tabaco.push(res.mar)
    this.tabaco.push(res.ab)
    this.tabaco.push(res.may)
    this.tabaco.push(res.jun)
    this.tabaco.push(res.jul)
    this.tabaco.push(res.ago)
    this.tabaco.push(res.sept)
    this.tabaco.push(res.octb)
    this.tabaco.push(res.novi)
    this.tabaco.push(res.dici)
   

  })
  this._form1.contador(1,"P40").subscribe(res=>{
    console.log("contador Sida",res)
    
    this.sida.push(res.en)
    this.sida.push(res.fe)
    this.sida.push(res.mar)
    this.sida.push(res.ab)
    this.sida.push(res.may)
    this.sida.push(res.jun)
    this.sida.push(res.jul)
    this.sida.push(res.ago)
    this.sida.push(res.sept)
    this.sida.push(res.octb)
    this.sida.push(res.novi)
    this.sida.push(res.dici)
    

  })
  this._form1.contador(1,"P36").subscribe(res=>{
    console.log("contador hepatitis",res)
    
    this.hepatitis.push(res.en)
    this.hepatitis.push(res.fe)
    this.hepatitis.push(res.mar)
    this.hepatitis.push(res.ab)
    this.hepatitis.push(res.may)
    this.hepatitis.push(res.jun)
    this.hepatitis.push(res.jul)
    this.hepatitis.push(res.ago)
    this.hepatitis.push(res.sept)
    this.hepatitis.push(res.octb)
    this.hepatitis.push(res.novi)
    this.hepatitis.push(res.dici)
   

  })
  this._form1.contador(1,"P50").subscribe(res=>{
    console.log("contador diabetes",res)
    
    this.diabetes.push(res.en)
    this.diabetes.push(res.fe)
    this.diabetes.push(res.mar)
    this.diabetes.push(res.ab)
    this.diabetes.push(res.may)
    this.diabetes.push(res.jun)
    this.diabetes.push(res.jul)
    this.diabetes.push(res.ago)
    this.diabetes.push(res.sept)
    this.diabetes.push(res.octb)
    this.diabetes.push(res.novi)
    this.diabetes.push(res.dici)
    

  })
  this._form1.contador(1,"P29").subscribe(res=>{
    console.log("contador hepatitis",res)
    
    this.corazon.push(res.en)
    this.corazon.push(res.fe)
    this.corazon.push(res.mar)
    this.corazon.push(res.ab)
    this.corazon.push(res.may)
    this.corazon.push(res.jun)
    this.corazon.push(res.jul)
    this.corazon.push(res.ago)
    this.corazon.push(res.sept)
    this.corazon.push(res.octb)
    this.corazon.push(res.novi)
    this.corazon.push(res.dici)
    

  })
  this._form1.contador(1,"P30").subscribe(res=>{
    console.log("contador hepatitis",res)
    
    this.infartos.push(res.en)
    this.infartos.push(res.fe)
    this.infartos.push(res.mar)
    this.infartos.push(res.ab)
    this.infartos.push(res.may)
    this.infartos.push(res.jun)
    this.infartos.push(res.jul)
    this.infartos.push(res.ago)
    this.infartos.push(res.sept)
    this.infartos.push(res.octb)
    this.infartos.push(res.novi)
    this.infartos.push(res.dici)
    

  })
  this._form1.contador(1,"P51").subscribe(res=>{
    console.log("contador hepatitis",res)
    
    this.psiquiatrico.push(res.en)
    this.psiquiatrico.push(res.fe)
    this.psiquiatrico.push(res.mar)
    this.psiquiatrico.push(res.ab)
    this.psiquiatrico.push(res.may)
    this.psiquiatrico.push(res.jun)
    this.psiquiatrico.push(res.jul)
    this.psiquiatrico.push(res.ago)
    this.psiquiatrico.push(res.sept)
    this.psiquiatrico.push(res.octb)
    this.psiquiatrico.push(res.novi)
    this.psiquiatrico.push(res.dici)
    this.grafica();

  })
  this._form1.contador(1,"P61").subscribe(res=>{
    console.log("contador hepatitis",res)
    
    this.drogas.push(res.en)
    this.drogas.push(res.fe)
    this.drogas.push(res.mar)
    this.drogas.push(res.ab)
    this.drogas.push(res.may)
    this.drogas.push(res.jun)
    this.drogas.push(res.jul)
    this.drogas.push(res.ago)
    this.drogas.push(res.sept)
    this.drogas.push(res.octb)
    this.drogas.push(res.novi)
    this.drogas.push(res.dici)
    this.grafica();

  })
  this._form1.contador(1,"P52").subscribe(res=>{
    console.log("contador hepatitis",res)
    
    this.radiacion.push(res.en)
    this.radiacion.push(res.fe)
    this.radiacion.push(res.mar)
    this.radiacion.push(res.ab)
    this.radiacion.push(res.may)
    this.radiacion.push(res.jun)
    this.radiacion.push(res.jul)
    this.radiacion.push(res.ago)
    this.radiacion.push(res.sept)
    this.radiacion.push(res.octb)
    this.radiacion.push(res.novi)
    this.radiacion.push(res.dici)
    

  })
  this._form1.contador(1,"P64").subscribe(res=>{
    console.log("contador hepatitis",res)
    
    this.alcohol.push(res.en)
    this.alcohol.push(res.fe)
    this.alcohol.push(res.mar)
    this.alcohol.push(res.ab)
    this.alcohol.push(res.may)
    this.alcohol.push(res.jun)
    this.alcohol.push(res.jul)
    this.alcohol.push(res.ago)
    this.alcohol.push(res.sept)
    this.alcohol.push(res.octb)
    this.alcohol.push(res.novi)
    this.alcohol.push(res.dici)
  

  })
  this._form1.contador(1,"P65").subscribe(res=>{
    console.log("contador embarazadas",res)
    
    this.embarazadas.push(res.en)
    this.embarazadas.push(res.fe)
    this.embarazadas.push(res.mar)
    this.embarazadas.push(res.ab)
    this.embarazadas.push(res.may)
    this.embarazadas.push(res.jun)
    this.embarazadas.push(res.jul)
    this.embarazadas.push(res.ago)
    this.embarazadas.push(res.sept)
    this.embarazadas.push(res.octb)
    this.embarazadas.push(res.novi)
    this.embarazadas.push(res.dici)
    this.grafica();

  })



 

  

  

}
contador_grafica(){
  this._formodonto.contador1(1,"C").subscribe(res=>{
    console.log("contador c",res)
    
    this.c.push(res.en)
    this.c.push(res.fe)
    this.c.push(res.mar)
    this.c.push(res.ab)
    this.c.push(res.may)
    this.c.push(res.jun)
    this.c.push(res.jul)
    this.c.push(res.ago)
    this.c.push(res.sept)
    this.c.push(res.octb)
    this.c.push(res.novi)
    this.c.push(res.dici)
   

  })
  this._formodonto.contador1(1,"P").subscribe(res=>{
    console.log("contador P",res)
    
    this.p.push(res.en)
    this.p.push(res.fe)
    this.p.push(res.mar)
    this.p.push(res.ab)
    this.p.push(res.may)
    this.p.push(res.jun)
    this.p.push(res.jul)
    this.p.push(res.ago)
    this.p.push(res.sept)
    this.p.push(res.octb)
    this.p.push(res.novi)
    this.p.push(res.dici)
   

  })
  this._formodonto.contador1(1,"O").subscribe(res=>{
    console.log("contador O",res)
    
    this.o.push(res.en)
    this.o.push(res.fe)
    this.o.push(res.mar)
    this.o.push(res.ab)
    this.o.push(res.may)
    this.o.push(res.jun)
    this.o.push(res.jul)
    this.o.push(res.ago)
    this.o.push(res.sept)
    this.o.push(res.octb)
    this.o.push(res.novi)
    this.o.push(res.dici)
    this.grafica1();

  })



 

  

  

}
}
