import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import {NgForm} from '@angular/forms';
import {AngularCsv} from 'angular-csv-ext/dist/Angular-csv';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],

})
export class LoginComponent implements OnInit {

  public login;
  public token;
  public status;
  identity;

  constructor(private _loginservices:LoginService,private router: Router,private _router:ActivatedRoute) 
  { 
    this.login= new Login('','')
    this.logout();
  }


  ngOnInit(): void {
  }

 

  onSubmit(form){
    var data= {
      
      "NumIDM": this.login.numid,
      "password":this.login.psswd
      
    }
    this._loginservices.registrarLogin(data).subscribe(
      response =>{
        if(response.status != "error"){
          this.token=response;
          this.status = "success";
          this._loginservices.registrarLogin(data,true).subscribe(
            response =>{
              console.log(response)
             this.identity=response;
            //  console.log(this.token);
            //  console.log(this.identity);
             //Persistenvia de datos
             localStorage.setItem('token',this.token);
             localStorage.setItem('identity',JSON.stringify( this.identity));
            //  if(response.tipo=="usuario"){
            //    this.router.navigate(['panel']);
            //  }else if (response.tipo =="cliente"){
              this.router.navigate(['doctorpanel/home']);//esto redireciona internamente y D.pues es l ruta 
            //  }
                
            },
            error =>{
              console.log(<any>error);
              this.status="error";
            }
          );
          // form.reset();
        }else{
         console.log(response);
          this.status="error";
        }
      },
      error =>{
        console.log(<any>error);
        this.status="error";
      }
    );
    
  }
  logout(){
   
    this._router.params.subscribe(params =>{
      let logout = +params['sure'];
      
      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.token=null;
        this.identity=null;
        this.router.navigate(['login']);
      }
    });
  }

}
