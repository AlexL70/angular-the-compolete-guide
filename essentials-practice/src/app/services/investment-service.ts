import { Injectable } from "@angular/core";
import { InvestmentInput } from "../models/investment-input.model";
import { InvestmentResult } from "../models/investment-result.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  investmentResults?: InvestmentResult[] = undefined;
  CalculateInvestmentResults(data: InvestmentInput) {
    const annualData: InvestmentResult[] = [];
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.investmentResults = annualData;
  }
}
