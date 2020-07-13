import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class ControlpagosService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarControlpagos(controlpagos):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(controlpagos);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/formularioihos',params,{headers:headers}); 

    }
}
