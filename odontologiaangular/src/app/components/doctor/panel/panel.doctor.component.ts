import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.doctor.component.html',
  styleUrls: ['./panel.doctor.component.css']
})
export class PaneldoctorComponent implements OnInit {
  identity: any;

  constructor (public _loginServices: LoginService) 
  {
    this.identity = _loginServices.getIdentity();  
    console.log(this.identity)      
  }

  ngOnInit(): void {
  }

}
