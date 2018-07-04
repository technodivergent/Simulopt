import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from '../models/trade';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TradesService {
  private tradesURL = 'api/trades';
  constructor(private _http: HttpClient) { }

  getTrades(): Observable<Trade[]> {
    return this._http.get<Trade[]>(this.tradesURL).pipe(map( data => {
      const trades: Trade[] = [];
      for (const i of data) {
        const trade: Trade = new Trade();
        trade.id = i['id'];
        trade.dateEntry = i['dateEntry'];
        trade.symbol = i['symbol'];
        trade.isPractice = i['isPractice'];
        trade.isCall = i['isCall'];
        trade.strike = i['strike'];
        trade.dateExpires = i['dateExpires'];
        trade.bidAtOpen = i['bidAtOpen'];
        trade.askAtOpen = i['askAtOpen'];
        trade.bidAtClose = i['bidAtClose'];
        trade.askAtClose = i['askAtClose'];
        trade.profit = (i['bidAtClose'] - i['askAtOpen']) * 100;
        trade.dateExit = i['dateExit'];
        trade.is7HR = i['is7HR'];
        trade.notes = i['notes'];
        trade.entryCriteria = i['entryCriteria'];
        trade.exitCriteria = i['exitCriteria'];
        trades.push(trade);
      }
      console.log(trades);
      return trades;
    }));
  }
}
