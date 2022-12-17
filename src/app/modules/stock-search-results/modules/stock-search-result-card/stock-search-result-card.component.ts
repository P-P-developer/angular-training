import { CompanyQuote } from '@shared/models/companyquote';
import { CompanyDetails } from '@shared/models/companyDetails';
import { StockService } from '@shared/services/stock.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  removeCard(): void {
    this.myClick.emit();
  }
}
