import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommunicationService} from '../services/communication/communication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private toggleSubscription = null as Subscription;
  public status = null as boolean;

  private setViewEvents() {
    this.toggleSubscription = this.communication.mainMenuToggle.subscribe(status => {
      this.status = status;
    });
  }

  private disposeViewEvents() {
    this.toggleSubscription && this.toggleSubscription.unsubscribe();
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
