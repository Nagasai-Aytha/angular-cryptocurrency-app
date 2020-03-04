import { TestBed } from '@angular/core/testing';

import { AssetTickersService } from './asset-tickers.service';

describe('AssetTickersService', () => {
  let service: AssetTickersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetTickersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
