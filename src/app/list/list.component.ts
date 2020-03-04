import { Component, OnInit } from '@angular/core';
import { AssetTickersService } from '../asset-tickers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  coins: any = [];
  constructor(private assetService: AssetTickersService) {
  }

  ngOnInit() {
    this.assetService.getAssets().subscribe((response) => {
      this.coins = response;
    });
  }

}
