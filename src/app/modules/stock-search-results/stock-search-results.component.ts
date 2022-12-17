import { AssetService } from '@shared/services/asset.service';
import { QuoteService } from '@shared/services/quote.service';
import { CompanyDetails } from '@shared/models/companyDetails';
import { Component } from '@angular/core';
import { StockService } from '@shared/services/stock.service';

@Component({
  selector: 'app-stock-search-results',
  templateUrl: './stock-search-results.component.html',
  styleUrls: ['./stock-search-results.component.scss'],
})
export class StockSearchResultsComponent {
  constructor(
    public quoteService: QuoteService,
    public assetService: AssetService,
    private _stockService: StockService
  ) {
    this._stockService.loadStockDataByStockSymbolsInLocalStorage();
  }

  removeStockFromList(stockSymbol: string): void {
    this._stockService.removeStockByStockSymbol(stockSymbol);
  }

  trackByFn(index: number, item: CompanyDetails): string {
    return item.symbol; // unique value corresponding to the item
  }
}
