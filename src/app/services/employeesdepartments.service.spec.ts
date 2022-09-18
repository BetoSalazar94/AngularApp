import { TestBed } from '@angular/core/testing';

import { EmployeesdepartmentsService } from './employeesdepartments.service';

describe('EmployeesdepartmentsService', () => {
  let service: EmployeesdepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesdepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
