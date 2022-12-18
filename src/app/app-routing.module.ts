import { StockTrackerComponent } from './modules/stock-tracker/stock-tracker.component';
import { SentimentDetailsCardComponent } from './modules/sentiment-details-card/sentiment-details-card.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StockTrackerComponent,
  },
  {
    path: 'sentiment/:symbol',
    pathMatch: 'full',
    component: SentimentDetailsCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
