import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from './shared/store/reducers';
import { selectUsers } from './shared/store/selectors/users-list.selector';
import *as fromUser from './shared/store/actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectUsers);   
  }

  ngOnInit() {
    this.store.dispatch(new fromUser.GetAllUsers);
  }

}
