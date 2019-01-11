import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts.modle';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getALL() {
    return this.http.get<Posts[]>(this.url);
  }
}
