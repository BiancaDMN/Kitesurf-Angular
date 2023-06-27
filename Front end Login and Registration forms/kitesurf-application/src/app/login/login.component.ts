import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  userModel = new User ('', '');

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit(){

    console.log(this.userModel);

    this.http.post("http://localhost:3000/user/login", this.userModel).subscribe((resultData: any)=>{

      console.log(resultData);

      if (resultData.status){

        this.router.navigateByUrl('/dashboard');

      } else {

        alert("Incorrect Email or Password");
        console.log("Errror login");

      }
      
    })

  }

  register(){

    this.router.navigate(['/register']);
    
  }

}

