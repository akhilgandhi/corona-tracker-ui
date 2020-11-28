import { TestBed } from '@angular/core/testing';

import { DiscoveredService } from './discovered.service';

describe('DiscoveredService', () => {
  let service: DiscoveredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoveredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
