import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumaplaca'
})
export class SumaplacaPipe implements PipeTransform {
  
    transform(uno ,dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte, veintinuno, veintidos, veintitres, veinticuatro, veinticinco, veintiseis, veintisiete, veintiocho, veintinueve, treinta, treintayuno, treintaydos): number {
      let contador =0;
      let suma=0;
  
      if(uno<9){
        contador=contador+4
        suma+=uno
      }
        
      if(dos<9){
        contador=contador+4
        suma+=dos
      }
        
        if(tres<9){
          contador=contador+4
          suma+=tres
        }
        if(cuatro<9){
          contador=contador+4
          suma+=cuatro
        }
        if(cinco<9){
          contador=contador+4
          suma+=cinco
        }
        if(seis<9){
        
          contador=contador+4
            suma+=seis
          }
          if(siete<9){
            contador=contador+4
            suma+=siete
          }
            
          if(ocho<9){
            contador=contador+4
            suma+=ocho
          }
          if(nueve<9){
            contador=contador+4
            suma+=nueve
          }
          if(diez<9){
            contador=contador+4
            suma+=diez
          }
          if(once<9){
            contador=contador+4
            suma+=once
          }
            
          if(doce<9){
            contador=contador+4
            suma+=doce
          }
          if(trece<9){
            contador=contador+4
            suma+=trece
          }
          if(catorce<9){
            contador=contador+4
            suma+=catorce
          }
            
          if(quince<9){
            contador=contador+4
            suma+=quince
          }
          if(dieciseis<9){
            contador=contador+4
            suma+=dieciseis
          }
          if(diecisiete<9){
            contador=contador+4
            suma+=diecisiete
          }
            
          if(dieciocho<9){
            contador=contador+4
            suma+=dieciocho
          }
          if(diecinueve<9){
            contador=contador+4
            suma+=diecinueve
          }
          if(veinte<9){
            contador=contador+4
            suma+=veinte
          }
          if(veintinuno<9){
            contador=contador+4
            suma+=veintinuno
          }
            
          if(veintidos<9){
            contador=contador+4
            suma+=veintidos
          }
          if(veintitres<9){
            contador=contador+4
            suma+=veintitres
          }
          if(veinticuatro<9){
            contador=contador+4
            suma+=veinticuatro
          }
            
          if(veinticinco<9){
            contador=contador+4
            suma+=veinticinco
          }
          if(veintiseis<9){
            contador=contador+4
            suma+=veintiseis
          }
          if(veintisiete<9){
            contador=contador+4
            suma+=veintisiete
          }
            
          if(veintiocho<9){
            contador=contador+4
            suma+=veintiocho
          }
          if(veintinueve<9){
            contador=contador+4
            suma+=veintinueve
          }
          if(treinta<9){
            contador=contador+4
            suma+=treinta
          }
    
          if(treintayuno<9){
            contador=contador+4
            suma+=treintayuno
          }
            
          if(treintaydos<9){
            contador=contador+4
            suma+=treintaydos
          }
  
  
       
  
        
  
        
  
  
      return (suma*100)/contador;
    }
  
  }