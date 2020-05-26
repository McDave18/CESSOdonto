import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class Formulario3Service{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarFormulario3(formulario3):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(formulario3);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post('http://odon.com.devel/api/formulario',params,{headers:headers}); 

    }
}

