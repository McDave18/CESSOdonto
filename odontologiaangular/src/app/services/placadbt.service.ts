import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class PlacadbtService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarPlacadb(placadbt):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(placadbt);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('https://api.odontocess.org/api/placaact',params,{headers:headers}); 

    }
    getPlacadbt(id):Observable<any>
    { 
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('https://api.odontocess.org/api/placaact/'+id,{headers:headers}); 

    }
}
