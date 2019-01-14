import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { Comments } from 'src/app/shared/models/comment.model';
import { CommentsService } from 'src/app/shared/services/comments.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/reducers';
import *as fromPost from '../../../shared/store/actions/posts.actions';
import *as fromComment from '../../../shared/store/actions/comments.actions';
import { Observable } from 'rxjs';
import { selectCommentByPost } from 'src/app/shared/store/selectors/comment.selector';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  idPost: String;
  post: Post;
  comments$: Observable<Comments[]>;

  constructor(private postService: PostsService, private route: ActivatedRoute, private commentService: CommentsService, private store: Store<AppState>) {
    this.comments$ = this.store.select(selectCommentByPost)
  }

  ngOnInit() {
    this.idPost = this.route.snapshot.params.id;
    this.postService.getById(this.idPost).subscribe(data => {
      this.post = data;
    });

    this.store.dispatch(new fromComment.GetComments(this.idPost));
  }

}
