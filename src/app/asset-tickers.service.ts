import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetTickersService {
  apiURL: string = 'https://bravenewcoin-v1.p.rapidapi.com/ticker';
  currApiURL: string = 'https://bravenewcoin-v1.p.rapidapi.com/digital-currency-symbols';
  response: Array<any> = [];


  constructor(private http: HttpClient) {
  }

  public getAssets() {
    const headers = new HttpHeaders().set('x-rapidapi-host', 'bravenewcoin-v1.p.rapidapi.com').set('x-rapidapi-key', 'e5d48b6b30msh9d016d783f89bb9p178dbajsnd7e95373fd6c');
    const coins: Array<string> = ['btc', 'bch', 'usdt', 'ltc'];
    const requestArray = [];
    coins.forEach(v => {
      const params = new HttpParams().set('shop', 'usd').set('coin', v);
      const options = {
        headers,
        params
      }

      requestArray.push(
        this.http.get('https://bravenewcoin-v1.p.rapidapi.com/ticker', options))


    })

    return forkJoin(requestArray)
  }

}
