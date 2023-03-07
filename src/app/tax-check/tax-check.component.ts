import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-tax-check',
  templateUrl: './tax-check.component.html',
  styleUrls: ['./tax-check.component.scss']
})
export class TaxCheckComponent {
  salary = new FormControl<number | null>(null)

  hecs = false
  medicareLevy = false


  constructor(
    private _snackbar: MatSnackBar
  ) {

  }

  /**
 * Function that takes in all incomes of the user, filters out non-taxable ones, calculates the income tax and returns it in a given time period
 * @author Darren Meiring
 * @param incomes A list of all income budget items
 * @param targetPeriod The required time period that needs to be returned
 * @returns The amount of income tax paid based on taxable incomes and the supplied time period
 */
  calculateIncomeTax(income: number): number {
    let tax = 0;

    if (income >= 0 && income <= 18200) {
      tax = 0;
    } else if (income >= 18201 && income <= 45000) {
      tax = (income - 18200) * 0.19;
    } else if (income >= 45001 && income <= 120000) {
      tax = 5092 + (income - 45000) * 0.325;
    } else if (income >= 120001 && income <= 180000) {
      tax = 29467 + (income - 120000) * 0.37;
    } else {
      tax = 51667 + (income - 180000) * 0.45;
    }
    return tax;
  }

  /**
   * @author Darren Meiring
   * @param income
   * @returns The amount of hecs repayments paid
   */
  calculateHecsRepayment(income: number): number {

    let hecsRepayment = 0;

    if (income >= 0 && income <= 48361) {
      hecsRepayment = 0;
    }
    else if (income > 48361 && income <= 55836) {
      hecsRepayment = income * 0.01;
    }
    else if (income > 55836 && income <= 59186) {
      hecsRepayment = income * 0.02;
    }
    else if (income > 59186 && income <= 62738) {
      hecsRepayment = income * 0.025;
    }
    else if (income > 62738 && income <= 66502) {
      hecsRepayment = income * 0.03;
    }
    else if (income > 66502 && income <= 70492) {
      hecsRepayment = income * 0.035;
    }
    else if (income > 70492 && income <= 74722) {
      hecsRepayment = income * 0.04;
    }
    else if (income > 74722 && income <= 79206) {
      hecsRepayment = income * 0.045;
    }
    else if (income > 79206 && income <= 83958) {
      hecsRepayment = income * 0.05;
    }
    else if (income > 83958 && income <= 88996) {
      hecsRepayment = income * 0.055;
    }
    else if (income > 88996 && income <= 94336) {
      hecsRepayment = income * 0.06;
    }
    else if (income > 94336 && income <= 99996) {
      hecsRepayment = income * 0.065;
    }
    else if (income > 99996 && income <= 105996) {
      hecsRepayment = income * 0.07;
    }
    else if (income > 105996 && income <= 112355) {
      hecsRepayment = income * 0.075;
    }
    else if (income > 112355 && income <= 119097) {
      hecsRepayment = income * 0.08;
    }
    else if (income > 119097 && income <= 126243) {
      hecsRepayment = income * 0.085;
    }
    else if (income > 126243 && income <= 133818) {
      hecsRepayment = income * 0.09;
    }
    else if (income > 133818 && income <= 141847) {
      hecsRepayment = income * 0.095;
    }
    else if (income > 141847) {
      hecsRepayment = income * 0.10;
    }

    return hecsRepayment;
  }

  /**
     *
     * @author Darren Meiring
     * @param income
     * @returns The amount of medicare levy paid based on taxable income
     */
  calculateMedicareLevy(income: number): number {
    return income * 0.02
  }

  /**
   *
   * @author Darren Meiring
   * @param income
   * @param hecs
   * @param medicareLevy
   * @returns The total amount of tax to be paid
   */
  calculateTotalTax(income: number, hecs: boolean, medicareLevy: boolean): number {
    let val = this.calculateIncomeTax(income);
    if (hecs) {
      val = val + this.calculateHecsRepayment(income)
    }
    if (medicareLevy) {
      val = val + this.calculateMedicareLevy(income);
    }
    return val;
  }

  openSnackbar() {
    this._snackbar.open("Copied to clipboard 📋", 'Dismiss', {
      duration: 1000
    })
  }


}
