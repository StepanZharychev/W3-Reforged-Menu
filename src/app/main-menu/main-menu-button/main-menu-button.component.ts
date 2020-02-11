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

  @Input()
  public bottom = 0;

  @Input()
  public label = '';
}
