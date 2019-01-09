import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/store/reducers';
import { effects } from './shared/store/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersListComponent } from './shared/components/users-list/users-list.component';
import { UsersDetailComponent } from './shared/components/users/users-detail/users-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersListComponent,
    UsersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    [StoreModule.forRoot(reducers)],
    [EffectsModule.forRoot(effects)],
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
