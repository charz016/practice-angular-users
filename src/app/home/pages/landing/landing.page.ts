import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model'
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/reducers';
import *as fromUser from '../../../shared/store/actions/users.actions';
import { selectAllUsers } from 'src/app/shared/store/selectors/user.selector';

@Component({
  selector: 'landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit() {
    this.store.dispatch(new fromUser.GetAllUsers);
  }

}
