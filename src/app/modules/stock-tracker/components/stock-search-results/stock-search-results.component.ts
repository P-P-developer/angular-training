import { CompanyDetails } from 'src/app/modules/stock-tracker/models';
import { Component, OnInit } from '@angular/core';
import {
  QuoteService,
  AssetService,
  StockService,
} from 'src/app/modules/stock-tracker/services';

@Component({
  selector: 'st-stock-search-results',
  templateUrl: './stock-search-results.component.html',
  styleUrls: ['./stock-search-results.component.scss'],
})
export class StockSearchResultsComponent implements OnInit {
  constructor(
    public quoteService: QuoteService,
    public assetService: AssetService,
    private _stockService: StockService
  ) {}

  ngOnInit() {
    this._stockService.loadStockDataByStockSymbolsInLocalStorage();
  }

  removeStockFromList(stockSymbol: string): void {
    this._stockService.removeStockByStockSymbol(stockSymbol);
  }

  trackByFn(index: number, item: CompanyDetails): string {
    return item.symbol; // unique value corresponding to the item
  }
}
