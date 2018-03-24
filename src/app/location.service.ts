import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Location } from './location';
import { Address } from './address';

@Injectable()
export class LocationService {

  private url = 'http://localhost/api/locations';

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.url);
  }

}