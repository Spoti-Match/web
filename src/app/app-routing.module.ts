import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppComponent } from './app.component';
import {ProfileBrowsingComponent} from "./profile-browsing/profile-browsing.component";

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''},
  {path:'', component: ProfileBrowsingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = []
