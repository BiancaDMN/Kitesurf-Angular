import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite-spot-button',
  templateUrl: './favourite-spot-button.component.html',
  styleUrls: ['./favourite-spot-button.component.css']
})
export class FavouriteSpotButtonComponent {

  isFavouriteOpened: boolean = false;

  togglerFavourite(){
    
    this.isFavouriteOpened = !this.isFavouriteOpened;
    
  }

  clickedOutsideFavourite(){
    
    this.isFavouriteOpened = false;
    
  }

  cancel(){

    this.isFavouriteOpened = false;
  }
}
