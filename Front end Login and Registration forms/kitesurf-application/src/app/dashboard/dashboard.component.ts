import { Component, AfterViewInit } from '@angular/core';
import { Form } from './form';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { MarkerService } from './marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{

  constructor(private router: Router,private http: HttpClient, private markerService: MarkerService) {}

  isAddOpened: boolean = false;
  isFavouriteOpened: boolean = false;
  isProfileOpened: boolean = false;
  isMenuOpened: boolean = false;
  isMobileAddOpened: boolean = false;
  isMobileFavouriteOpened: boolean = false;

  clickedOutsideAdd(){
    
    this.isAddOpened = false;
    
  }

  togglerAdd(){
    
    this.isAddOpened = !this.isAddOpened;
    
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  monthHasError = true;

  formModel = new Form('', '', 1, 1.0001, 1.0001, 'default')

  validateMonth(value: string){

    if(value === 'default'){

      this.monthHasError = true;

    } else {

      this.monthHasError = false;

    }
    
  }

  cancel(){

    this.isAddOpened = false;
    this.isFavouriteOpened = false;
    this.isMobileAddOpened = false;
    this.isMenuOpened = false;
    this.isMobileFavouriteOpened = false;
  }

  onSubmit(){

    console.log(this.formModel);
    
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

  // clickedOutsideMenu() {

  //   this.isMenuOpened = false;

  // }

  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 36.229444, 6.809794 ],
      zoom: 4
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  submitMarker(){

    const lon = this.formModel.latitude;
    const lat = this.formModel.longitude;
    const newMarker = L.marker([lon, lat]);

    const popUp = L.popup().setContent(`<div id="marker-name">${ this.formModel.name }</div> 
        <br>
        <div id="marker-country">${ this.formModel.country }</div>
        <br>
        <div class="marker">Wind probability: 
          <br>
          <span>${ this.formModel.probability }%</span>
        </div>
        <br>
        <div class="marker">Latitude:
          <br>
          <span>${ this.formModel.latitude }&#176 N</span>
        </div>
        <br>
        <div class="marker">Longitude:
          <br>
          <span>${ this.formModel.longitude }&#176 W</span>
        </div>
        <br>
        <div class="marker">when to go:
          <br>
          <span>${ this.formModel.month }</span>
        </div>
        <br>
        <button id="favouriteButton">+ add to favourites</button>`);
  
    console.log(newMarker);
    console.log(popUp);

    newMarker.bindPopup(popUp);
    newMarker.addTo(this.map);

    this.isAddOpened = false;
    this.isMobileAddOpened = false;

  }

  ngAfterViewInit(): void {

    this.initMap();
    this.markerService.makeSpotsMarkers(this.map);
  }

}