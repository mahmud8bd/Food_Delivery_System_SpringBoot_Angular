import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTacComponent } from './order-tac.component';

describe('OrderTacComponent', () => {
  let component: OrderTacComponent;
  let fixture: ComponentFixture<OrderTacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderTacComponent]
    });
    fixture = TestBed.createComponent(OrderTacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
