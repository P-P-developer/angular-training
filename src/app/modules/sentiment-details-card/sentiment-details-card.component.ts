import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';

import { InsiderSentimentService } from '@shared/services';
import { QuoteService, AssetService, StockService } from '@shared/services';

@Component({
  selector: 'app-sentiment-details-card',
  templateUrl: './sentiment-details-card.component.html',
  styleUrls: ['./sentiment-details-card.component.scss'],
})
export class SentimentDetailsCardComponent {
  constructor(
    public assetService: AssetService,
    private _quoteService: QuoteService,
    private _stockService: StockService,
    private _insiderSentimentService: InsiderSentimentService,
    private _route: ActivatedRoute
  ) {
    this._route.params.pipe(take(1)).subscribe(async (params: Params) => {
      const { symbol } = params;

      if (symbol) {
        this._stockService.removeAllStockData();
        this._stockService.loadRequiredStockDataByStockSymbol(symbol);
        this._insiderSentimentService.loadInsiderSentimentsOfLastThreeMonthsByStockSymbol(
          symbol
        );
      }
    });
  }
}
