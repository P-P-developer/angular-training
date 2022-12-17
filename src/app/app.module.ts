import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockEnterCardComponent } from './modules/stock-enter-card/stock-enter-card.component';
import { StockFormFieldComponent } from './modules/stock-enter-card/components/stock-form-field/stock-form-field.component';
import { StockTrackButtonComponent } from './modules/stock-enter-card/components/stock-track-button/stock-track-button.component';
import { StockSearchResultsComponent } from './modules/stock-search-results/stock-search-results.component';
import { StockSearchResultCardComponent } from './modules/stock-search-results/modules/stock-search-result-card/stock-search-result-card.component';
import { CompanyQuoteDetailsComponent } from './modules/stock-search-results/modules/stock-search-result-card/components/company-quote-details/company-quote-details.component';
import { CompanyDetailsComponent } from './modules/stock-search-results/modules/stock-search-result-card/components/company-details/company-details.component';
import { SocialSentimentDetailsButtonComponent } from './modules/stock-search-results/modules/stock-search-result-card/components/social-sentiment-details-button/social-sentiment-details-button.component';
import { FinnhubService } from '@shared/services';

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
  providers: [FinnhubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
