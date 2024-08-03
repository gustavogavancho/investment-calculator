import { Component, EventEmitter, Output } from '@angular/core';
import { InputInvestment } from '../../models/input-investment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  inputInvestment: InputInvestment = { initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration : 0  };
  @Output() calculate = new EventEmitter<InputInvestment>();

  onCalculate() {
    this.calculate.emit(this.inputInvestment);
  }
}
