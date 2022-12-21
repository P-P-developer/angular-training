import { Component, Input } from '@angular/core';
import { CompanyDetails } from 'src/app/modules/stock-tracker/models';

@Component({
  selector: 'st-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent {
  @Input() companyDetails: CompanyDetails = {
    description: '',
    displaySymbol: '',
    symbol: '',
    type: '',
  };
}
