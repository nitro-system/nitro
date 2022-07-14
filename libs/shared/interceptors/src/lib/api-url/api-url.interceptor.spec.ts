import { TestBed } from '@angular/core/testing';

import { ApiUrlInterceptor } from './api-url.interceptor.service';

describe('ApiUrlInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ApiUrlInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: ApiUrlInterceptor = TestBed.inject(
      ApiUrlInterceptor.bind('')
    );
    expect(interceptor).toBeTruthy();
  });
});
