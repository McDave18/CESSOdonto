import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class OdontogramaService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarOdontograma(odontograma):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(odontograma);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('https://api.odontocess.org/api/odontograma',params,{headers:headers}); 

    }
    getOdontograma(id):Observable<any>
    { 
        //luego checamos eso xD  sale 
        // let json = JSON.stringify(formulario2);
        // let params = 'json='+json;
        // console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get('https://api.odontocess.org/api/odontograma/'+id,{headers:headers}); 

    }
    contador1(mes,pregunta):Observable<any>
    { 
        
        // let json = JSON.stringify(formulario1);
        // let params = 'json='+json;
        // console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.get('https://api.odontocess.org/api/contador1/'+mes+"/"+pregunta,{headers:headers}); 

    }
   
}
