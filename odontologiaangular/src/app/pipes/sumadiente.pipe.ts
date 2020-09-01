import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumadiente'
})
export class SumadientePipe implements PipeTransform {
  
  transform(uno ,dos,tres,cuatro,cinco,seis): number {
    let contador =0;
    let suma=0;

    if(uno<9){
      contador++
      suma+=uno
    }
      
    if(dos<9){
      contador++
      suma+=dos
    }
      
      if(tres<9){
        contador++
        suma+=tres
      }
      if(cuatro<9){
        contador++
        suma+=cuatro
      }
      if(cinco<9){
        contador++
        suma+=cinco
      }
      if(seis<9){
      
          contador++
          suma+=seis
        }


     

      

      


    return suma/contador;
  }

}
