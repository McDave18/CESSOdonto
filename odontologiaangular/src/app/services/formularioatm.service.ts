import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class FormularioAtmService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarFormularioAtm(formularioatm):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(formularioatm);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('https://api.odontocess.org/api/formularioatm',params,{headers:headers}); 

    }
    getFormularioatm(id):Observable<any>
    { 
        //luego checamos eso xD  sale 
        // let json = JSON.stringify(formulario2);
        // let params = 'json='+json;
        // console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('https://api.odontocess.org/api/formularioatm/'+id,{headers:headers}); 

    }
}
