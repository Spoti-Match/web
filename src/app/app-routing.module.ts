//Michał Wilewski
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileBrowsingComponent} from "./profile-browsing/profile-browsing.component";
import {ProfileChatComponent} from "./profile-chat/profile-chat.component";
import {AccountDisplayComponent} from "./account-display/account-display.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {SearchSettingsComponent} from "./search-settings/search-settings.component";
import { AuthGuard } from './auth/authGuard';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterGuard } from './auth/registerGuard';
import {SidecontainerComponent} from "./sidecontainer/sidecontainer.component";

const routes: Routes = [
  { path: 'mainpage', component: SidecontainerComponent,canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: ProfileChatComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'accountSettings', component: AccountDisplayComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'profileSettings', component: ProfileSettingsComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'searchSettings', component: SearchSettingsComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'browsing', component: ProfileBrowsingComponent ,canActivate: [AuthGuard], outlet: 'comps'},
    ]
  },

  { path: 'login',component: LoginPageComponent,canActivate:[RegisterGuard]},
  { path: 'register',component: RegisterPageComponent,canActivate:[RegisterGuard]},
  { path: '', redirectTo: 'mainpage', pathMatch: 'full'},
  { path: '**', redirectTo: '' ,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProfileChatComponent, ProfileSettingsComponent, AccountDisplayComponent, SearchSettingsComponent, ProfileChatComponent, SidecontainerComponent, LoginPageComponent, RegisterPageComponent]
