"use client";

export function NewsletterForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Demo only — no backend wired up.
  }

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-2xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 px-6 py-4 bg-transparent border border-line rounded-full text-white placeholder:text-fg-muted focus:outline-none focus:border-[#e1c66a] transition-colors duration-300"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-[#e1c66a] hover:bg-[#c9ac52] text-black font-mono text-xs uppercase tracking-[0.15em] font-medium rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(225,198,106,0.5)] flex items-center justify-center gap-2 whitespace-nowrap"
        >
          Contact Us <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}
