import { TestBed } from '@angular/core/testing';

import { DatapullService } from './datapull.service';

describe('DatapullService', () => {
  let service: DatapullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
