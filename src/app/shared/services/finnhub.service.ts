import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import {
  CompanyDetailsResult,
  CompanyQuote,
  InsiderSentimentResult,
} from '@shared/models';

@Injectable()
export class FinnhubService {
  constructor(private _http: HttpClient) {}

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
    const lastmonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstMonth = new Date(now.getFullYear(), now.getMonth() - 3, 1);
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedFirstMonth = datepipe.transform(firstMonth, 'YYYY-MM-dd');
    let formattedLastMonth = datepipe.transform(lastmonth, 'YYYY-MM-dd');
    return this._http.get<InsiderSentimentResult>(
      this.configUrl +
        'stock/insider-sentiment?symbol=' +
        symbol +
        '&from=' +
        formattedFirstMonth +
        '&to=' +
        formattedLastMonth +
        this.token
    );
  }
}
