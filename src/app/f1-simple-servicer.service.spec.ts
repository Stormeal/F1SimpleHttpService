import { TestBed, inject } from '@angular/core/testing';

import { F1SimpleServicerService } from './f1-simple-servicer.service';

describe('F1SimpleServicerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [F1SimpleServicerService]
    });
  });

  it('should be created', inject([F1SimpleServicerService], (service: F1SimpleServicerService) => {
    expect(service).toBeTruthy();
  }));
});
