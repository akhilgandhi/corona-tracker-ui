import { TestBed } from '@angular/core/testing';

import { FatalitiesService } from './fatalities.service';

describe('FatalitiesService', () => {
  let service: FatalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
