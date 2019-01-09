import { Adress } from './adress.model';
import { Company } from './company.model';

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Adress,
    phone: string,
    website: string,
    company: Company
}