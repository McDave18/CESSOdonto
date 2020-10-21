import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class FormularioDocService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarFormularioDoc(formulariodoc):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(formulariodoc);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('https://api.odontocess.org/api/doctores',params,{headers:headers}); 

    }
}
