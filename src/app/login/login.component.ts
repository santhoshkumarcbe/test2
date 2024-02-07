import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = 'test1';
  password = 'tt';
  token = '';
  constructor(private loginService:LoginService ){}
  login(){
    const body = {
      userName:this.username,
      password:this.password
    }
    this.loginService.authenticate(body).subscribe( (token:any)=> {
      this.token = token.token;
      console.log("token", token);
      
    }, (error:any) => {
      console.log("Authentication failed:", error);
    })
  }

}
