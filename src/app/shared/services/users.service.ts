import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getALL() {
    return this.http.get<User[]>(this.url);
  }

}
