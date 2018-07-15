import { TestBed, inject } from '@angular/core/testing';

import { QustionService } from './qustion.service';

describe('QustionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QustionService]
    });
  });

  it('should be created', inject([QustionService], (service: QustionService) => {
    expect(service).toBeTruthy();
  }));
});
