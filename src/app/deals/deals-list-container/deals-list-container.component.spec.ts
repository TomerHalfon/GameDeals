import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsListContainerComponent } from './deals-list-container.component';

describe('DealsListContainerComponent', () => {
  let component: DealsListContainerComponent;
  let fixture: ComponentFixture<DealsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
