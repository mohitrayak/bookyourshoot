export default function Categories() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold">
          Popular <span className="text-yellow-400">Categories</span>
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Find the perfect photographer for every occasion.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400">
            <div className="text-5xl">💍</div>
            <h3 className="mt-6 text-2xl font-semibold">Wedding</h3>
            <p className="mt-2 text-gray-400">
              Capture your special day with top wedding photographers.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400">
            <div className="text-5xl">❤️</div>
            <h3 className="mt-6 text-2xl font-semibold">Pre Wedding</h3>
            <p className="mt-2 text-gray-400">
              Beautiful pre-wedding moments captured forever.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400">
            <div className="text-5xl">👶</div>
            <h3 className="mt-6 text-2xl font-semibold">Baby Shoot</h3>
            <p className="mt-2 text-gray-400">
              Cute memories of your little one's early days.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400">
            <div className="text-5xl">🤰</div>
            <h3 className="mt-6 text-2xl font-semibold">Maternity</h3>
            <p className="mt-2 text-gray-400">
              Celebrate your motherhood journey beautifully.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400">
            <div className="text-5xl">🎉</div>
            <h3 className="mt-6 text-2xl font-semibold">Events</h3>
            <p className="mt-2 text-gray-400">
              Professional coverage for every celebration.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-400">
            <div className="text-5xl">👗</div>
            <h3 className="mt-6 text-2xl font-semibold">Fashion</h3>
            <p className="mt-2 text-gray-400">
              Stunning fashion and portfolio photography.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}