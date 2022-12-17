import { Component, Input } from '@angular/core';
import { CompanyQuote } from '@shared/models';

@Component({
  selector: 'app-company-quote-details',
  templateUrl: './company-quote-details.component.html',
  styleUrls: ['./company-quote-details.component.scss'],
})
export class CompanyQuoteDetailsComponent {
  @Input() companyQuote!: CompanyQuote;
}
