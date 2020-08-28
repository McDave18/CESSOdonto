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
    getFormulario2(id):Observable<any>
    { 
        //luego checamos eso xD  sale 
        // let json = JSON.stringify(formulario2);
        // let params = 'json='+json;
        // console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://odon.com.devel/api/formulario/'+id,{headers:headers}); 

    }
    getFormulario2ex(id):Observable<any>
    { 
    
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://odon.com.devel/api/formularioex/'+id,{headers:headers}); 

    }
}

