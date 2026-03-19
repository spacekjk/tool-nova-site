# Tool Nova

Tool Nova is a Next.js-based online utility site that provides fast, simple, and SEO-friendly tools across multiple categories such as calculators, text tools, generators, and converters.

## Features

- Built with Next.js App Router
- Structured tool registry system
- Category-based routing
- Shared SEO metadata utilities
- FAQ and structured data support
- Reusable UI components for cards and grids
- Easily extensible tool architecture

## Categories

Current categories include:

- Calculators
- Text Tools
- Generators
- Converters

## Project Structure

```bash
app/
  page.tsx
  [category]/
    page.tsx
    [slug]/
      page.tsx
  calculators/
  text-tools/
  generators/
  converters/

components/
  CategorySection.tsx
  FAQSchema.tsx
  RelatedTools.tsx
  ToolCard.tsx
  ToolGrid.tsx
  ToolSchema.tsx

lib/
  registry/
    index.ts
    calculators.ts
    text-tools.ts
    generators.ts
    converters.ts
  tools/
    index.ts
    types.ts
    calculators.ts
    text-tools.ts
    generators.ts
    converters.ts
  seo.ts