import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule} from 'keycloak-angular';
// import { KeycloakInit } from 'src/utils/keycloak-init.factory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { SidecontainerComponent } from './sidecontainer/sidecontainer.component';
import { ProfileBrowsingComponent } from './profile-browsing/profile-browsing.component';
import { DecisionButtonsComponent } from './decision-buttons/decision-buttons.component';
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {AccountDisplayComponent} from "./account-display/account-display.component";
import {ProfileChatComponent} from "./profile-chat/profile-chat.component";
import {SearchSettingsComponent} from "./search-settings/search-settings.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSliderModule} from "@angular/material/slider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { HttpClientModule, } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard} from './auth/authGuard';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FlexLayoutModule, } from '@angular/flex-layout';
import { RegisterGuard} from './auth/registerGuard';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { RxStompService } from './rxStomp/rx-stomp.service';
import { rxStompServiceFactory } from './rxStomp/rx-stomp.service.factory';


export function tokenGetter(){
  return sessionStorage.getItem("authToken");
}
@NgModule({
  declarations: [
    AppComponent,
    SidecontainerComponent,
    ProfileBrowsingComponent,
    DecisionButtonsComponent,
    ProfileSettingsComponent,
    AccountDisplayComponent,
    ProfileChatComponent,
    SearchSettingsComponent,
    RegisterPageComponent,
    LoginPageComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: "Bearer ",
        allowedDomains: ["localhost:8081", "api.spotimatch.tk"]
      },
    }),
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    KeycloakAngularModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSliderModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDividerModule,
    MatOptionModule,
    MatChipsModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxSliderModule,
    MatCardModule,
    MatToolbarModule
  ],

  entryComponents: [
  ],

  providers: [
    AuthGuard,
    RegisterGuard,
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
