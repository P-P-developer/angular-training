import { StockService } from '@shared/services/stock.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-enter-card',
  templateUrl: './stock-enter-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./stock-enter-card.component.scss'],
})
export class StockEnterCardComponent {
  title = 'stock tracker';
  subtitle = 'Enter the symbol of a stock to track (i.e. APPL, TSLA, GOOGL)';
  stockSymbolForm = new UntypedFormControl(undefined);

  constructor(public stockService: StockService) {}

  receiveFormControl(formControl: UntypedFormControl) {
    this.stockSymbolForm = formControl;
  }
}
