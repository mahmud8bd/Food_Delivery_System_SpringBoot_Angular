import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWithdrawComponent } from './request-withdraw.component';

describe('RequestWithdrawComponent', () => {
  let component: RequestWithdrawComponent;
  let fixture: ComponentFixture<RequestWithdrawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestWithdrawComponent]
    });
    fixture = TestBed.createComponent(RequestWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
