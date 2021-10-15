import { TestBed } from '@angular/core/testing';

import { Error.InterceptorInterceptor } from './error.interceptor.interceptor';

describe('Error.InterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Error.InterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Error.InterceptorInterceptor = TestBed.inject(Error.InterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
