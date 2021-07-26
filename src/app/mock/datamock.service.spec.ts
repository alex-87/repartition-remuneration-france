import { TestBed } from '@angular/core/testing';

import { DatamockService } from './datamock.service';

describe('DatamockService', () => {
  let service: DatamockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamockService);
  });

});
