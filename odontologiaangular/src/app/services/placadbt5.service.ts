import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class Placadbt5Service{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarPlacadb5(placadbt5):Observable<any>
    { 
        
        let json = JSON.stringify(placadbt5);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('https://api.odontocess.org/api/placaact5',params,{headers:headers}); 

    }
    getPlacadbt5(id):Observable<any>
    { 
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('https://api.odontocess.org/api/placaact5/'+id,{headers:headers}); 

    }
}
