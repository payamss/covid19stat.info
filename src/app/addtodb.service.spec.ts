import { TestBed } from '@angular/core/testing';

import { AddtodbService } from './addtodb.service';

describe('AddtodbService', () => {
  let service: AddtodbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtodbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
