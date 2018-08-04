import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TradesService } from '../../services/trades.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Trade } from '../../models/trade';
import { EntryCriteria } from '../../models/entryCriteria';
import { ExitCriteria } from '../../models/exitCriteria';

@Component({
  selector: 'app-create-trade',
  templateUrl: './create-trade.component.html',
  styleUrls: ['./create-trade.component.css']
})
export class CreateTradeComponent implements OnInit {
  subscription: Subscription;
  trade: Trade = new Trade();
  trades: Trade[] = [];

  constructor(
    private _tradesService: TradesService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._tradesService.getTrades().subscribe( trades => {
      this.trades = trades;
      this.trade.id = trades.length + 1;
      this.trade.is7HR = false;
      this.trade.entryCriteria = new EntryCriteria();
      console.log(this.trade.entryCriteria);
      this.trade.exitCriteria = new ExitCriteria();
    });
  }

  saveTrade(): void {
    console.log(this.trade);
    this.subscription = this._tradesService.saveNewTrade(this.trade).subscribe();
  }

}
