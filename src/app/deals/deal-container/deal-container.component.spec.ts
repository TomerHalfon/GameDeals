import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealContainerComponent } from './deal-container.component';

describe('DealContainerComponent', () => {
  let component: DealContainerComponent;
  let fixture: ComponentFixture<DealContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
