import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// import { KeycloakInit } from 'src/utils/keycloak-init.factory';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuSidenavComponent } from './menu-sidenav/menu-sidenav.component';
import { MaterialModule } from "./material/material.module";
import { SidecontainerComponent } from './sidecontainer/sidecontainer.component';
import { ProfileBrowsingComponent } from './profile-browsing/profile-browsing.component';
import { DecisionButtonsComponent } from './decision-buttons/decision-buttons.component';
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {ProfileChatComponent} from "./profile-chat/profile-chat.component";
import {SearchSettingsComponent} from "./search-settings/search-settings.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSliderModule} from "@angular/material/slider";
import {MatTooltipModule} from "@angular/material/tooltip";
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    MenuSidenavComponent,
    SidecontainerComponent,
    ProfileBrowsingComponent,
    DecisionButtonsComponent,
    ProfileSettingsComponent,
    AccountSettingsComponent,
    ProfileChatComponent,
    SearchSettingsComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        BrowserModule,
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
        MatNativeDateModule
    ],

  entryComponents: [

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
