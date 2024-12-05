import { TestBed } from '@angular/core/testing';

import { ServicehomeuserService } from './servicehomeuser.service';

describe('ServicehomeuserService', () => {
  let service: ServicehomeuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicehomeuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
