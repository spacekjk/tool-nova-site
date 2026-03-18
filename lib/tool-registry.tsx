// lib/tool-registry.tsx
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

import WordCounterClient from "@/app/text-tools/word-counter/WordCounterClient";
import CharacterCounterClient from "@/app/text-tools/character-counter/CharacterCounterClient";
import CaseConverterClient from "@/app/text-tools/case-converter/CaseConverterClient";
import RemoveLineBreaksClient from "@/app/text-tools/remove-line-breaks/RemoveLineBreaksClient";
import TextCompareClient from "@/app/text-tools/text-compare/TextCompareClient";
import JsonFormatterClient from "@/app/text-tools/json-formatter/JsonFormatterClient";
import ReverseTextClient from "@/app/text-tools/reverse-text/ReverseTextClient";
import SortTextClient from "@/app/text-tools/sort-text/SortTextClient";
import RemoveDuplicatesClient from "@/app/text-tools/remove-duplicates/RemoveDuplicatesClient";
import Base64EncoderDecoderClient from "@/app/text-tools/base64-encoder-decoder/Base64EncoderDecoderClient";
import RemoveExtraSpacesClient from "@/app/text-tools/remove-extra-spaces/RemoveExtraSpacesClient";
import UrlEncoderDecoderClient from "@/app/text-tools/url-encoder-decoder/UrlEncoderDecoderClient";

import PasswordGeneratorClient from "@/app/generators/password-generator/PasswordGeneratorClient";
import RandomNumberGeneratorClient from "@/app/generators/random-number-generator/RandomNumberGeneratorClient";
import RandomNamePickerClient from "@/app/generators/random-name-picker/RandomNamePickerClient";
import UUIDGeneratorClient from "@/app/generators/uuid-generator/UUIDGeneratorClient";
import SlugGeneratorClient from "@/app/generators/slug-generator/SlugGeneratorClient";

import KgToLbsClient from "@/app/converters/kg-to-lbs/KgToLbsClient";
import NumberToWordsClient from "@/app/converters/number-to-words/NumberToWordsClient";
import CmToInchesClient from "@/app/converters/cm-to-inches/CmToInchesClient";
import CelsiusToFahrenheitClient from "@/app/converters/celsius-to-fahrenheit/CelsiusToFahrenheitClient";

const TOOL_COMPONENTS: Record<string, ComponentType> = {
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

  "word-counter": WordCounterClient,
  "character-counter": CharacterCounterClient,
  "case-converter": CaseConverterClient,
  "remove-line-breaks": RemoveLineBreaksClient,
  "text-compare": TextCompareClient,
  "json-formatter": JsonFormatterClient,
  "reverse-text": ReverseTextClient,
  "sort-text": SortTextClient,
  "remove-duplicates": RemoveDuplicatesClient,
  "base64-encoder-decoder": Base64EncoderDecoderClient,
  "remove-extra-spaces": RemoveExtraSpacesClient,
  "url-encoder-decoder": UrlEncoderDecoderClient,

  "password-generator": PasswordGeneratorClient,
  "random-number-generator": RandomNumberGeneratorClient,
  "random-name-picker": RandomNamePickerClient,
  "uuid-generator": UUIDGeneratorClient,
  "slug-generator": SlugGeneratorClient,

  "kg-to-lbs": KgToLbsClient,
  "number-to-words": NumberToWordsClient,
  "cm-to-inches": CmToInchesClient,
  "celsius-to-fahrenheit": CelsiusToFahrenheitClient,
};

export function getToolComponent(slug: string) {
  return TOOL_COMPONENTS[slug] ?? null;
}