import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class Formulario2Service{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarFormulario2(formulario2):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(formulario2);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post('http://odon.com.devel/api/formulario',params,{headers:headers}); 

    }
}

