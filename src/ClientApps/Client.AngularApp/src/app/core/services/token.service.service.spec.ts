import { TestBed } from '@angular/core/testing';

import { Token.ServiceService } from './token.service.service';

describe('Token.ServiceService', () => {
  let service: Token.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Token.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
