import { TestBed } from '@angular/core/testing';

import { DataJud } from './data-jud';

describe('DataJud', () => {
  let service: DataJud;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataJud);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
