import { TestBed } from '@angular/core/testing';

import { AdviceDataService } from './advice-data.service';

describe('AdviceDataService', () => {
  let service: AdviceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
