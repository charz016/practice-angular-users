import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/shared/models/posts.modle';
import { Comments } from 'src/app/shared/models/comment.model';
import { CommentsService } from 'src/app/shared/services/comments.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  idPost: String;
  post: Posts;
  comments:Comments[];

  constructor(private postService: PostsService, private route: ActivatedRoute,private commentService:CommentsService) {

  }

  ngOnInit() {
    this.idPost = this.route.snapshot.params.id;
    this.postService.getById(this.idPost).subscribe(data => {
    this.post = data;
    });

    this.commentService.getByIdPost(this.idPost).subscribe(data=>{
      this.comments=data;
    })

  }

}
