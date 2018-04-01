import { Address } from './address';

export class Location {
  id: number;
  name: string;
  zipcode: string;
  city: string;
  address: string;
  country: string;
}

export class LocationCollection {
  data: Location[];
}
