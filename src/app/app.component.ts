import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommunicationService} from './services/communication/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('backgroundVideo')
  private video: ElementRef;
  public isStarted = false;

  private setGlobalEventHandlers() {
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case 'Escape':
          this.communication.sendEscapeButtonPressed();
          break;
      }
    });
  }

  constructor(private communication: CommunicationService) {
  }

  ngOnInit() {
    this.setGlobalEventHandlers();
  }

  public runApp() {
    this.isStarted = true;

    this.video.nativeElement.play().catch(err => {
      console.log(err);
    });

    this.communication.sendMainMenuToggle(true);
  }
}
