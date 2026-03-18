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

    <section className="mx-auto max-w-4xl px-6">

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



  );
}