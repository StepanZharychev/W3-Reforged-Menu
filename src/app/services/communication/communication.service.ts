import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public mainMenuToggle = new Subject<boolean>();
  public campaignMenuToggle = new Subject<boolean>();
  public escapeButtonPressed = new Subject<void>();

  constructor() {
  }

  public sendMainMenuToggle(status: boolean) {
    this.mainMenuToggle.next(status);
  }

  public sendCampaignMenuToggle(status: boolean) {
    this.campaignMenuToggle.next(status);
  }

  public sendEscapeButtonPressed() {
    this.escapeButtonPressed.next();
  }
}
