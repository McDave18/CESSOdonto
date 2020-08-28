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
    getPacientes():Observable<any>{
       
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('http://odon.com.devel/api/formulario3',{headers:headers}); 
    }
    registrarFormulario3(formulario3):Observable<any>
    { 
        //este es ede apciente simon este es  simon ve al formulario donde se muesta la busqueda de pacientes
        let json = JSON.stringify(formulario3);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post('http://odon.com.devel/api/formulario3',params,{headers:headers}); 

    }
}

