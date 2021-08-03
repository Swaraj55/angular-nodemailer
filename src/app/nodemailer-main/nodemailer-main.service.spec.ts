import { TestBed } from '@angular/core/testing';

import { NodemailerMainService } from './nodemailer-main.service';

describe('NodemailerMainService', () => {
  let service: NodemailerMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodemailerMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
