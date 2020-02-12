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
  private lengthModifier = 0;
  public status = null as boolean;
  public cards = [
    {
      imgSrc: 'assets/Camp1.png',
      locked: false,
      title: 'Prologue Campaign',
      subtitle: 'Exodus Of The Horde',
      style: 'red'
    },
    {
      imgSrc: 'assets/Camp2.png',
      locked: false,
      title: 'Human Campaign',
      subtitle: 'The Scourge Of Lordaeron',
      style: 'blue'
    },
    {
      imgSrc: '',
      locked: true,
      title: null,
      subtitle: null
    },
    {
      imgSrc: '',
      locked: true,
      title: null,
      subtitle: null
    },
    {
      imgSrc: '',
      locked: true,
      title: null,
      subtitle: null
    }
  ] as {
    imgSrc: string;
    locked: boolean;
    title: string;
    subtitle: string;
    style?: string;
  }[];

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

  public get availableCards() {
    return this.cards.slice(this.lengthModifier, this.lengthModifier + 3);
  }

  public get backAvailable() {
    return this.lengthModifier > 0;
  }

  public get forwardAvailable() {
    return this.cards.length > this.lengthModifier + 3;
  }

  public listBack() {
    return () => {
      if (this.lengthModifier > 0) {
        this.lengthModifier--;
      }
    };
  }

  public listForward() {
    return () => {
      if (this.cards.length > this.lengthModifier + 3) {
        this.lengthModifier++;
      }
    };
  }
}
