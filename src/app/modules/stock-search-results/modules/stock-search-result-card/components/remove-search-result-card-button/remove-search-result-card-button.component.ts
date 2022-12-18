import { LoaderService } from '@shared/services';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-search-result-card-button',
  templateUrl: './remove-search-result-card-button.component.html',
  styleUrls: ['./remove-search-result-card-button.component.scss'],
})
export class RemoveSearchResultCardButtonComponent {
  @Input() stockSymbol: string = '';
  @Output() onRemoveStockCardClick = new EventEmitter();

  constructor(public loaderService: LoaderService) {}

  removeStockCard(): void {
    this.onRemoveStockCardClick.emit();
  }
}
