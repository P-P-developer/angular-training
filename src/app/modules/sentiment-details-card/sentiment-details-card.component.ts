import { MonthHelperService } from './../../shared/services/month-helper.service';
import { InsiderSentimentService } from './../../shared/services/insider-sentiment.service';
import {
  QuoteService,
  AssetService,
  FinnhubService,
  LoaderService,
  StockService,
} from '@shared/services';
import { Component, Input } from '@angular/core';
import { CompanyDetails, CompanyQuote } from '@shared/models';
import { ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sentiment-details-card',
  templateUrl: './sentiment-details-card.component.html',
  styleUrls: ['./sentiment-details-card.component.scss'],
})
export class SentimentDetailsCardComponent {
  symbol: string = '';

  constructor(
    public loaderService: LoaderService,
    public monthHelperService: MonthHelperService,
    public assetService: AssetService,
    private quoteService: QuoteService,
    private stockService: StockService,
    public insiderSentimentService: InsiderSentimentService,
    private route: ActivatedRoute
  ) {
    this.route.params.pipe(take(1)).subscribe(async (params: Params) => {
      const { symbol } = params;

      if (symbol) {
        this.stockService.removeAllStockData();
        this.stockService.addNewStockSymbolToList(symbol);
        this.assetService.loadAssetForStockSymbol(symbol);
        this.quoteService.loadQuoteForStockSymbol(symbol);
        this.insiderSentimentService.loadInsiderSentimentsOfLastThreeMonthsByStockSymbol(
          symbol
        );
      }
    });
  }
}
