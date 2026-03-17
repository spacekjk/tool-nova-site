export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="mb-3 text-sm text-white/60">Tool Nova</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/75">
          <p>
            Tool Nova respects your privacy. We do not require account creation
            to use our tools, and we aim to minimize personal data collection.
          </p>

          <p>
            Like many websites, Tool Nova may collect limited technical data
            such as browser type, device information, and general usage
            analytics to improve performance and user experience.
          </p>

          <p>
            Tool Nova may use third-party services, including analytics and
            advertising providers, which may use cookies or similar
            technologies.
          </p>

          <p>
            We do not sell personal information. Any future changes to this
            policy will be reflected on this page.
          </p>

          <p>
            By using Tool Nova, you agree to this Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}