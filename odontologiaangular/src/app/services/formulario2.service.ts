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
        let json = JSON.stringify(formulario2);
        let params = 'json'+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://localhost/larabel/appi_odontologia/public/api/formulario2',params,{headers:headers});

    }
}

