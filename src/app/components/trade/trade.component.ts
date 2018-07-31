import { Component, OnInit } from '@angular/core';
import { TradesService } from '../../services/trades.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Trade } from '../../models/trade';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  subscription: Subscription;
  trade: Trade;
  constructor(
    private _tradesService: TradesService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe( params => {
      this._tradesService.getTradeByID(params.id).subscribe( trade => {
        this.trade = trade;
      });
    });
  }

}
