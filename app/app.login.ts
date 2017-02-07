import {Component} from '@angular/core'
import { Router } from '@angular/router';

@Component({
    templateUrl:'./app/templates/login.html'
})

export class LoginComponent{
    constructor(private router: Router){ }

    loginHeader:string = "Please Singin";
    loginFailed:string = "Please enter correct user name and password";
    showError:boolean = false;
    model:any = {}
  
  onLogin = () => {
      if(localStorage.getItem("lastname") == this.model.uname && localStorage.getItem("password") == this.model.password){
           this.router.navigate(['/home']);
      }else{
          this.showError = true;
      }
    }
}