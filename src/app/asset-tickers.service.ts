import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { mergeMap, catchError } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetTickersService {
  apiURL: string = 'https://bravenewcoin-v1.p.rapidapi.com/ticker';
  response: string[] = [];


  constructor(private http: HttpClient) {
  }

  public getAssets() {
    const headers = new HttpHeaders().set('x-rapidapi-host', 'bravenewcoin-v1.p.rapidapi.com').set('x-rapidapi-key', 'e5d48b6b30msh9d016d783f89bb9p178dbajsnd7e95373fd6c');
    const coins: string[] = ['btc', 'bch', 'usdt', 'ltc'];
    const requestArray: any = [];
    coins.forEach(v => {
      const params = new HttpParams().set('shop', 'usd').set('coin', v);
      const options = {
        headers,
        params
      }

      requestArray.push(
        this.http.get(this.apiURL, options).pipe(
          catchError(err => of(err.status)),
        ));
    })

    return forkJoin(requestArray)
  }

}
