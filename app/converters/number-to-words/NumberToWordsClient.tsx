"use client";

import { useMemo, useState } from "react";

const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function convertBelowThousand(num: number): string {
  let result = "";

  const hundred = Math.floor(num / 100);
  const rest = num % 100;

  if (hundred > 0) {
    result += `${ones[hundred]} hundred`;
    if (rest > 0) result += " ";
  }

  if (rest >= 10 && rest < 20) {
    result += teens[rest - 10];
  } else {
    const ten = Math.floor(rest / 10);
    const one = rest % 10;

    if (ten > 0) {
      result += tens[ten];
      if (one > 0) result += "-";
    }

    if (one > 0) {
      result += ones[one];
    }
  }

  return result.trim();
}

function numberToWords(num: number): string {
  if (num === 0) return "zero";

  const billions = Math.floor(num / 1_000_000_000);
  const millions = Math.floor((num % 1_000_000_000) / 1_000_000);
  const thousands = Math.floor((num % 1_000_000) / 1000);
  const remainder = num % 1000;

  const parts: string[] = [];

  if (billions > 0) parts.push(`${convertBelowThousand(billions)} billion`);
  if (millions > 0) parts.push(`${convertBelowThousand(millions)} million`);
  if (thousands > 0) parts.push(`${convertBelowThousand(thousands)} thousand`);
  if (remainder > 0) parts.push(convertBelowThousand(remainder));

  return parts.join(" ").trim();
}

export default function NumberToWordsPage() {
  const [input, setInput] = useState("");

  const result = useMemo(() => {
    if (!input) return null;

    const value = Number(input);

    if (
      Number.isNaN(value) ||
      !Number.isInteger(value) ||
      value < 0 ||
      value > 999_999_999_999
    ) {
      return "Please enter a whole number from 0 to 999,999,999,999.";
    }

    return numberToWords(value);
  }, [input]);

  const handleCopy = async () => {
    if (result && !result.startsWith("Please enter")) {
      await navigator.clipboard.writeText(result);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/60">Free Online Converter</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Number to Words Converter
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Convert numbers into English words instantly. This free number to
            words converter is useful for writing checks, documents, education,
            and learning how numbers are written in words.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <label className="mb-3 block text-sm font-medium text-white/80">
            Enter a whole number
          </label>

          <input
            type="number"
            step="1"
            min="0"
            max="999999999999"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 15432"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-white/25"
          />

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">Result</h2>
              <button
                onClick={handleCopy}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                Copy
              </button>
            </div>

            <p className="mt-4 text-2xl font-medium capitalize text-white/90">
              {result || "Enter a number to convert it into words."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">
            How this number to words converter works
          </h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This tool breaks a number into groups such as thousands, millions,
              and billions, then converts each part into English words.
            </p>
            <p>
              For example, the number 15,432 becomes:
              <span className="ml-1 font-medium text-white">
                fifteen thousand four hundred thirty-two
              </span>
            </p>
            <p>
              It is useful for writing numbers in documents, learning number
              words, and converting numeric values into readable text.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">
                Can this tool convert large numbers into words?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. This version supports whole numbers from 0 up to
                999,999,999,999.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Does this converter support decimals?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                No. This version is designed for whole numbers only.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this number to words converter free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this converter online for free with no
                sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}