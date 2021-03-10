import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawaysExplorerContainerComponent } from './giveaways-explorer-container.component';

describe('GiveawaysExplorerContainerComponent', () => {
  let component: GiveawaysExplorerContainerComponent;
  let fixture: ComponentFixture<GiveawaysExplorerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawaysExplorerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawaysExplorerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
