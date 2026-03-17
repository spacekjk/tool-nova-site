export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="mb-3 text-sm text-white/60">Tool Nova</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Contact
        </h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/75">
          <p>
            If you have feedback, suggestions, bug reports, or tool requests,
            you can contact Tool Nova through the email address below.
          </p>

          <p>
            Email: <span className="font-medium text-white">archisanta@gmail.com</span>
          </p>

          <p>
            We welcome suggestions for new calculators, converters, generators,
            and text tools.
          </p>
        </div>
      </section>
    </main>
  );
}