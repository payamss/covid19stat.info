import { TestBed } from '@angular/core/testing';

import { TotalProvincesService } from './total-provinces.service';

describe('TotalProvincesService', () => {
  let service: TotalProvincesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalProvincesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
