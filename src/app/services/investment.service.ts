import { Injectable } from '@angular/core';
import { InputInvestment } from '../models/input-investment.model';
import { InvestmentResult } from '../models/investment-result.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {

  calculateInvestment(input: InputInvestment): InvestmentResult[] {
    const investmentResults: InvestmentResult[] = [];
    let investmentValueCalculated = input.initialInvestment;

    for (let i = 0; i < input.duration; i++) {
      const yearCalculated = i + 1;
      const interestEarnedInYear = investmentValueCalculated * (input.expectedReturn / 100);
      investmentValueCalculated += interestEarnedInYear + input.annualInvestment;
      const totalInterest = investmentValueCalculated - input.annualInvestment * yearCalculated - input.initialInvestment;

      const investmentResult: InvestmentResult = {
        id: i + 1,
        year: yearCalculated,
        yearlyInterest: interestEarnedInYear,
        totalInterest: totalInterest,
        investedCapital: input.initialInvestment + input.annualInvestment * yearCalculated,
        investmentValue: investmentValueCalculated,
      };

      investmentResults.push(investmentResult);
    }
    return investmentResults;
  }
}
