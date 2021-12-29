import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppComponent } from './app.component';
import {ProfileBrowsingComponent} from "./profile-browsing/profile-browsing.component";
import {ProfileChatComponent} from "./profile-chat/profile-chat.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {SearchSettingsComponent} from "./search-settings/search-settings.component";

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
  { path:'', component: ProfileBrowsingComponent },
  { path: 'profile', component: ProfileChatComponent },
  { path: 'AccSett', component: AccountSettingsComponent },
  { path: 'ProfSett', component: ProfileSettingsComponent },
  { path: 'SearchSett', component: SearchSettingsComponent },
  // { path: 'ModeSett', component: ProfileChatComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = []
