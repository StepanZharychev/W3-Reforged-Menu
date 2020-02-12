import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignButtonComponent } from './campaign-button.component';

describe('CampaignButtonComponent', () => {
  let component: CampaignButtonComponent;
  let fixture: ComponentFixture<CampaignButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
