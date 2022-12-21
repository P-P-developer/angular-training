import { Component } from '@angular/core';

import { MonthHelperService, NumberHelperService } from '@shared/services';
import { InsiderSentimentService } from 'src/app/modules/stock-tracker/services';

@Component({
  selector: 'app-sentiment-details-data',
  templateUrl: './sentiment-details-data.component.html',
  styleUrls: ['./sentiment-details-data.component.scss'],
})
export class SentimentDetailsDataComponent {
  constructor(
    public monthHelperService: MonthHelperService,
    public insiderSentimentService: InsiderSentimentService,
    public numberHelperService: NumberHelperService
  ) {}
}
