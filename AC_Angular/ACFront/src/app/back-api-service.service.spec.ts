


import { TestBed } from '@angular/core/testing';



import { BackApiServiceService } from './back-api-service.service';

describe('BackApiServiceService', () => {
  let service: BackApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
