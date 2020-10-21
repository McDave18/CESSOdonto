import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class NotasService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarNotas(notas):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(notas);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('https://api.odontocess.org/api/notase',params,{headers:headers}); 

    }
    getNotas(id):Observable<any>
    { 
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('https://api.odontocess.org/api/notase/'+id,{headers:headers}); 

    }
}
