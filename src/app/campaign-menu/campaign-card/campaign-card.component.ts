import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public src = '';

  @Input()
  public locked = false;

  @Input()
  public title = '';

  @Input()
  public subtitle = '';

  @Input()
  public style = null as string;
}
