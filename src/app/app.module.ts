import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// import { KeycloakInit } from 'src/utils/keycloak-init.factory';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
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
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {ProfileChatComponent} from "./profile-chat/profile-chat.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSliderModule} from "@angular/material/slider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpRouting } from 'src/utils/httpRouting';



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
    AccountSettingsComponent,
    ProfileChatComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        BrowserModule,
        JwtModule.forRoot({
          config: {
          tokenGetter: tokenGetter,
          authScheme: "Bearer ",
          allowedDomains: ["localhost:8081","https://api.spotimatch.tk"]
        },
      }),
        HttpClientModule,
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
        NgxSliderModule
    ],

  entryComponents: [

  ],

  providers: [],


  bootstrap: [AppComponent]
})
export class AppModule { }
