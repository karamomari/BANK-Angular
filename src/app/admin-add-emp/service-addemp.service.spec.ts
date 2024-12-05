import { TestBed } from '@angular/core/testing';

import { ServiceAddempService } from './service-addemp.service';

describe('ServiceAddempService', () => {
  let service: ServiceAddempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAddempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
