import { TestBed } from '@angular/core/testing';

import { LoadtotalService } from './loadtotal.service';

describe('LoadtotalService', () => {
  let service: LoadtotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadtotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
