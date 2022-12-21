import {
  CompanyQuote,
  CompanyDetails,
} from 'src/app/modules/stock-tracker/models';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StockService } from 'src/app/modules/stock-tracker/services';

@Component({
  selector: 'app-stock-search-result-card',
  templateUrl: './stock-search-result-card.component.html',
  styleUrls: ['./stock-search-result-card.component.scss'],
})
export class StockSearchResultCardComponent {
  constructor(public stockService: StockService) {}
  @Input() companyDetails: CompanyDetails = {
    description: '',
    displaySymbol: '',
    symbol: '',
    type: '',
  };

  @Input() companyQuote: CompanyQuote | undefined = undefined;

  @Output() myClick = new EventEmitter();

  removeStockCard(): void {
    this.myClick.emit();
  }
}
