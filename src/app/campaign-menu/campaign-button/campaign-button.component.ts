import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-campaign-button',
  templateUrl: './campaign-button.component.html',
  styleUrls: ['./campaign-button.component.scss']
})
export class CampaignButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.onClick && this.onClick();
  }

  @Input()
  public top = 0;

  @Input()
  public left = 0;

  @Input()
  public reversed = false;

  @Input()
  public disabled = false;

  @Input()
  public onClick = null as (...args: any[]) => any;
}
