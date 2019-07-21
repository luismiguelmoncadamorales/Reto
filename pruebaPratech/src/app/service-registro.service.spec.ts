import { TestBed } from '@angular/core/testing';

import { ServiceRegistroService } from './service-registro.service';

describe('ServiceRegistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRegistroService = TestBed.get(ServiceRegistroService);
    expect(service).toBeTruthy();
  });
});
