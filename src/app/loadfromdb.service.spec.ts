import { TestBed } from '@angular/core/testing';

import { LoadfromdbService } from './loadfromdb.service';

describe('LoadfromdbService', () => {
  let service: LoadfromdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadfromdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
