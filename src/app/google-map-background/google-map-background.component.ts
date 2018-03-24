import { Component, OnInit } from '@angular/core';
import { Style } from './google-map-background-styler';

@Component({
  selector: 'app-google-map-background',
  templateUrl: './google-map-background.component.html',
  styleUrls: ['./google-map-background.component.scss']
})
export class GoogleMapBackgroundComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  style: object = Style;

  constructor() { }

  ngOnInit() {
  }

}
