import { StockService } from '@shared/services';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-enter-card',
  templateUrl: './stock-enter-card.component.html',
  styleUrls: ['./stock-enter-card.component.scss'],
})
export class StockEnterCardComponent {
  title = 'stock tracker';
  subtitle = 'Enter the symbol of a stock to track (i.e. AAPL, TSLA, GOOGL)';
  stockSymbolForm = new FormControl(undefined);

  constructor(public stockService: StockService) {}

  receiveFormControl(formControl: FormControl) {
    this.stockSymbolForm = formControl;
  }
}
