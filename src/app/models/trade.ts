import { EntryCriteria } from './entryCriteria';
import { ExitCriteria } from './exitCriteria';

export class Trade {
    id: number;
    dateEntry: Date;
    symbol: string;
    isPractice: boolean;
    isCall: boolean;
    strike: number;
    dateExpires: Date;
    bidAtOpen: number;
    askAtOpen: number;
    bidAtClose: number;
    askAtClose: number;
    profit: number;
    dateExit: Date;
    is7HR: boolean;
    notes: string;
    entryCriteria: EntryCriteria;
    exitCriteria: ExitCriteria;
}
