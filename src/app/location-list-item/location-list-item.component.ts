import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '../location';

@Component({
  selector: 'app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styleUrls: ['./location-list-item.component.scss']
})
export class LocationListItemComponent implements OnInit {
  @Input() location: Location;
  @Input('name') name:string;

  rForm: FormGroup;
  address_regex: RegExp = /^([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))?$/i;
  zip_regex: RegExp = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;



  constructor(private formBuilder: FormBuilder) {
    this.rForm = formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      'zip': [null, Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(5)])],
      'city': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      'street_address': [null, Validators.required]
    });
   }

  ngOnInit() {
  }

  submit(value: any) {

  }

}
