"use client";

import { useMemo, useState } from "react";

function normalizeText(text: string) {
  return text.replace(/\r\n/g, "\n").trim();
}

export default function TextComparePage() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");

  const comparison = useMemo(() => {
    const left = normalizeText(leftText);
    const right = normalizeText(rightText);

    const isSame = left === right;

    const leftLines = left ? left.split("\n") : [];
    const rightLines = right ? right.split("\n") : [];

    const maxLines = Math.max(leftLines.length, rightLines.length);

    const lineResults = Array.from({ length: maxLines }, (_, i) => {
      const leftLine = leftLines[i] ?? "";
      const rightLine = rightLines[i] ?? "";
      return {
        line: i + 1,
        left: leftLine,
        right: rightLine,
        same: leftLine === rightLine,
      };
    });

    return {
      isSame,
      lineResults,
    };
  }, [leftText, rightText]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <label className="mb-3 block text-sm font-medium text-white/80">
              Text A
            </label>

            <textarea
              rows={12}
              value={leftText}
              onChange={(e) => setLeftText(e.target.value)}
              placeholder="Paste the first text here..."
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <label className="mb-3 block text-sm font-medium text-white/80">
              Text B
            </label>

            <textarea
              rows={12}
              value={rightText}
              onChange={(e) => setRightText(e.target.value)}
              placeholder="Paste the second text here..."
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
            />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Comparison Result</h2>

          {!leftText && !rightText ? (
            <p className="mt-4 text-white/60">
              Paste two texts above to compare them.
            </p>
          ) : (
            <>
              <p className="mt-4 text-lg">
                Overall result:{" "}
                <span
                  className={
                    comparison.isSame
                      ? "font-semibold text-green-400"
                      : "font-semibold text-yellow-300"
                  }
                >
                  {comparison.isSame ? "Texts match" : "Texts are different"}
                </span>
              </p>

              <div className="mt-6 space-y-3">
                {comparison.lineResults.map((row) => (
                  <div
                    key={row.line}
                    className={`grid gap-3 rounded-2xl border p-4 md:grid-cols-2 ${
                      row.same
                        ? "border-white/10 bg-black/20"
                        : "border-yellow-400/20 bg-yellow-400/5"
                    }`}
                  >
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-wide text-white/45">
                        Line {row.line} · Text A
                      </p>
                      <p className="whitespace-pre-wrap break-words text-white/85">
                        {row.left || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 text-xs uppercase tracking-wide text-white/45">
                        Line {row.line} · Text B
                      </p>
                      <p className="whitespace-pre-wrap break-words text-white/85">
                        {row.right || "—"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">How this text compare tool works</h2>
          <div className="mt-4 space-y-4 text-white/70">
            <p>
              This tool compares two blocks of text line by line. If the content
              is the same, the result shows a match. If any line is different,
              the result highlights that row.
            </p>
            <p>
              It is useful for checking revisions, copied content, document
              drafts, and quick proofreading tasks.
            </p>
            <p>
              Paste your original text into one box and the edited or copied
              version into the other box to compare them instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium">
                How do I compare two texts online?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Paste one text into the first box and the other into the second
                box. The tool will compare them line by line.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Does this tool show whether the texts match exactly?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. It shows an overall match result and highlights lines that
                are different.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Is this text compare tool free?
              </h3>
              <p className="mt-2 leading-7 text-white/70">
                Yes. Tool Nova provides this text compare tool online for free
                with no sign-up required.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}