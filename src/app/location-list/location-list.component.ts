import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../location';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  animations: [
  trigger('locState', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
]})
export class LocationListComponent implements OnInit {

  locations: Location[]

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(): void {
    this.locationService.getLocations().subscribe(locations => this.locations = locations.data);
  }

}
