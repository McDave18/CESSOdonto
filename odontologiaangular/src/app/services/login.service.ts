import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class LoginService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarLogin(login):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(login);
        let params = 'json='+json;
        console.log("login",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post('http://odon.com.devel/api/formulario',params,{headers:headers}); 

    }
}
