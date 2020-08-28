import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class PlacadbService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarPlacadb(placadb):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(placadb);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/placaant',params,{headers:headers}); 

    }
}
