import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumaC'
})

//suma para el CPO = 0
export class SumaCPipe implements PipeTransform {

    transform(uno ,dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte, veintinuno, veintidos, veintitres, veinticuatro, veinticinco, veintiseis, veintisiete, veintiocho, veintinueve, treinta, treintayuno, treintaydos, treintaytres, treintaycuatro, treintaycinco, treintayseis, treintaysiete, treintayocho, treintraynueve, cuarenta, cuarentayuno, cuarentaydos, cuarentaytres, cuarentaycuatro, cuarentaycinco, cuarentayseis, cuarentaysiete, cuarentayocho, cuarentaynueva, cincuenta, cincuentrayuno, cincuentraydos): number {
      let contador =0;

      if(uno==3){
        contador++
      }
        
      if(dos==3){
        contador++
      }
      if(tres==3){
        contador++
      }
      if(cuatro==3){
        contador++
      }
        
      if(cinco==3){
        contador++
      }
      if(seis==3){
        contador++
      }
      if(siete==3){
        contador++
      }
        
      if(ocho==3){
        contador++
      }
      if(nueve==3){
        contador++
      }
      if(diez==3){
        contador++
      }
      if(once==3){
        contador++
      }
        
      if(doce==3){
        contador++
      }
      if(trece==3){
        contador++
      }
      if(catorce==3){
        contador++
      }
        
      if(quince==3){
        contador++
      }
      if(dieciseis==3){
        contador++
      }
      if(diecisiete==3){
        contador++
      }
        
      if(dieciocho==3){
        contador++
      }
      if(diecinueve==3){
        contador++
      }
      if(veinte==3){
        contador++
      }
      if(veintinuno==3){
        contador++
      }
        
      if(veintidos==3){
        contador++
      }
      if(veintitres==3){
        contador++
      }
      if(veinticuatro==3){
        contador++
      }
        
      if(veinticinco==3){
        contador++
      }
      if(veintiseis==3){
        contador++
      }
      if(veintisiete==3){
        contador++
      }
        
      if(veintiocho==3){
        contador++
      }
      if(veintinueve==3){
        contador++
      }
      if(treinta==3){
        contador++
      }

      if(treintayuno==3){
        contador++
      }
        
      if(treintaydos==3){
        contador++
      }
      if(treintaytres==3){
        contador++
      }
      if(treintaycuatro==3){
        contador++
      }
        
      if(treintaycinco==3){
        contador++
      }
      if(treintayseis==3){
        contador++
      }
      if(treintaysiete==3){
        contador++
      }
        
      if(treintayocho==3){
        contador++
      }
      if(treintraynueve==3){
        contador++
      }
      if(cuarenta==3){
        contador++
      }
      if(cuarentayuno==3){
        contador++
      }
        
      if(cuarentaydos==3){
        contador++
      }
      if(cuarentaytres==3){
        contador++
      }
      if(cuarentaycuatro==3){
        contador++
      }
        
      if(cuarentaycinco==3){
        contador++
      }
      if(cuarentayseis==3){
        contador++
      }
      if(cuarentaysiete==3){
        contador++
      }
        
      if(cuarentayocho==3){
        contador++
      }
      if(cuarentaynueva==3){
        contador++
      }
      if(cincuenta==3){
        contador++
      }
      if(cincuentrayuno==3){
        contador++
      }
      if(cincuentraydos==3){
        contador++
      }
      
      


      
      return contador;
  }

}