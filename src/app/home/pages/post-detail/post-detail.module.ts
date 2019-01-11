import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PostDetailComponent } from "./post-detail.component";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import { PostListModule } from '../../components/posts-list/posts-list.module';


const COMMON_IMPORTS = [
    FlexLayoutModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    PostListModule
];

const COMMON_DECLARATIONS = [PostDetailComponent];

const routes: Routes = [
    { path: ':id', component: PostDetailComponent },
]

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: [COMMON_DECLARATIONS]
})
export class PostDetailModule { }

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
}