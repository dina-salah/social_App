import { TestBed } from '@angular/core/testing';

import { FlowiteService } from './flowbite.service';

describe('FlowiteService', () => {
  let service: FlowiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
