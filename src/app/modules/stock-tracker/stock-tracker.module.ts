import { StockTrackerRoutingModule } from './stock-tracker-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockEnterCardComponent } from './components/stock-enter-card/stock-enter-card.component';
import { StockFormFieldComponent } from './components/stock-enter-card/components/stock-form-field/stock-form-field.component';
import { StockTrackButtonComponent } from './components/stock-enter-card/components/stock-track-button/stock-track-button.component';
import { StockSearchResultsComponent } from './components/stock-search-results/stock-search-results.component';
import { StockSearchResultCardComponent } from './components/stock-search-results/components/stock-search-result-card/stock-search-result-card.component';
import { CompanyQuoteDetailsComponent } from './components/stock-search-results/components/stock-search-result-card/components/company-quote-details/company-quote-details.component';
import { SocialSentimentDetailsButtonComponent } from './components/stock-search-results/components/stock-search-result-card/components/social-sentiment-details-button/social-sentiment-details-button.component';
import { RemoveSearchResultCardButtonComponent } from './components/stock-search-results/components/stock-search-result-card/components/remove-search-result-card-button/remove-search-result-card-button.component';
import { SentimentDetailsCardComponent } from './components/sentiment-details-card/sentiment-details-card.component';
import { StockTrackerComponent } from './stock-tracker.component';
import { ArrowComponent } from './shared-components/arrow/arrow.component';
import { NoDetailsComponent } from 'src/app/modules/stock-tracker/shared-components/no-details/no-details.component';
import { SentimentDetailsDataComponent } from './components/sentiment-details-card/components/sentiment-details-data/sentiment-details-data.component';
import { BackButtonComponent } from './components/sentiment-details-card/components/back-button/back-button.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './shared-components/company-details/company-details.component';

@NgModule({
  declarations: [
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
    NoDetailsComponent,
  ],
  imports: [
    StockTrackerRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
})
export class StockTrackerModule {}
