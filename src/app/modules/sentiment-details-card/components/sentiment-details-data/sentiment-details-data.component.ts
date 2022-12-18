import { Component } from '@angular/core';

import { InsiderSentimentService, MonthHelperService } from '@shared/services';

@Component({
  selector: 'app-sentiment-details-data',
  templateUrl: './sentiment-details-data.component.html',
  styleUrls: ['./sentiment-details-data.component.scss'],
})
export class SentimentDetailsDataComponent {
  constructor(
    public monthHelperService: MonthHelperService,
    public insiderSentimentService: InsiderSentimentService
  ) {}
}
