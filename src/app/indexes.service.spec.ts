import { TestBed, inject } from '@angular/core/testing';

import { IndexesService } from './indexes.service';

describe('IndexesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexesService]
    });
  });

  it('should be created', inject([IndexesService], (service: IndexesService) => {
    expect(service).toBeTruthy();
  }));
});
