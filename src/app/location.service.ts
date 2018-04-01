import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Location } from './location';
import { Address } from './address';

@Injectable()
export class LocationService {

  private url = 'http://localhost/';

  constructor(private http: HttpClient) { }

  getLocations(): Observable {
    return this.http
      .get(this.url + 'api/locations')
      .map(response => response);
  }

}
