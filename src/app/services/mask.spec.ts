import { TestBed } from '@angular/core/testing';

import { Mask } from './mask';

describe('Mask', () => {
  let service: Mask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
