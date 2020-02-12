import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-menu-button',
  templateUrl: './main-menu-button.component.html',
  styleUrls: ['./main-menu-button.component.scss']
})
export class MainMenuButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.onClick && this.onClick();
  }

  @Input()
  public bottom = 0;

  @Input()
  public label = '';

  @Input()
  public onClick = null as (...args: any[]) => any;
}
