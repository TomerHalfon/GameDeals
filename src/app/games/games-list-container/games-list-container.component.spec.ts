import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListContainerComponent } from './games-list-container.component';

describe('GamesListContainerComponent', () => {
  let component: GamesListContainerComponent;
  let fixture: ComponentFixture<GamesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
