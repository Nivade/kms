import { Address } from './address';

export class Location {
  id: number;
  name: string;
  zip: string;
  city: string;
  street_address: string;
  country: string;
  full_address: string;
  state: string;

  constructor(public state = 'inactive')

  public toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
