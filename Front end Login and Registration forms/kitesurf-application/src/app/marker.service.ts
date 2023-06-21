import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  spots: string = '/assets/data/spots.geojson';

  constructor(private http: HttpClient,  private popupService: PopupService) { }

  makeSpotsMarkers(map: L.Map): void {

    this.http.get(this.spots).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);
        
        marker.bindPopup(this.popupService.makeSpotPopup(c.properties));
        marker.addTo(map);
      }
    });

  }
}
