import type { ComponentType } from "react";

import KoreanNameGeneratorClient from "@/app/generators/korean-name-generator/KoreanNameGeneratorClient";
import PasswordGeneratorClient from "@/app/generators/password-generator/PasswordGeneratorClient";
import RandomNumberGeneratorClient from "@/app/generators/random-number-generator/RandomNumberGeneratorClient";
import RandomNamePickerClient from "@/app/generators/random-name-picker/RandomNamePickerClient";
import UUIDGeneratorClient from "@/app/generators/uuid-generator/UUIDGeneratorClient";
import SlugGeneratorClient from "@/app/generators/slug-generator/SlugGeneratorClient";
import KoreanZodiacCalculatorClient from "@/app/generators/korean-zodiac-calculator/KoreanZodiacCalculatorClient";

export const generatorRegistry: Record<string, ComponentType> = {
  "korean-name-generator": KoreanNameGeneratorClient,
  "password-generator": PasswordGeneratorClient,
  "random-number-generator": RandomNumberGeneratorClient,
  "random-name-picker": RandomNamePickerClient,
  "uuid-generator": UUIDGeneratorClient,
  "slug-generator": SlugGeneratorClient,
  "korean-zodiac-calculator":   KoreanZodiacCalculatorClient,
};
