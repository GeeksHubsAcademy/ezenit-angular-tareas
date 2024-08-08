import { TestBed } from '@angular/core/testing';

import { TodosApiRestService } from './todos-api-rest.service';

describe('TodosApiRestService', () => {
  let service: TodosApiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosApiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
