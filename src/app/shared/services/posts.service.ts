import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts.modle';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getById(id) {
    return this.http.get<Posts>(`${this.url}/${id}`);
  }

  getByIdUser(id) {
    return this.http.get<Posts[]>(`${this.url}?userId=${id}`);
  }
}
