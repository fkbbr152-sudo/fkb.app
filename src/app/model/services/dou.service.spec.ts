import { TestBed } from '@angular/core/testing';

import { DouService } from './dou.service';

describe('DouService', () => {
  let service: DouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
