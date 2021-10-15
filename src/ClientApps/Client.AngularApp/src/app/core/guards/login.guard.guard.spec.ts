import { TestBed } from '@angular/core/testing';

import { Login.GuardGuard } from './login.guard.guard';

describe('Login.GuardGuard', () => {
  let guard: Login.GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Login.GuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
