import { Component, inject } from '@angular/core';
import { InvestmentService } from '../services/investment-service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})


export class InvestmentResultsComponent {
  private service = inject(InvestmentService);

  get results() {
    return this.service.investmentResults.asReadonly();
  }
}
