import { CompanyDetails } from './../../shared/models/companyDetails';
import { Component } from '@angular/core';
import { StockService } from '@shared/services/stock.service';

@Component({
  selector: 'app-stock-search-results',
  templateUrl: './stock-search-results.component.html',
  styleUrls: ['./stock-search-results.component.scss'],
})
export class StockSearchResultsComponent {
  constructor(public stockService: StockService) {
    const stockSymbolList: string[] = JSON.parse(
      localStorage.getItem('stockSymbolList') ?? ''
    );

    stockSymbolList.forEach((stockSymbol) =>
      this.stockService.searchStockByStockSymbol(stockSymbol)
    );
  }

  removeStockFromList(stockSymbol: string): void {
    this.stockService.removeStockByStockSymbol(stockSymbol);
  }

  trackByFn(index: number, item: CompanyDetails): string {
    return item.symbol; // unique id corresponding to the item
  }
}
