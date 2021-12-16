import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuSidenavComponent } from './menu-sidenav/menu-sidenav.component';
import { MaterialModule } from "./material/material.module";
import { SidecontainerComponent } from './sidecontainer/sidecontainer.component';
import { ProfileBrowsingComponent } from './profile-browsing/profile-browsing.component';
import { DecisionButtonsComponent } from './decision-buttons/decision-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSidenavComponent,
    SidecontainerComponent,
    ProfileBrowsingComponent,
    DecisionButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
