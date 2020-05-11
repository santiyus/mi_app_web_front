import { TestBed } from '@angular/core/testing';

import { HttpCrudServiceService } from './http-crud-service.service';

describe('HttpCrudServiceService', () => {
  let service: HttpCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
