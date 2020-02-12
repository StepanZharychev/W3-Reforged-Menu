import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {CommunicationService} from './services/communication/communication.service';
import { MainMenuButtonComponent } from './main-menu/main-menu-button/main-menu-button.component';
import { CampaignMenuComponent } from './campaign-menu/campaign-menu.component';
import { CampaignButtonComponent } from './campaign-menu/campaign-button/campaign-button.component';
import { CampaignCardComponent } from './campaign-menu/campaign-card/campaign-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainMenuButtonComponent,
    CampaignMenuComponent,
    CampaignButtonComponent,
    CampaignCardComponent
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
