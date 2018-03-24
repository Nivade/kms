import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GoogleMapBackgroundComponent } from './google-map-background/google-map-background.component';
import { AgmCoreModule } from '@agm/core';
import { LocationService } from './location.service';
import { LocationTabContentComponent } from './location-tab-content/location-tab-content.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationListItemEffectDirective } from './location-list-item-effect.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GoogleMapBackgroundComponent,
    LocationTabContentComponent,
    LocationListComponent,
    LocationListItemComponent,
    LocationListItemEffectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0JMGdUBkPWSwwehHRfI4eFICrKZ8Pzc8'
    })
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
