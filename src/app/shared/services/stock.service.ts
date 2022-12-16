import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  searchStockByStockSymbol(stockSymbol: string): void {
    this.addStockSymbolToLocalStorage(stockSymbol);
    console.log('service', stockSymbol);
  }

  addStockSymbolToLocalStorage(stockSymbol: string): void {
    localStorage.setItem('stockSymbol', stockSymbol);
  }
}
