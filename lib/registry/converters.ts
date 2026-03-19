import type { ComponentType } from "react";

import KgToLbsClient from "@/app/converters/kg-to-lbs/KgToLbsClient";
import NumberToWordsClient from "@/app/converters/number-to-words/NumberToWordsClient";
import CmToInchesClient from "@/app/converters/cm-to-inches/CmToInchesClient";
import CelsiusToFahrenheitClient from "@/app/converters/celsius-to-fahrenheit/CelsiusToFahrenheitClient";

export const converterRegistry: Record<string, ComponentType> = {
  "kg-to-lbs": KgToLbsClient,
  "number-to-words": NumberToWordsClient,
  "cm-to-inches": CmToInchesClient,
  "celsius-to-fahrenheit": CelsiusToFahrenheitClient,
};