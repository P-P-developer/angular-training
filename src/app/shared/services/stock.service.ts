import { Injectable } from '@angular/core';

import { LocalStorageKeys } from '@shared/models';
import {
  AssetService,
  QuoteService,
  NotificationService,
} from '@shared/services';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stockSymbolList: string[] = [];
  constructor(
    private _quoteService: QuoteService,
    private _assetService: AssetService,
    private _notificationService: NotificationService
  ) {}

  loadStockDataByStockSymbolsInLocalStorage(): void {
    const stockSymbolList: string[] = JSON.parse(
      localStorage.getItem(LocalStorageKeys.stockSymbolList) ?? '[]'
    );

    stockSymbolList.forEach((stockSymbol) => {
      // If the current stock symbol was already added then skip this part
      if (this.stockSymbolAlreadyExistInList(stockSymbol)) {
        return;
      }
      this.loadRequiredStockDataByStockSymbol(stockSymbol);
    });
  }

  searchStockByStockSymbol(stockSymbol: string): void {
    stockSymbol = stockSymbol.toUpperCase();

    // If the current stock symbol was already added then skip this part
    if (this.stockSymbolAlreadyExistInList(stockSymbol)) {
      this._notificationService.showNotification(
        'The stock you are looking for has already been added!'
      );
      return;
    }

    // Load required data for a stock by the stock symbol
    this.loadRequiredStockDataByStockSymbol(stockSymbol);

    // Add stock symbol to the local storage
    this.addStockSymbolToLocalStorage(stockSymbol);
  }

  loadRequiredStockDataByStockSymbol(stockSymbol: string): void {
    // load asset for current stock symbol
    this._assetService.loadAssetForStockSymbol(stockSymbol);

    this._assetService.assets$.subscribe((assets) => {
      if (assets.find((asset) => asset.symbol == stockSymbol) != undefined) {
        // load quote for current stock symbol
        this._quoteService.loadQuoteForStockSymbol(stockSymbol);
        // Push new stock symbol to the list
        this.addNewStockSymbolToList(stockSymbol);
      }
    });
  }

  removeAllStockData(): void {
    this._assetService.removeAllAssets();
    this._quoteService.removeAllQuotes();
    this.stockSymbolList = [];
  }

  removeStockByStockSymbol(stockSymbol: string): void {
    this._assetService.removeAssetByStockSymbol(stockSymbol);
    this._quoteService.removeQuoteByStockSymbol(stockSymbol);
    this.stockSymbolList = this.stockSymbolList.filter(
      (stockSymbolItem) => stockSymbolItem !== stockSymbol
    );
    localStorage.setItem(
      LocalStorageKeys.stockSymbolList,
      JSON.stringify(this.stockSymbolList)
    );
  }

  private addStockSymbolToLocalStorage(stockSymbol: string): void {
    localStorage.setItem(
      LocalStorageKeys.currentStockSymbolToSearch,
      stockSymbol
    );
    localStorage.setItem(
      LocalStorageKeys.stockSymbolList,
      JSON.stringify(this.stockSymbolList)
    );
  }

  private stockSymbolAlreadyExistInList(stockSymbol: string): boolean {
    return (
      this.stockSymbolList.find(
        (stockSymbolItem) => stockSymbolItem === stockSymbol
      ) !== undefined
    );
  }

  private addNewStockSymbolToList(stockSymbol: string): void {
    this.stockSymbolList.push(stockSymbol);
  }
}
