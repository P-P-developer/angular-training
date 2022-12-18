import { InsiderSentimentResult } from '@shared/models';
import { FinnhubService } from '@shared/services';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InsiderSentimentService {
  constructor(private _finnhubService: FinnhubService) {
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
      .subscribe((insiderSentiments) => {
        this._insiderSentiments$.next(insiderSentiments);
      });
  }
}
