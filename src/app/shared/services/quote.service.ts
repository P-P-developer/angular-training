import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { CompanyQuote } from '@shared/models';
import { FinnhubService } from '@shared/services';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private _finnHubService: FinnhubService) {
    this._quotes$ = new BehaviorSubject<CompanyQuote[]>([]);
  }

  private _quotes$: BehaviorSubject<CompanyQuote[]>;
  public get quotes$(): Observable<CompanyQuote[]> {
    return this._quotes$.asObservable();
  }

  loadQuoteForStockSymbol(stockSymbol: string): void {
    this._finnHubService
      .getQuote(stockSymbol)
      .pipe(take(1))
      .subscribe((quote) => {
        quote.stockSymbol = stockSymbol;
        this._quotes$.next([quote, ...this._quotes$.value]);
      });
  }

  removeQuoteByStockSymbol(stockSymbol: string): void {
    this._quotes$.next(
      this._quotes$
        .getValue()
        .filter((quote) => quote.stockSymbol !== stockSymbol)
    );
  }

  getQuoteByStockSymbol(stockSymbol: string): CompanyQuote | undefined {
    return this._quotes$.value.find(
      (quote) => quote.stockSymbol === stockSymbol
    );
  }
}
