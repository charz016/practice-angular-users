import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/store/reducers';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { selectUserById } from 'src/app/shared/store/selectors/users-list.selector';
import { Observable } from 'rxjs';
import *as fromPost from '../../../shared/store/actions/posts.actions';
import { selectPostsbyUser } from 'src/app/shared/store/selectors/post.selector';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  posts$: Observable<Post[]>;
  user$: Observable<User>;
  idUser: string;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.posts$ = this.store.select(selectPostsbyUser)

  }

  ngOnInit() {
    this.idUser = this.route.snapshot.params.id;
    this.user$ = this.store.select(selectUserById(this.idUser));
    this.store.dispatch(new fromPost.GetAllPost(this.idUser));
  }

}
