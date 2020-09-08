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
        //luego checamos eso xD  sale 
        let json = JSON.stringify(placadbt5);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/placaact5',params,{headers:headers}); 

    }
    getPlacadbt5(id):Observable<any>
    { 
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://odon.com.devel/api/placaact5/'+id,{headers:headers}); 

    }
}
