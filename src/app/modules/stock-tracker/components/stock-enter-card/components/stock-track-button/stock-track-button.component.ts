import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoaderService } from '@shared/services';

@Component({
  selector: 'st-stock-track-button',
  templateUrl: './stock-track-button.component.html',
  styleUrls: ['./stock-track-button.component.scss'],
})
export class StockTrackButtonComponent {
  constructor(public loaderService: LoaderService) {}

  @Input() isInValidStockSymbol: boolean = true;
  @Output() onSearchButtonClick = new EventEmitter();

  saveStockSymbolToLocalStorage(): void {
    this.onSearchButtonClick.emit();
  }
}
