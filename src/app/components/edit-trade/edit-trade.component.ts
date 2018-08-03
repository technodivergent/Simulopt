import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
    private _route: ActivatedRoute,
    private location: Location
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

  goBack(): void {
    this.location.back();
  }

  /*
  This function is used by EditTradeComponent to fix a bug where
  typing a single character in a text input control causes the user
  to lose focus of that control. This is because of how JS works with
  arrays of primitives (comparison by value).
  TrackBy informs Angular not to remove the textbox from the DOM.
  ***
  More info can be found:
  https://stackoverflow.com/questions/42322968/angular2-dynamic-input-field-lose-focus-when-input-changes
  https://github.com/angular/angular.js/issues/13327
  */
  trackByFn(index: any, item: any) {
    return index;
  }

  saveTrade(): void {
    this._tradesService.saveTrade(this.trade).subscribe(
      () => this.goBack()
    );
  }

}
