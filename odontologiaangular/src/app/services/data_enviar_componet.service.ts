import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Data_enivarService {
private data = new BehaviorSubject<any>(null);
  public dataid$ = this.data.asObservable();

//oye, será porque con el ID DaBuHu no hay nada en la BD en esa tabla?
  getIdpaciente(id){
      console.log("res",id)
    this.data.next(id);
  }
}