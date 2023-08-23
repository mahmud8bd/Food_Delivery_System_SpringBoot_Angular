import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileDetailsComponent } from './myprofile-details.component';

describe('MyprofileDetailsComponent', () => {
  let component: MyprofileDetailsComponent;
  let fixture: ComponentFixture<MyprofileDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyprofileDetailsComponent]
    });
    fixture = TestBed.createComponent(MyprofileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
