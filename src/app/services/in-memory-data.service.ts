import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const trades = [
            {
                id: 1,
                dateEntry: '2018-02-20 1:23 PM',
                dateExit: '2018-02-23 1:30 PM',
                dateExpires: '2018-09-01',
                symbol: 'SAM',
                isPractice: true,
                isCall: false,
                strike: 195,
                bidAtOpen: 16.40,
                askAtOpen: 20.50,
                bidAtClose: 29.40,
                askAtClose: 30.70,
                is7HR: false,
                notes: 'Exiting w/ criteria',
                entryCriteria:
                {
                    dateFound: '2018-02-20',
                    marketSli: '$INDU 2 3/4',
                    stockSli: 'SAM 3/4',
                    dailyHardEvidence: [ 'HR', 'AW', 'DM Fired', 'SRSI' ],
                    dailySoftEvidence: [ 'srsi>80' ],
                    weeklyHardEvidence: [ 'Laminated TBB/233'],
                    weeklySoftEvidence: [ ],
                    weeklyCall: 'Red'
                },
                exitCriteria: {
                    evidence233: [ 'BBB', 'HR', 'Tweezer Bottom' ],
                    evidenceDaily: [ 'BBB' ],
                    evidenceWeekly: [ ' Lam BBB/55', 'DM', 'AW' ]
                }
            },
            {
                id: 2,
                dateEntry: '2018-03-05 1:23 PM',
                dateExit: '2018-03-10 1:23 PM',
                dateExpires: '2018-09-01',
                symbol: 'BIDU',
                isPractice: true,
                isCall: true,
                strike: 250,
                bidAtOpen: 28.45,
                askAtOpen: 29.05,
                bidAtClose: 34.9,
                askAtClose: 35.25,
                is7HR: true,
                notes: 'n/a',
                entryCriteria:
                {
                    marketSli: '$COMPQ 1 ?/4',
                    stockSli: 'BIDU ?/4',
                    dailyHardEvidence: [ 'CC', 'HR', 'DM', ],
                    dailySoftEvidence: [ 'srsi>80' ],
                    weeklyHardEvidence: [ ],
                    weeklySoftEvidence: [ ],
                    weeklyCall: ''
                },
                exitCriteria: {
                    evidence233: [ 'TBB', 'CC', 'SRSI', 'MACD', 'HR?' ],
                    evidenceDaily: [ ],
                    evidenceWeekly: [ ]
                }
            },
            {
                id: 3,
                dateEntry: '2018-05-24 9:30 AM',
                dateExit: '2018-05-27 9:30 AM',
                dateExpires: '2018-09-01',
                symbol: 'EXPE',
                isPractice: false,
                isCall: false,
                strike: 115,
                bidAtOpen: 6.20,
                askAtOpen: 6.80,
                bidAtClose: 6.00,
                askAtClose: 6.70,
                is7HR: false,
                notes: 'n/a',
                entryCriteria:
                {
                    marketSli: '$INDU/COMPQ/SPX 1 ?/4',
                    stockSli: 'EXPE ?/4',
                    dailyHardEvidence: [ 'CC', 'SRSI', 'MACD', 'DM Fired', 'HR' ],
                    dailySoftEvidence: [ 'srsi>80', 'Doji', 'UP AW' ],
                    weeklyHardEvidence: [ ],
                    weeklySoftEvidence: [ 'Doji', '21MA', 'UP AW' ],
                    weeklyCall: ''
                },
                exitCriteria: {
                    evidence233: [ ],
                    evidenceDaily: [ ],
                    evidenceWeekly: [ ]
                }
            },
            {
                id: 4,
                dateEntry: '2018-01-01 9:30',
                dateExit: '',
                dateExpires: '2018-09-01',
                symbol: 'MSFT',
                isPractice: true,
                isCall: true,
                strike: 626,
                bidAtOpen: 20.40,
                askAtOpen: 21.20,
                is7HR: false,
                notes: 'n/a',
                entryCriteria:
                {
                    marketSli: '$INDU/COMPQ/SPX 1 ?/4',
                    stockSli: 'EXPE ?/4',
                    dailyHardEvidence: [ 'CC', 'SRSI', 'MACD', 'DM Fired', 'HR' ],
                    dailySoftEvidence: [ 'srsi>80', 'Doji', 'UP AW' ],
                    weeklyHardEvidence: [ ],
                    weeklySoftEvidence: [ 'Doji', '21MA', 'UP AW' ],
                    weeklyCall: ''
                },
                exitCriteria: {
                    evidence233: [ ],
                    evidenceDaily: [ ],
                    evidenceWeekly: [ ]
                }
            }
        ];
        return { trades };
    }
}
