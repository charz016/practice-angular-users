import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PostDetailComponent } from "./post-detail.component";
import { Routes, RouterModule } from '@angular/router';
import { CommentsListModule } from '../../components/comments-list/comments.module';
import {MatCardModule} from '@angular/material/card';


const COMMON_IMPORTS = [
    FlexLayoutModule,
    CommonModule,
    MatCardModule,
    CommentsListModule
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