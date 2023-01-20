import { TestBed } from '@angular/core/testing';

import { PDEpensesService } from './pdepenses.service';

describe('PDEpensesService', () => {
  let service: PDEpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PDEpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
