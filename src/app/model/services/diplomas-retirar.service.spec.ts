import { TestBed } from '@angular/core/testing';

import { DiplomasRetirarService } from './diplomas-retirar.service';

describe('DiplomasRetirarService', () => {
  let service: DiplomasRetirarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiplomasRetirarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
