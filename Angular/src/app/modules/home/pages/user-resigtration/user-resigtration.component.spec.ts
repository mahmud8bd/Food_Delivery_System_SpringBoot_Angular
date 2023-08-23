import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResigtrationComponent } from './user-resigtration.component';

describe('UserResigtrationComponent', () => {
  let component: UserResigtrationComponent;
  let fixture: ComponentFixture<UserResigtrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserResigtrationComponent]
    });
    fixture = TestBed.createComponent(UserResigtrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
