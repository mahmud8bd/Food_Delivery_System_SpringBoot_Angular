import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderResitrationComponent } from './provider-resitration.component';

describe('ProviderResitrationComponent', () => {
  let component: ProviderResitrationComponent;
  let fixture: ComponentFixture<ProviderResitrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderResitrationComponent]
    });
    fixture = TestBed.createComponent(ProviderResitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
