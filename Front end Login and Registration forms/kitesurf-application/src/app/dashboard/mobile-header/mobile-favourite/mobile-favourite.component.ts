import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-favourite',
  templateUrl: './mobile-favourite.component.html',
  styleUrls: ['./mobile-favourite.component.css']
})

export class MobileFavouriteComponent {

  isMobileFavouriteOpened: boolean = true;

  cancel(){

    this.isMobileFavouriteOpened = false;

  }

}
