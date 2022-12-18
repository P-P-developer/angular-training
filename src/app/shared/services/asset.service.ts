import { NotificationService } from './notificiation.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { CompanyDetails } from '@shared/models';
import { FinnhubService } from '@shared/services';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor(
    private _finnHubService: FinnhubService,
    private _notificationService: NotificationService
  ) {
    this._assets$ = new BehaviorSubject<CompanyDetails[]>([]);
  }

  private _assets$: BehaviorSubject<CompanyDetails[]>;
  public get assets$(): Observable<CompanyDetails[]> {
    return this._assets$.asObservable();
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
            return;
          }

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
