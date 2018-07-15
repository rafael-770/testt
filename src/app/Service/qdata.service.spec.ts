import { TestBed, inject } from '@angular/core/testing';

import { QDataService } from './qdata.service';

describe('QDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QDataService]
    });
  });

  it('should be created', inject([QDataService], (service: QDataService) => {
    expect(service).toBeTruthy();
  }));
});
