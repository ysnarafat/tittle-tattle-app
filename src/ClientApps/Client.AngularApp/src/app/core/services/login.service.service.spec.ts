import { TestBed } from '@angular/core/testing';

import { Login.ServiceService } from './login.service.service';

describe('Login.ServiceService', () => {
  let service: Login.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
