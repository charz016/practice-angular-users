import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
}]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule{}