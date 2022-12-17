import { Component, Input } from '@angular/core';
import { CompanyDetails } from '@shared/models/companyDetails';

@Component({
  selector: 'app-company-details',
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
