import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getById(id) {
    return this.http.get<Post>(`${this.url}/${id}`);
  }

  getByIdUser(id) {
    return this.http.get<Post[]>(`${this.url}?userId=${id}`);
  }
}
