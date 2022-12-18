import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockEnterCardComponent } from './modules/stock-enter-card/stock-enter-card.component';
import { StockFormFieldComponent } from './modules/stock-enter-card/components/stock-form-field/stock-form-field.component';
import { StockTrackButtonComponent } from './modules/stock-enter-card/components/stock-track-button/stock-track-button.component';
import { StockSearchResultsComponent } from './modules/stock-search-results/stock-search-results.component';
import { StockSearchResultCardComponent } from './modules/stock-search-results/modules/stock-search-result-card/stock-search-result-card.component';
import { CompanyQuoteDetailsComponent } from './modules/stock-search-results/modules/stock-search-result-card/components/company-quote-details/company-quote-details.component';
import { SocialSentimentDetailsButtonComponent } from './modules/stock-search-results/modules/stock-search-result-card/components/social-sentiment-details-button/social-sentiment-details-button.component';
import { FinnhubService } from '@shared/services';
import { RemoveSearchResultCardButtonComponent } from './modules/stock-search-results/modules/stock-search-result-card/components/remove-search-result-card-button/remove-search-result-card-button.component';
import { LoadingInterceptor } from './loading.interceptor';
import { SentimentDetailsCardComponent } from './modules/sentiment-details-card/sentiment-details-card.component';
import { CompanyDetailsComponent } from '@shared/components/company-details/company-details.component';
import { StockTrackerComponent } from './modules/stock-tracker/stock-tracker.component';
import { ArrowComponent } from './shared/components/arrow/arrow.component';
import { BackButtonComponent } from './modules/sentiment-details-card/components/back-button/back-button.component';
import { SentimentDetailsDataComponent } from './modules/sentiment-details-card/components/sentiment-details-data/sentiment-details-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StockEnterCardComponent,
    StockFormFieldComponent,
    StockTrackButtonComponent,
    StockSearchResultsComponent,
    StockSearchResultCardComponent,
    CompanyQuoteDetailsComponent,
    CompanyDetailsComponent,
    SocialSentimentDetailsButtonComponent,
    RemoveSearchResultCardButtonComponent,
    SentimentDetailsCardComponent,
    StockTrackerComponent,
    ArrowComponent,
    BackButtonComponent,
    SentimentDetailsDataComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [
    FinnhubService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
