import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClickedOutsideDirective } from './clicked-outside.directive';
import { MapComponent } from './dashboard/map/map.component';
import { MarkerService } from './dashboard/map/marker.service';
import { PopupService } from './dashboard/map/popup.service';
import { WebHeaderComponent } from './dashboard/web-header/web-header.component';
import { AddSpotButtonComponent } from './dashboard/web-header/add-spot-button/add-spot-button.component';
import { FavouriteSpotButtonComponent } from './dashboard/web-header/favourite-spot-button/favourite-spot-button.component';
import { ProfileButtonComponent } from './dashboard/web-header/profile-button/profile-button.component';
import { MobileHeaderComponent } from './dashboard/mobile-header/mobile-header.component';
import { MobileAddSpotComponent } from './dashboard/mobile-header/mobile-add-spot/mobile-add-spot.component';
import { MobileFavouriteComponent } from './dashboard/mobile-header/mobile-favourite/mobile-favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ClickedOutsideDirective,
    MapComponent,
    WebHeaderComponent,
    AddSpotButtonComponent,
    FavouriteSpotButtonComponent,
    ProfileButtonComponent,
    MobileHeaderComponent,
    MobileAddSpotComponent,
    MobileFavouriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
