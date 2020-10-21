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

        return this._http.post('https://api.odontocess.org/api/controlplaca',params,{headers:headers}); 

    }
    getControlsesiones(id):Observable<any>
    { 
        //luego checamos eso xD  sale 
        // let json = JSON.stringify(formulario2);
        // let params = 'json='+json;
        // console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('https://api.odontocess.org/api/controlplaca/'+id,{headers:headers}); 

    }
}
