import { TestBed } from '@angular/core/testing';

import { Role.GuardGuard } from './role.guard.guard';

describe('Role.GuardGuard', () => {
  let guard: Role.GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Role.GuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
