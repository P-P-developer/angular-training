import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CompanyDetailsResult, CompanyQuote } from '@shared/models';

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
}
