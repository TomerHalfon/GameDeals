import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawaysListComponent } from './giveaways-list.component';

describe('GiveawaysListComponent', () => {
  let component: GiveawaysListComponent;
  let fixture: ComponentFixture<GiveawaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawaysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
