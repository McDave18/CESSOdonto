import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class Placadbt4Service{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarPlacadb4(placadbt4):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(placadbt4);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/placaact4',params,{headers:headers}); 

    }
    getPlacadbt4(id):Observable<any>
    { 
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://odon.com.devel/api/placaact4/'+id,{headers:headers}); 

    }
}
