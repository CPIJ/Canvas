/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticatedHttpServiceService } from './authenticated-http-service.service';

describe('AuthenticatedHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedHttpServiceService]
    });
  });

  it('should ...', inject([AuthenticatedHttpServiceService], (service: AuthenticatedHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
