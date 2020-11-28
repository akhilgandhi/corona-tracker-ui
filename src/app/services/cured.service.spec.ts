import { TestBed } from '@angular/core/testing';

import { CuredService } from './cured.service';

describe('CuredService', () => {
  let service: CuredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
