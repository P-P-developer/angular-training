import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-sentiment-details-button',
  templateUrl: './social-sentiment-details-button.component.html',
  styleUrls: ['./social-sentiment-details-button.component.scss'],
})
export class SocialSentimentDetailsButtonComponent {
  @Input() displaySymbol: string = '';
}
