import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stock-track-button',
  templateUrl: './stock-track-button.component.html',
  styleUrls: ['./stock-track-button.component.scss'],
})
export class StockTrackButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() isInValidStockSymbol: boolean = true;
  @Output() myClick = new EventEmitter();

  saveStockSymbolToLocalStorage(): void {
    this.myClick.emit();
  }
}
