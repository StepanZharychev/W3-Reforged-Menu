import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CommunicationService} from '../services/communication/communication.service';

@Component({
  selector: 'app-campaign-menu',
  templateUrl: './campaign-menu.component.html',
  styleUrls: ['./campaign-menu.component.scss']
})
export class CampaignMenuComponent implements OnInit, OnDestroy {
  private toggleSubscription = null as Subscription;
  private escapeSubscription = null as Subscription;
  public status = null as boolean;

  private setViewEvents() {
    this.toggleSubscription = this.communication.campaignMenuToggle.subscribe(status => {
      this.status = status;
    });
    this.escapeSubscription = this.communication.escapeButtonPressed.subscribe(() => {
      if (this.status) {
        this.status = false;
        setTimeout(() => {
          this.communication.sendMainMenuToggle(true);
        }, 700);
      }
    });
  }

  private disposeViewEvents() {
    this.toggleSubscription && this.toggleSubscription.unsubscribe();
    this.escapeSubscription && this.escapeSubscription.unsubscribe();
  }

  constructor(private communication: CommunicationService) {
  }

  ngOnInit(): void {
    this.setViewEvents();
  }

  ngOnDestroy(): void {
    this.disposeViewEvents();
  }
}
