import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AssetTickersService } from './asset-tickers.service';
describe('AssetTickersService', () => {
  let service: AssetTickersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AssetTickersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have add function', () => {
    expect(service.getAssets).toBeTruthy();
  });
});
