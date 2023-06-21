import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeSpotPopup(data: any): string {

    return `` +
      `<div id="marker-name">${ data.name }</div> 
      <br>
      <div id="marker-country">${ data.country }</div>
      <br>
      <div class="marker">Wind probability: 
        <br>
        <span>${ data.probability }%</span>
      </div>
      <br>
      <div class="marker">Latitude:
        <br>
        <span>${ data.lat }&#176 N</span>
      </div>
      <br>
      <div class="marker">Longitude:
        <br>
        <span>${ data.long }&#176 W</span>
      </div>
      <br>
      <div class="marker">when to go:
        <br>
        <span>${ data.month }</span>
      </div>
      <br>
      <button id="favouriteButton">+ add to favourites</button>
     `
   }
}
