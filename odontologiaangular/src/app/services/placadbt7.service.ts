import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class Placadbt7Service{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarPlacadb7(placadbt7):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(placadbt7);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/placaact7',params,{headers:headers}); 

    }
    getPlacadbt7(id):Observable<any>
    { 
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://odon.com.devel/api/placaact7/'+id,{headers:headers}); 

    }
}
