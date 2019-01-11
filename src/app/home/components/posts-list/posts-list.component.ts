import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/shared/models/posts.modle';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() idUser: String;
  posts$: Posts[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getByIdUser(this.idUser).subscribe(data => {
      this.posts$ = data;
    })
  }

}
