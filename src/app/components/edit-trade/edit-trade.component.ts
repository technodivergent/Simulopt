import { Component, OnInit } from '@angular/core';
import { TradesService } from '../../services/trades.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Trade } from '../../models/trade';

@Component({
  selector: 'app-edit-trade',
  templateUrl: './edit-trade.component.html',
  styleUrls: ['./edit-trade.component.css']
})
export class EditTradeComponent implements OnInit {
  subscription: Subscription;
  trade: Trade;
  constructor(
    private _tradesService: TradesService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => {
      this._tradesService.getTradeByID(params.id).subscribe(trade => {
        this.trade = trade;
      });
    });
  }

  addLine(evidenceType: string) {
    console.log('added type: ' + evidenceType);
    switch (evidenceType) {
      case 'entryDH':
        this.trade.entryCriteria.dailyHardEvidence.length++;
        break;
      case 'entryDS':
        this.trade.entryCriteria.dailySoftEvidence.length++;
        break;
      case 'entryWH':
        this.trade.entryCriteria.weeklyHardEvidence.length++;
        break;
      case 'entryWS':
        this.trade.entryCriteria.weeklySoftEvidence.length++;
        break;
      case 'exit233':
        this.trade.exitCriteria.evidence233.length++;
        break;
      case 'exitDaily':
        this.trade.exitCriteria.evidenceDaily.length++;
        break;
      case 'exitWeekly':
        this.trade.exitCriteria.evidenceWeekly.length++;
        break;

    }
  }

}
