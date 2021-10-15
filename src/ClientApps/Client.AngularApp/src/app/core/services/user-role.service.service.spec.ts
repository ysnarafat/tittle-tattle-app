import { TestBed } from '@angular/core/testing';

import { UserRole.ServiceService } from './user-role.service.service';

describe('UserRole.ServiceService', () => {
  let service: UserRole.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRole.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
