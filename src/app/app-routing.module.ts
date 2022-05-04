import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileBrowsingComponent} from "./profile-browsing/profile-browsing.component";
import {ProfileChatComponent} from "./profile-chat/profile-chat.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {SearchSettingsComponent} from "./search-settings/search-settings.component";
import { AuthGuard } from './auth/authGuard';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterGuard } from './auth/registerGuard';

const routes: Routes = [
  { path: '', component: ProfileBrowsingComponent,canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileChatComponent ,canActivate: [AuthGuard]},
  { path: 'accountSettings', component: AccountSettingsComponent ,canActivate: [AuthGuard]},
  { path: 'profileSettings', component: ProfileSettingsComponent ,canActivate: [AuthGuard]},
  { path: 'searchSettings', component: SearchSettingsComponent ,canActivate: [AuthGuard]},
  { path: 'return', component: ProfileBrowsingComponent ,canActivate: [AuthGuard]},
  { path: 'login',component: LoginPageComponent,canActivate:[RegisterGuard]},
  { path: 'register',component: RegisterPageComponent,canActivate:[RegisterGuard]},
  { path: '**', redirectTo: '' ,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProfileChatComponent, ProfileSettingsComponent, AccountSettingsComponent, SearchSettingsComponent, ProfileChatComponent]
