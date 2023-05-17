import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isAddOpened: boolean = false;
  isFavouriteOpened: boolean = false;
  isProfileOpened: boolean = false;
  isMenuOpened: boolean = false;
  isMobileAddOpened: boolean = false;
  isMobileFavouriteOpened: boolean = false;

  constructor(private router: Router,private http: HttpClient) {}

  togglerAdd(){
    
    this.isAddOpened = !this.isAddOpened;
    
  }
  
  clickedOutsideAdd(){
    
    this.isAddOpened = false;
    
  }

  cancel(){
    this.isAddOpened = false;
    this.isMenuOpened = false;
    this.isMobileAddOpened = false;
    this.isMobileFavouriteOpened = false;

  }
  
  togglerFavourite(){
    
    this.isFavouriteOpened = !this.isFavouriteOpened;
    
  }
  
  clickedOutsideFavourite(){
    
    this.isFavouriteOpened = false;
    
  }
  
  togglerProfile(){
    
    this.isProfileOpened = !this.isProfileOpened;
    
  }
  
  clickedOutsideProfile(){
    
    this.isProfileOpened = false;
    
  }
  
  logout(){
    
    this.router.navigate(['/login']);
  }
  
  togglerMenu() {

    this.isMenuOpened = !this.isMenuOpened;

  }
  togglerMobileAdd(){

    this.isMobileAddOpened = !this.isMobileAddOpened;
    this.isMenuOpened = false;

  }

  togglerMobileFavourite(){

    this.isMobileFavouriteOpened = !this.isMobileFavouriteOpened;
    this.isMenuOpened = false;

  }

  clickedOutsideMenu() {

    this.isMenuOpened = false;

  }
}