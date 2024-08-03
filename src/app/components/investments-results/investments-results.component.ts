import { Component, Input } from '@angular/core';
import { InvestmentResult } from '../../models/investment-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [ CurrencyPipe ],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {
  @Input()investmentResults!: InvestmentResult[];
}
