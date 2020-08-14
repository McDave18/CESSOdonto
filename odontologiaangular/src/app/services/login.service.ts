import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs'; 

@Injectable()
export class LoginService{
    identity: any;
    token: string;
  userData$: any;
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarLogin(login,gettoken = null):Observable<any>
    { 
        if(gettoken != null){
            login.gettoken ="true";
        }
        //luego checamos eso xD  sale 
        let json = JSON.stringify(login);
        let params = 'json='+json;
        console.log("login",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post('http://odon.com.devel/api/login',params,{headers:headers}); 

    }
    
    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity && identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity= null;
        }
        return this.identity;
    }
    getToken(){
        let token = localStorage.getItem('token');
        if(token && token != "undefined"){
            this.token = token;
        }else{
            this.token= null;
        }
        return this.token;

    }
}
