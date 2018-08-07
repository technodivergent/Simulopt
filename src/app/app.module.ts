import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TradeComponent } from './components/trade/trade.component';
import { EditTradeComponent } from './components/edit-trade/edit-trade.component';
import { CreateTradeComponent } from './components/create-trade/create-trade.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trade/:id', component: TradeComponent },
  { path: 'create', component: CreateTradeComponent },
  { path: 'edit/:id', component: EditTradeComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TradeComponent,
    EditTradeComponent,
    CreateTradeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
