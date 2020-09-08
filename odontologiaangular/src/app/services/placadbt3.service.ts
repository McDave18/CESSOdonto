import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class Placadbt3Service{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarPlacadb3(placadbt3):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(placadbt3);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/placaact3',params,{headers:headers}); 

    }
    getPlacadbt3(id):Observable<any>
    { 
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://odon.com.devel/api/placaact3/'+id,{headers:headers}); 

    }
}
