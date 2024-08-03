import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { InvestmentsResultsComponent } from "./components/investments-results/investments-results.component";
import { InputInvestment } from './models/input-investment.model';
import { InvestmentService } from './services/investment.service';
import { InvestmentResult } from './models/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCalculated: boolean = false;
  investmentResults!: InvestmentResult[];

  constructor(private investmentService: InvestmentService) {

  }

  onCalculateListening(input: InputInvestment) {
    this.isCalculated = true;
    this.investmentResults = this.investmentService.calculateInvestment(input);
  }
}
