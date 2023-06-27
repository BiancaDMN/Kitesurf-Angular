import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent {

  constructor(private router: Router,private http: HttpClient) {}

  isProfileOpened: boolean = false;

  togglerProfile(){
    
    this.isProfileOpened = !this.isProfileOpened;
    
  }
  
  clickedOutsideProfile(){
    
    this.isProfileOpened = false;
    
  }

  logout(){
    
    this.router.navigate(['/login']);
  }

}
