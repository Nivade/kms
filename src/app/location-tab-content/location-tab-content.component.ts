import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from '../location';

@Component({
  selector: 'app-location-tab-content',
  templateUrl: './location-tab-content.component.html',
  styleUrls: ['./location-tab-content.component.scss']
})
export class LocationTabContentComponent implements OnInit {

  locations: Location[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {

  }

}
