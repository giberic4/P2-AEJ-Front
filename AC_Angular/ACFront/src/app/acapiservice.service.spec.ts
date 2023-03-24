import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ACAPIServiceService } from './acapiservice.service';

describe('ACAPIServiceService', () => {
  let service: ACAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ACAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
