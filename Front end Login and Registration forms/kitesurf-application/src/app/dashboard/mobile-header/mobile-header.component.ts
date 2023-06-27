import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})

export class MobileHeaderComponent {

  constructor(private router: Router,private http: HttpClient) {}

  isMenuOpened: boolean = false;
  isAddOpened: boolean = false;
  isMobileFavouriteOpened: boolean = false;

  cancel(){
    this.isMenuOpened = false;
    this.isAddOpened = false;
    this.isMobileFavouriteOpened = false;

  }
  
  togglerMenu() {

    this.isMenuOpened = !this.isMenuOpened;

  }

  togglerMobileAdd(){

    this.isAddOpened = !this.isAddOpened;
    this.isMenuOpened = false;

  }

  togglerMobileFavourite(){

    this.isMobileFavouriteOpened = !this.isMobileFavouriteOpened;
    this.isMenuOpened = false;

  }

  clickedOutsideMenu() {

    this.isMenuOpened = false;

  }

  logout(){
    
    this.router.navigate(['/login']);
  }

}
