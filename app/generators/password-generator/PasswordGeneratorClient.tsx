"use client";

import { useState } from "react";

function generatePassword(
  length: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean
) {
  let chars = "";

  if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%^&*()_+-={}[]<>?";

  if (!chars) return "";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const handleGenerate = () => {
    const pwd = generatePassword(
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    );
    setPassword(pwd);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">

        <p className="text-sm text-white/60">Free Online Generator</p>

        <h1 className="mt-2 text-4xl font-bold">
          Password Generator
        </h1>

        <p className="mt-4 text-white/70">
          Generate strong and secure passwords instantly. Choose the password
          length and character types to create a safe password for your
          accounts.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

          <label className="text-sm text-white/80">
            Password Length
          </label>

          <input
            type="number"
            value={length}
            min={4}
            max={64}
            onChange={(e) => setLength(Number(e.target.value))}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3"
          />

          <div className="mt-6 space-y-3">

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
              />
              Uppercase Letters
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
              />
              Lowercase Letters
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
              Numbers
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
              />
              Symbols
            </label>

          </div>

          <button
            onClick={handleGenerate}
            className="mt-6 rounded-xl bg-white px-6 py-3 text-black font-medium"
          >
            Generate Password
          </button>

          {password && (
            <div className="mt-6 rounded-xl border border-white/10 p-4">
              <p className="text-lg font-mono">{password}</p>

              <button
                onClick={handleCopy}
                className="mt-3 text-sm text-white/70 underline"
              >
                Copy
              </button>
            </div>
          )}
        </div>

      </section>
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Related Tools</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="/generators/random-number-generator"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              Random Number Generator
            </a>

            <a
              href="/generators/random-name-picker"
              className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
            >
              Random Name Picker
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}