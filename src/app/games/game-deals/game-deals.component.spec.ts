import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDealsComponent } from './game-deals.component';

describe('GameDealsComponent', () => {
  let component: GameDealsComponent;
  let fixture: ComponentFixture<GameDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
