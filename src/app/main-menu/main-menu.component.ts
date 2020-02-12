import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from '../services/communication/communication.service';
import {Subscription} from 'rxjs';
import * as moment from 'moment';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private toggleSubscription = null as Subscription;
  public status = null as boolean;
  public textStatus = false;
  public text = {
    version: '',
    copyright: ''
  };

  private setViewEvents() {
    this.toggleSubscription = this.communication.mainMenuToggle.subscribe(status => {
      this.status = status;

      if (status) {
        setTimeout(() => {
          this.textStatus = true;
        }, 1000);
      } else {
        this.textStatus = false;
      }
    });
  }

  private disposeViewEvents() {
    this.toggleSubscription && this.toggleSubscription.unsubscribe();
  }

  private setTextVars() {
    // Here you can imagine that we read it from localisation + local source
    this.text.version = `${environment.version} x86_64 ${moment(environment.updateTime).format('MMM DD YYYY HH:mm:SS')}`;
    this.text.copyright = environment.copyright;
  }

  constructor(private communication: CommunicationService) {
  }

  ngOnInit(): void {
    this.setViewEvents();
    this.setTextVars();
  }

  ngOnDestroy(): void {
    this.disposeViewEvents();
  }

  public openCampaign() {
    return () => {
      this.communication.sendMainMenuToggle(false);
      setTimeout(() => {
        this.communication.sendCampaignMenuToggle(true);
      }, 700);
    };
  }
}
