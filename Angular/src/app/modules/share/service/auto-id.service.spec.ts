import { TestBed } from '@angular/core/testing';

import { AutoIdService } from './auto-id.service';

describe('AutoIdService', () => {
  let service: AutoIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
