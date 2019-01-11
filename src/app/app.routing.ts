import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: "../app/home/pages/landing/landing.module#LandingModule",
  },
  {
    path: "user-detail",
    loadChildren: "../app/home/pages/user-detail/user-detail.module#UserDetailModule",
  },
  {
    path: "post-detail",
    loadChildren: "../app/home/pages/post-detail/post-detail.module#PostDetailModule",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
