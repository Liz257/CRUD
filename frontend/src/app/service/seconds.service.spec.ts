import { TestBed } from '@angular/core/testing';

import { SecondsService } from './seconds.service';

describe('SecondsService', () => {
  let service: SecondsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
