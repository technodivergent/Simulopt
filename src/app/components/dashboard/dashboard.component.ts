import { Component, OnInit } from '@angular/core';
import { TradesService } from '../../services/trades.service';
import { Trade } from '../../models/trade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trades: Trade[];
  constructor(private _tradesService: TradesService) { }

  ngOnInit() {
    this._tradesService.getTrades().subscribe( trades => {
      this.trades = trades;
    });
  }

}
