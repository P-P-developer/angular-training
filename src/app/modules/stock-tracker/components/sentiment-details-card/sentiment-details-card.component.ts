import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';

import { InsiderSentimentService, LoaderService } from '@shared/services';
import { AssetService, StockService } from '@shared/services';

@Component({
  selector: 'app-sentiment-details-card',
  templateUrl: './sentiment-details-card.component.html',
  styleUrls: ['./sentiment-details-card.component.scss'],
})
export class SentimentDetailsCardComponent implements OnDestroy {
  symbol: string = '';
  constructor(
    public assetService: AssetService,
    public loaderService: LoaderService,
    private _stockService: StockService,
    private _insiderSentimentService: InsiderSentimentService,
    private _route: ActivatedRoute
  ) {
    console.log('test');
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

  ngOnDestroy(): void {
    // Remove everything when leaving the component
    this._stockService.removeAllStockData();
  }
}
