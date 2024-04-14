import { TestBed } from '@angular/core/testing';

import { ServicioPlatosService } from './servicio-platos.service';

describe('ServicioPlatosService', () => {
  let service: ServicioPlatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPlatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
