import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawaysFilterComponent } from './giveaways-filter.component';

describe('GiveawaysFilterComponent', () => {
  let component: GiveawaysFilterComponent;
  let fixture: ComponentFixture<GiveawaysFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawaysFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawaysFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
