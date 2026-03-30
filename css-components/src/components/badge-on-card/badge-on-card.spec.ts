import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeOnCard } from './badge-on-card';

describe('BadgeOnCard', () => {
  let component: BadgeOnCard;
  let fixture: ComponentFixture<BadgeOnCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeOnCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeOnCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
