import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable()
export class PlantratamientoService{
    constructor(
        public _http: HttpClient
    )
    {

    }
    registrarPlantratamiento(plantratamiento):Observable<any>
    { 
        //luego checamos eso xD  sale 
        let json = JSON.stringify(plantratamiento);
        let params = 'json='+json;
        console.log("formulario",params)
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post('http://odon.com.devel/api/tratamiento',params,{headers:headers}); 

    }
}
