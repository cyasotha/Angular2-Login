import {Component} from '@angular/core'
import{Router} from '@angular/router'

@Component({
    templateUrl:'./app/templates/register.html'
})

export class RegisterComponent{
    constructor(private router : Router){}

    model:any = {}

    registerHeader:string = "Register"
    onRegister = () => {
        localStorage.setItem("username", this.model.uname);
        localStorage.setItem("password", this.model.password);
        this.router.navigate(['/']);
    }
}