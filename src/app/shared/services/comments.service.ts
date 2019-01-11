import { Injectable } from '@angular/core';
import { Comments } from '../models/comment.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url = "https://jsonplaceholder.typicode.com/comments"

  constructor(private http: HttpClient) { }

  getByIdPost(id) {
    return this.http.get<Comments[]>(`${this.url}?postId=${id}`);
  }
}
