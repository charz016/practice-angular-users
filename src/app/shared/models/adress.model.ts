import { Geo } from './geo.model';

export interface Adress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}