export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="mb-3 text-sm text-white/60">Tool Nova</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Terms of Use
        </h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/75">
          <p>
            Tool Nova provides free online tools and calculators for general
            informational and practical use.
          </p>

          <p>
            We make reasonable efforts to keep the tools accurate and available,
            but we do not guarantee uninterrupted access, complete accuracy, or
            suitability for any specific purpose.
          </p>

          <p>
            Users are responsible for how they use the results provided by Tool
            Nova. The site should not be considered legal, financial, medical,
            or professional advice.
          </p>

          <p>
            By using Tool Nova, you agree to use the site lawfully and
            responsibly.
          </p>

          <p>
            We may update or change these terms at any time by posting revised
            terms on this page.
          </p>
        </div>
      </section>
    </main>
  );
}