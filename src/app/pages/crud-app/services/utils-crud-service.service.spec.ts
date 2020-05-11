import { TestBed } from '@angular/core/testing';

import { UtilsCrudServiceService } from './utils-crud-service.service';

describe('UtilsCrudServiceService', () => {
  let service: UtilsCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
