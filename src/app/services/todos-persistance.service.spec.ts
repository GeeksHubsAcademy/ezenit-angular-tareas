import { TestBed } from '@angular/core/testing';

import { TodosPersistanceService } from './todos-persistance.service';

describe('TodosPersistanceService', () => {
  let service: TodosPersistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosPersistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
