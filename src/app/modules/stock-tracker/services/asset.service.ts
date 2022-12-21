import { NotificationService } from './notificiation.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';
import { FinnhubService } from './finnhub.service';
import { CompanyDetails } from 'src/app/modules/stock-tracker/models';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor(
    private _finnHubService: FinnhubService,
    private _notificationService: NotificationService
  ) {
    this._assets$ = new BehaviorSubject<CompanyDetails[]>([]);
    this._assetsFound$ = new Subject<void>();
  }

  private _assets$: BehaviorSubject<CompanyDetails[]>;
  public get assets$(): Observable<CompanyDetails[]> {
    return this._assets$.asObservable();
  }

  private _assetsFound$: Subject<void>;
  public get assetsFound$(): Observable<void> {
    return this._assetsFound$.asObservable();
  }

  loadAssetForStockSymbol(stockSymbol: string): void {
    this._finnHubService
      .searchAssets(stockSymbol)
      .pipe(take(1))
      .subscribe(
        (assets) => {
          const assetToShow = assets.result.find(
            (asset) => asset.symbol === stockSymbol
          );

          if (!assetToShow) {
            this._notificationService.showNotification(
              `Could not find any stock with the symbol ${stockSymbol}!`
            );
            return;
          }

          this._assetsFound$.next();
          this._assets$.next([assetToShow, ...this._assets$.value]);
        },
        (error: HttpErrorResponse) => {
          this._notificationService.showNotification(
            `Could not get assets for the stock symbol ${stockSymbol}! Reason \"${error.message}\"`
          );
        }
      );
  }

  removeAssetByStockSymbol(stockSymbol: string): void {
    this._assets$.next(
      this._assets$.getValue().filter((asset) => asset.symbol !== stockSymbol)
    );
  }

  removeAllAssets(): void {
    this._assets$.next([]);
  }
}
