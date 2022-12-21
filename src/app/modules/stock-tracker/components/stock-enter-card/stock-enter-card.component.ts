import { StockService } from 'src/app/modules/stock-tracker/services';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'st-stock-enter-card',
  templateUrl: './stock-enter-card.component.html',
  styleUrls: ['./stock-enter-card.component.scss'],
})
export class StockEnterCardComponent {
  stockSymbolForm = new FormControl(undefined);

  constructor(public stockService: StockService) {}

  receiveFormControl(formControl: FormControl): void {
    this.stockSymbolForm = formControl;
  }
}
