import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from '../models/trade';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TradesService {
  private tradesURL = 'api/trades';
  constructor(private _http: HttpClient) { }

  getTrades(): Observable<Trade[]> {
    return this._http.get<Trade[]>(this.tradesURL).pipe(map(data => {
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

  getTradeByID(id: number): Observable<Trade> {
    const url = `${this.tradesURL}/${id}`;
    return this._http.get<Trade>(url).pipe(
      tap(_ => console.log(`fetched trade id=${id}`)),
      map(data => {
        const trade = new Trade();
        trade.id = data['id'];
        trade.dateEntry = data['dateEntry'];
        trade.symbol = data['symbol'];
        trade.isPractice = data['isPractice'];
        trade.isCall = data['isCall'];
        trade.strike = data['strike'];
        trade.dateExpires = data['dateExpires'];
        trade.bidAtOpen = data['bidAtOpen'];
        trade.askAtOpen = data['askAtOpen'];
        trade.bidAtClose = data['bidAtClose'];
        trade.askAtClose = data['askAtClose'];
        trade.profit = (data['bidAtClose'] - data['askAtOpen']) * 100;
        trade.dateExit = data['dateExit'];
        trade.is7HR = data['is7HR'];
        trade.notes = data['notes'];
        trade.entryCriteria = data['entryCriteria'];
        trade.exitCriteria = data['exitCriteria'];
        return trade;
      })
    );
  }

  saveTrade(trade: Trade) {
    const url = `${this.tradesURL}`;
    return this._http.put<Trade>(url, trade).pipe(
      tap(_ => console.log(`updated trade id=${trade.id}`))
    );
  }

  saveNewTrade(trade: Trade) {
    const url = `${this.tradesURL}`;
    return this._http.post<Trade>(url, trade).pipe(
      tap(_ => console.log(`posted trade w/ id=${trade.id}`))
    );
  }
}
