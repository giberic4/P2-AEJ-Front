import { TestBed } from '@angular/core/testing';

import { ACAPIServiceService } from './acapiservice.service';

describe('ACAPIServiceService', () => {
  let service: ACAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ACAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
