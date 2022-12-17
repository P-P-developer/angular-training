import { CompanyQuote } from './../models/companyquote';
import { CompanyDetails } from './../models/companyDetails';
import { FinnhubService } from './finnhub.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stockSymbolList: string[] = [];
  constructor(private _finnHubService: FinnhubService) {
    this._assets$ = new BehaviorSubject<CompanyDetails[]>([]);
    this._quotes$ = new BehaviorSubject<CompanyQuote[]>([]);
  }

  private _assets$: BehaviorSubject<CompanyDetails[]>;
  public get assets$(): Observable<CompanyDetails[]> {
    return this._assets$.asObservable();
  }

  private _quotes$: BehaviorSubject<CompanyQuote[]>;
  public get quotes$(): Observable<CompanyQuote[]> {
    return this._quotes$.asObservable();
  }

  getQuoteByStockSymbol(stockSymbol: string): CompanyQuote | undefined {
    return this._quotes$.value.find(
      (quote) => quote.stockSymbol === stockSymbol
    );
  }

  removeStockByStockSymbol(stockSymbol: string): void {
    this._assets$.next(
      this._assets$.getValue().filter((asset) => asset.symbol !== stockSymbol)
    );
    this._quotes$.next(
      this._quotes$
        .getValue()
        .filter((quote) => quote.stockSymbol !== stockSymbol)
    );
    this.stockSymbolList = this.stockSymbolList.filter(
      (stockSymbolItem) => stockSymbolItem !== stockSymbol
    );
    localStorage.setItem(
      'stockSymbolList',
      JSON.stringify(this.stockSymbolList)
    );
  }

  searchStockByStockSymbol(stockSymbol: string): void {
    stockSymbol = stockSymbol.toUpperCase();
    // If the current stock symbol was already added then skip this part
    if (
      this.stockSymbolList.find(
        (stockSymbolItem) => stockSymbolItem === stockSymbol
      ) !== undefined
    ) {
      return;
    }

    this.stockSymbolList.push(stockSymbol);
    this.addStockSymbolToLocalStorage(stockSymbol);
    this.loadAssetsForStockSymbol(stockSymbol);
    this.loadQuoteForStockSymbol(stockSymbol);
  }

  private addStockSymbolToLocalStorage(stockSymbol: string): void {
    localStorage.setItem('currentStockSymbolToSearch', stockSymbol);
    localStorage.setItem(
      'stockSymbolList',
      JSON.stringify(this.stockSymbolList)
    );
  }

  private loadAssetsForStockSymbol(stockSymbol: string): void {
    this._finnHubService
      .searchAssets(stockSymbol)
      .pipe(take(1))
      .subscribe((assets) => {
        const assetToShow = assets.result.find(
          (asset) => asset.symbol === stockSymbol
        );

        if (!assetToShow) {
          return;
        }

        this._assets$.next([assetToShow, ...this._assets$.value]);
      });
  }

  private loadQuoteForStockSymbol(stockSymbol: string): void {
    this._finnHubService
      .getQuote(stockSymbol)
      .pipe(take(1))
      .subscribe((quote) => {
        quote.stockSymbol = stockSymbol;
        this._quotes$.next([quote, ...this._quotes$.value]);
      });
  }
}
