import { NotificationService } from './notificiation.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { InsiderSentimentResult } from '@shared/models';
import { FinnhubService } from '@shared/services';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InsiderSentimentService {
  constructor(
    private _finnhubService: FinnhubService,
    private _notificationService: NotificationService
  ) {
    this._insiderSentiments$ = new BehaviorSubject<
      InsiderSentimentResult | undefined
    >(undefined);
  }

  private _insiderSentiments$: BehaviorSubject<
    InsiderSentimentResult | undefined
  >;
  public get insiderSentiments$(): Observable<
    InsiderSentimentResult | undefined
  > {
    return this._insiderSentiments$.asObservable();
  }

  loadInsiderSentimentsOfLastThreeMonthsByStockSymbol(
    stockSymbol: string
  ): void {
    this._finnhubService
      .getInsiderSentimentFromLastThreeMonths(stockSymbol)
      .pipe(take(1))
      .subscribe(
        (insiderSentimentsResult) => {
          if (
            insiderSentimentsResult &&
            insiderSentimentsResult.data.length < 3
          ) {
            var lastElement =
              insiderSentimentsResult.data[
                insiderSentimentsResult.data.length - 1
              ];

            var currentMonth = lastElement.month;

            for (
              let index = insiderSentimentsResult.data.length;
              index < 3;
              index++
            ) {
              insiderSentimentsResult.data.push({
                change: undefined,
                month: currentMonth! + 1,
                mspr: undefined,
                symbol: stockSymbol,
                year: undefined,
              });
              currentMonth!++;
            }
          }
          this._insiderSentiments$.next(insiderSentimentsResult);
        },
        (error: HttpErrorResponse) => {
          this._notificationService.showNotification(
            `Could not get insider sentiment details for the stock symbol ${stockSymbol}! Reason \"${error.message}\"`
          );
        }
      );
  }
}
