import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class IHOSTService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarIHOST(ihost):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(ihost);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('https://api.odontocess.org/api/formularioihost',params,{headers:headers}); 

    }
    getIHOST(id):Observable<any>
    { 
        //luego checamos eso xD  sale 
        // let json = JSON.stringify(formulario2);
        // let params = 'json='+json;
        // console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('https://api.odontocess.org/api/formularioihost/'+id,{headers:headers}); 

    }
}
