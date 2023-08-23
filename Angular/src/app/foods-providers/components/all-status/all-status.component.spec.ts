import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatusComponent } from './all-status.component';

describe('AllStatusComponent', () => {
  let component: AllStatusComponent;
  let fixture: ComponentFixture<AllStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStatusComponent]
    });
    fixture = TestBed.createComponent(AllStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
