import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentInput } from '../../models/investment-input.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment: InvestmentInput = { initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration : 0  };
  @Output() calculate = new EventEmitter<InvestmentInput>();

  onSubmit() {
    this.calculate.emit(this.enteredInitialInvestment);
  }
}
