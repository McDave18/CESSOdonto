import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class Formulario1Service{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarFormulario1(formulario1):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(formulario1);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/formulario1',params,{headers:headers}); 

    }
    contador(mes,pregunta):Observable<any>
    { 
        //luego checamos eso xD  sale 
        // let json = JSON.stringify(formulario1);
        // let params = 'json='+json;
        // console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.get('http://odon.com.devel/api/contador/'+mes+"/"+pregunta,{headers:headers}); 

    }
}
