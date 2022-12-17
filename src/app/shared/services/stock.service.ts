import { LocalStorageKeys } from './../models/localStorageKeys';
import { AssetService } from './asset.service';
import { QuoteService } from './quote.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stockSymbolList: string[] = [];
  constructor(
    private _quoteService: QuoteService,
    private _assetService: AssetService
  ) {}

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

  searchStockByStockSymbol(stockSymbol: string): void {
    stockSymbol = stockSymbol.toUpperCase();

    // If the current stock symbol was already added then skip this part
    if (this.stockSymbolAlreadyExistInList(stockSymbol)) {
      return;
    }

    // Push new stock symbol to the list
    this.addNewStockSymbolToList(stockSymbol);

    // Add stock symbol to the local storage
    this.addStockSymbolToLocalStorage(stockSymbol);

    // load asset for current stock symbol
    this._assetService.loadAssetForStockSymbol(stockSymbol);

    // load quote for current stock symbol
    this._quoteService.loadQuoteForStockSymbol(stockSymbol);
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
