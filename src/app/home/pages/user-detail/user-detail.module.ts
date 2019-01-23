import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserDetailComponent } from "./user-detail.component";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import { PostListModule } from '../../components/posts-list/posts-list.module';
import { MatCardModule } from '@angular/material/card';


const COMMON_IMPORTS = [
    FlexLayoutModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    PostListModule,
    MatCardModule
];

const COMMON_DECLARATIONS = [UserDetailComponent];

const routes: Routes = [
    { path: ':id', component: UserDetailComponent },
]

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: [COMMON_DECLARATIONS]
})
export class UserDetailModule { }

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
}