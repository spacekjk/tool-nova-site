"use client";

import { useState } from "react";

function encodeHTML(text: string) {
    try {
        const encoded = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        return {
            result: encoded,
            error: "",
        };
    } catch {
        return {
            result: "",
            error: "Failed to encode HTML.",
        };
    }
}

function decodeHTML(text: string) {
    try {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = text;

        return {
            result: textarea.value,
            error: "",
        };
    } catch {
        return {
            result: "",
            error: "Failed to decode HTML entities.",
        };
    }
}

export default function HtmlEncoderDecoderClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState("");

    const clearMessages = () => {
        setError("");
        setStatus("");
    };

    const handleEncode = () => {
        clearMessages();

        if (!input.trim()) {
            setError("Please enter text or HTML to encode.");
            setOutput("");
            return;
        }

        const { result, error } = encodeHTML(input);

        if (error) {
            setError(error);
            setOutput("");
            return;
        }

        setOutput(result);
        setStatus("HTML encoded successfully.");
    };

    const handleDecode = () => {
        clearMessages();

        if (!input.trim()) {
            setError("Please enter encoded HTML text to decode.");
            setOutput("");
            return;
        }

        const { result, error } = decodeHTML(input);

        if (error) {
            setError(error);
            setOutput("");
            return;
        }

        setOutput(result);
        setStatus("HTML decoded successfully.");
    };

    const handleSwap = () => {
        clearMessages();
        setInput(output);
        setOutput(input);
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setError("");
        setStatus("");
    };

    const handleSampleHtml = () => {
        setInput(`<div class="card">Tool Nova & "SEO Tools"</div>`);
        setOutput("");
        setError("");
        setStatus("Sample HTML inserted.");
    };

    const handleSampleEncoded = () => {
        setInput(
            "&lt;div class=&quot;card&quot;&gt;Tool Nova &amp; &quot;SEO Tools&quot;&lt;/div&gt;"
        );
        setOutput("");
        setError("");
        setStatus("Sample encoded HTML inserted.");
    };

    const handleCopyOutput = async () => {
        clearMessages();

        if (!output) {
            setError("There is no output to copy.");
            return;
        }

        await navigator.clipboard.writeText(output);
        setStatus("Output copied to clipboard.");
    };

    return (
        <>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <button
                        onClick={handleEncode}
                        className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                        HTML Encode
                    </button>

                    <button
                        onClick={handleDecode}
                        className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
                    >
                        HTML Decode
                    </button>

                    <button
                        onClick={handleSwap}
                        className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
                    >
                        Swap
                    </button>

                    <button
                        onClick={handleSampleHtml}
                        className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
                    >
                        Load HTML Sample
                    </button>

                    <button
                        onClick={handleSampleEncoded}
                        className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
                    >
                        Load Encoded Sample
                    </button>

                    <button
                        onClick={handleClear}
                        className="rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/40"
                    >
                        Clear
                    </button>
                </div>

                {error ? (
                    <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                        {error}
                    </div>
                ) : null}

                {!error && status ? (
                    <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300">
                        {status}
                    </div>
                ) : null}

                <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
                    <div className="flex flex-col">
                        <div className="mb-3 flex min-h-[40px] items-center justify-between">
                            <label className="text-sm font-medium text-white/80">Input</label>
                            <div />
                        </div>

                        <textarea
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setError("");
                                setStatus("");
                            }}
                            placeholder="Paste HTML or encoded HTML here..."
                            className="h-[340px] w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-white/25"
                        />
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-3 flex min-h-[40px] items-center justify-between">
                            <label className="text-sm font-medium text-white/80">Output</label>

                            <button
                                onClick={handleCopyOutput}
                                className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-black/40"
                            >
                                Copy Output
                            </button>
                        </div>

                        <textarea
                            value={output}
                            readOnly
                            placeholder="Encoded or decoded HTML will appear here."
                            className="h-[340px] w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">What this tool does</h2>
                <div className="mt-4 space-y-3 text-base leading-7 text-gray-300">
                    <p>
                        Encode HTML special characters into safe entities such as
                        <span className="px-1 text-white"> &amp;lt;</span>,
                        <span className="px-1 text-white">&amp;gt;</span>, and
                        <span className="px-1 text-white">&amp;amp;</span>.
                    </p>
                    <p>
                        Decode HTML entities back into readable text or HTML when you need to
                        inspect escaped content.
                    </p>
                    <p>
                        This is useful for developers, CMS editors, documentation, debugging,
                        and displaying raw HTML safely.
                    </p>
                </div>
            </div>
        </>
    );
}