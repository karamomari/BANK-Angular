import { TestBed } from '@angular/core/testing';

import { OtherserService } from './otherser.service';

describe('OtherserService', () => {
  let service: OtherserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
