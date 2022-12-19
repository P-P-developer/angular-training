import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonthHelperService } from '@shared/services';
import {
  CompanyDetailsResult,
  CompanyQuote,
  InsiderSentimentResult,
} from '@shared/models';

@Injectable()
export class FinnhubService {
  constructor(
    private _monthHelper: MonthHelperService,
    private _http: HttpClient
  ) {}

  configUrl = 'https://finnhub.io/api/v1/';
  token = '&token=bu4f8kn48v6uehqi3cqg';

  // Search Asset
  searchAssets(search: string): Observable<CompanyDetailsResult> {
    return this._http.get<CompanyDetailsResult>(
      this.configUrl + 'search?q=' + search + this.token
    );
  }

  // Company quote
  getQuote(symbol: string): Observable<CompanyQuote> {
    return this._http.get<CompanyQuote>(
      this.configUrl + 'quote?symbol=' + symbol + this.token
    );
  }

  // Insider Sentiment
  getInsiderSentimentFromLastThreeMonths(symbol: string) {
    const now = new Date();
    // Get the first date of the month from 3 months ago
    const firstMonth = this._monthHelper.getFirstDateOfMonthFromCurrentYear(
      now.getMonth() - 3
    );
    // Get the first date of the current month
    const lastMonth = this._monthHelper.getFirstDateOfMonthFromCurrentYear(
      now.getMonth()
    );
    return this._http.get<InsiderSentimentResult>(
      this.configUrl +
        'stock/insider-sentiment?symbol=' +
        symbol +
        '&from=' +
        firstMonth +
        '&to=' +
        lastMonth +
        this.token
    );
  }
}
