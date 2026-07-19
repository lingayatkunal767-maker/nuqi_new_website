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
          className="flex-1 px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#57c0af] transition-colors"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-[#57c0af] hover:bg-[#48a894] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(87,192,175,0.5)] flex items-center justify-center gap-2 whitespace-nowrap"
        >
          Contact Us <span>→</span>
        </button>
      </div>
    </form>
  );
}
