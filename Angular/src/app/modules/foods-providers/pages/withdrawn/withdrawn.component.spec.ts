import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawnComponent } from './withdrawn.component';

describe('WithdrawnComponent', () => {
  let component: WithdrawnComponent;
  let fixture: ComponentFixture<WithdrawnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawnComponent]
    });
    fixture = TestBed.createComponent(WithdrawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
