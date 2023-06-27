import { Component } from '@angular/core';
import { Register } from './register';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  registerModel = new Register ('', '', '', '');

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  
  onSubmit(){

    this.http.post("http://localhost:3000/user/create", this.registerModel).subscribe((resultData: any) =>{

      console.log(resultData);
      alert("User Registered Successfully");
      this.router.navigateByUrl('/login');
    
    });

  }
 
  save(){

    this.onSubmit();

  }
  
}


