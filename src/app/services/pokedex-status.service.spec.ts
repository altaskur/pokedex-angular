import { TestBed } from '@angular/core/testing';

import { PokedexStatusService } from './pokedex-status.service';

describe('PokedexStatusService', () => {
  let service: PokedexStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
