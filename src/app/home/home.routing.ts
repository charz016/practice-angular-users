import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{
    path: '',
    loadChildren: './pages/landing/landing.module#LandingModule'
}]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule{}