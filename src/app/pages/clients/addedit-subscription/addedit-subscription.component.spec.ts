import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditSubscriptionComponent } from './addedit-subscription.component';

describe('AddeditSubscriptionComponent', () => {
  let component: AddeditSubscriptionComponent;
  let fixture: ComponentFixture<AddeditSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
