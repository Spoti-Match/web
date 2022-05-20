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
import {SidecontainerComponent} from "./sidecontainer/sidecontainer.component";

const routes: Routes = [
  { path: 'login',component: LoginPageComponent,canActivate:[RegisterGuard], outlet: 'main'},
  { path: 'register',component: RegisterPageComponent,canActivate:[RegisterGuard], outlet: 'main'},
  { path: '**', redirectTo: 'mainpage' ,canActivate: [AuthGuard], outlet: 'main'  },
  { path: 'mainpage',
    component: SidecontainerComponent,
    canActivate: [AuthGuard],
    outlet: 'main',
    children: [
      { path: '', component: ProfileBrowsingComponent,canActivate: [AuthGuard], outlet: 'comps' },
      { path: 'profile', component: ProfileChatComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'accountSettings', component: AccountSettingsComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'profileSettings', component: ProfileSettingsComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'searchSettings', component: SearchSettingsComponent ,canActivate: [AuthGuard], outlet: 'comps'},
      { path: 'return', component: ProfileBrowsingComponent ,canActivate: [AuthGuard], outlet: 'comps'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ProfileChatComponent, ProfileSettingsComponent, AccountSettingsComponent, SearchSettingsComponent, ProfileChatComponent, SidecontainerComponent, LoginPageComponent, RegisterPageComponent]
