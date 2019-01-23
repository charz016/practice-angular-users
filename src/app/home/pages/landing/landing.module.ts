import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from "./landing.page";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
    { path: '', component: LandingPage },
];

const COMMON_IMPORTS = [
    FlexLayoutModule,
    CommonModule,
    MatIconModule,
    MatCardModule
];

const COMMON_DECLARATIONS = [LandingPage];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class LandingModule { }

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
}