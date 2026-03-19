import type { ComponentType } from "react";

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
import HtmlEncoderDecoderClient from "@/app/text-tools/html-encoder-decoder/HtmlEncoderDecoderClient";


export const textToolRegistry: Record<string, ComponentType> = {
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
  "html-encoder-decoder": HtmlEncoderDecoderClient,
};