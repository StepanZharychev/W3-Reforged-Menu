import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {CommunicationService} from './services/communication/communication.service';
import { MainMenuButtonComponent } from './main-menu/main-menu-button/main-menu-button.component';
import { CampaignMenuComponent } from './campaign-menu/campaign-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainMenuButtonComponent,
    CampaignMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
