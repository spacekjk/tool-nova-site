import type { ComponentType } from "react";
import { calculatorRegistry } from "./calculators";
import { textToolRegistry } from "./text-tools";
import { generatorRegistry } from "./generators";
import { converterRegistry } from "./converters";

const TOOL_COMPONENTS: Record<string, ComponentType> = {
  ...calculatorRegistry,
  ...textToolRegistry,
  ...generatorRegistry,
  ...converterRegistry,
};

export function getToolComponent(slug: string) {
  return TOOL_COMPONENTS[slug] ?? null;
}