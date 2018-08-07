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
  markets: string[];
  datePicker: string;
  timePicker: string;

  constructor(
    private _tradesService: TradesService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Initialize required properties
    this.trade.entryCriteria = new EntryCriteria();
    this.trade.entryCriteria.dailyHardEvidence = [];
    this.trade.entryCriteria.dailySoftEvidence = [];
    this.trade.entryCriteria.weeklyHardEvidence = [];
    this.trade.entryCriteria.weeklySoftEvidence = [];
    this.trade.exitCriteria = new ExitCriteria();
    this.trade.exitCriteria.evidence233 = [];
    this.trade.exitCriteria.evidenceDaily = [];
    this.trade.exitCriteria.evidenceWeekly = [];

    // Used for dropdown select menu
    this.markets = ['INDU', 'COMPQ', 'SPX'];

    this._tradesService.getTrades().subscribe(trades => {
      this.trades = trades;
      this.trade.id = trades.length + 1;
    });
  }

  dateChange(value): void {
    this.datePicker = value;
    this.datetimeChange();
  }

  timeChange(value): void {
    this.timePicker = value;
    this.datetimeChange();
  }

  datetimeChange() {
    const dateString = this.datePicker + 'T' + this.timePicker;
    const newDate = new Date(Date.parse(dateString));
    this.trade.dateEntry = newDate;
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
    console.log(this.trade);
    this.subscription = this._tradesService.saveNewTrade(this.trade).subscribe();
  }

}
