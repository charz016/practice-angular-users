import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/store/reducers';
import { Store, select } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { selectUserById } from 'src/app/shared/store/selectors/users-list.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.user$ = this.store.select(selectUserById(id));
 
  }

}
