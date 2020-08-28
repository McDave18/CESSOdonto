import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class ControlplacaService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarControlplaca(controlplaca):Observable<any>
    { 
        let json = JSON.stringify(controlplaca);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/controlpagos',params,{headers:headers}); 

    }
}
