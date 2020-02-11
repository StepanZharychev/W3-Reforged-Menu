import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommunicationService} from './services/communication/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('backgroundVideo')
  private video: ElementRef;
  public isStarted = false;

  constructor(private communication: CommunicationService) {
  }

  public runApp() {
    this.isStarted = true;

    this.video.nativeElement.play().catch(err => {
      console.log(err);
    });

    this.communication.sendMainMenuToggle(true);
  }
}
