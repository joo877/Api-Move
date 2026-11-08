import { TestBed } from '@angular/core/testing';

import { Imovies } from './imovies';

describe('Imovies', () => {
  let service: Imovies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Imovies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
