import type { ComponentType } from "react";

import AgeCalculatorClient from "@/app/calculators/age-calculator/AgeCalculatorClient";
import PercentageCalculatorClient from "@/app/calculators/percentage-calculator/PercentageCalculatorClient";
import BMICalculatorClient from "@/app/calculators/bmi-calculator/BMICalculatorClient";
import TimeCalculatorClient from "@/app/calculators/time-calculator/TimeCalculatorClient";
import LoanCalculatorClient from "@/app/calculators/loan-calculator/LoanCalculatorClient";
import DaysBetweenDatesClient from "@/app/calculators/days-between-dates/DaysBetweenDatesClient";
import DiscountCalculatorClient from "@/app/calculators/discount-calculator/DiscountCalculatorClient";
import TipCalculatorClient from "@/app/calculators/tip-calculator/TipCalculatorClient";
import VATCalculatorClient from "@/app/calculators/vat-calculator/VATCalculatorClient";
import CompoundInterestCalculatorClient from "@/app/calculators/compound-interest-calculator/CompoundInterestCalculatorClient";
import MortgageCalculatorClient from "@/app/calculators/mortgage-calculator/MortgageCalculatorClient";
import BusinessDaysCalculatorClient from "@/app/calculators/business-days-calculator/BusinessDaysCalculatorClient";
import SalaryCalculatorClient from "@/app/calculators/salary-calculator/SalaryCalculatorClient";
import CalorieCalculatorClient from "@/app/calculators/calorie-calculator/CalorieCalculatorClient";
import PercentageIncreaseCalculatorClient from "@/app/calculators/percentage-increase-calculator/PercentageIncreaseCalculatorClient";
import TimeDurationCalculatorClient from "@/app/calculators/time-duration-calculator/TimeDurationCalculatorClient";

export const calculatorRegistry: Record<string, ComponentType> = {
  "age-calculator": AgeCalculatorClient,
  "percentage-calculator": PercentageCalculatorClient,
  "bmi-calculator": BMICalculatorClient,
  "time-calculator": TimeCalculatorClient,
  "loan-calculator": LoanCalculatorClient,
  "days-between-dates": DaysBetweenDatesClient,
  "discount-calculator": DiscountCalculatorClient,
  "tip-calculator": TipCalculatorClient,
  "vat-calculator": VATCalculatorClient,
  "compound-interest-calculator": CompoundInterestCalculatorClient,
  "mortgage-calculator": MortgageCalculatorClient,
  "business-days-calculator": BusinessDaysCalculatorClient,
  "salary-calculator": SalaryCalculatorClient,
  "calorie-calculator": CalorieCalculatorClient,
  "percentage-increase-calculator": PercentageIncreaseCalculatorClient,
  "time-duration-calculator": TimeDurationCalculatorClient,
};