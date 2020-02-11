import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public mainMenuToggle = new Subject<boolean>();

  constructor() {
  }

  public sendMainMenuToggle(status: boolean) {
    this.mainMenuToggle.next(status);
  }
}
