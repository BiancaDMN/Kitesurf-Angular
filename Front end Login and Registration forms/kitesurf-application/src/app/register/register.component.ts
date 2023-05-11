import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  firstname: string ='';
  lastname: string ='';
  email: string ='';
  password: string ='';

  constructor(private http: HttpClient, private router: Router) {}
 
  ngOnInit(): void {}
  
  register(){

    let bodyData = {

      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,

    };

    this.http.post("http://localhost:3000/user/create",bodyData).subscribe((resultData: any) =>{

      console.log(resultData);
      alert("User Registered Successfully");
      this.router.navigateByUrl('/login');
    
    });

  }
 
  save(){

    this.register();

  }
  
}


