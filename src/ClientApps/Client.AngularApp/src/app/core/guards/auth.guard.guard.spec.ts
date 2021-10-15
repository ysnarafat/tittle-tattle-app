import { TestBed } from '@angular/core/testing';

import { Auth.GuardGuard } from './auth.guard.guard';

describe('Auth.GuardGuard', () => {
  let guard: Auth.GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Auth.GuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
