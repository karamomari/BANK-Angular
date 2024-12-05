import { TestBed } from '@angular/core/testing';

import { ServiceLoanService } from './service-loan.service';

describe('ServiceLoanService', () => {
  let service: ServiceLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
