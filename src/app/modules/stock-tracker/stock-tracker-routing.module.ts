import { StockTrackerComponent } from './stock-tracker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SentimentDetailsCardComponent } from './components/sentiment-details-card/sentiment-details-card.component';

const routes: Routes = [
  {
    path: '',
    component: StockTrackerComponent,
    children: [
      {
        path: 'sentiment/:symbol',
        component: SentimentDetailsCardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [[RouterModule.forChild(routes)], CommonModule],
})
export class StockTrackerRoutingModule {}
