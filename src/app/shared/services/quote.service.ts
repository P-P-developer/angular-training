import { NotificationService } from './notificiation.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { CompanyQuote } from '@shared/models';
import { FinnhubService } from '@shared/services';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(
    private _finnHubService: FinnhubService,
    private _notificationService: NotificationService
  ) {
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
      .subscribe(
        (quote) => {
          quote.stockSymbol = stockSymbol;
          this._quotes$.next([quote, ...this._quotes$.value]);
        },
        (error: HttpErrorResponse) => {
          this._notificationService.showNotification(
            `Could not get quotes for the stock symbol ${stockSymbol}! Reason \"${error.message}\"`
          );
        }
      );
  }

  removeQuoteByStockSymbol(stockSymbol: string): void {
    this._quotes$.next(
      this._quotes$
        .getValue()
        .filter((quote) => quote.stockSymbol !== stockSymbol)
    );
  }

  removeAllQuotes(): void {
    this._quotes$.next([]);
  }

  getQuoteByStockSymbol(stockSymbol: string): CompanyQuote | undefined {
    return this._quotes$.value.find(
      (quote) => quote.stockSymbol === stockSymbol
    );
  }
}
