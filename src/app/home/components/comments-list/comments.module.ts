import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommentsListComponent } from "./comments-list.component";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterModule
];

const COMMON_DECLARATIONS = [CommentsListComponent];


@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: COMMON_DECLARATIONS,
    exports: [COMMON_DECLARATIONS]
})
export class CommentsListModule { }

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
}