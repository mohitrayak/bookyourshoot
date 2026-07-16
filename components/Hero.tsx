export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-24">

      <div className="max-w-5xl text-center">

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Find the Perfect
          <span className="block text-yellow-400">
            Photographer
          </span>
          For Every Moment
        </h1>

        <p className="mt-8 text-lg text-gray-400">
          Weddings • Pre Wedding • Baby Shoot • Maternity • Events • Fashion
        </p>

        {/* Search Box */}
        <div className="mt-12 rounded-3xl border border-zinc-700 bg-zinc-900 p-6">

          <div className="grid gap-4 md:grid-cols-4">

            <input
              type="text"
              placeholder="Search Photographer"
              className="rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-yellow-400"
            />

            <select className="rounded-xl border border-zinc-700 bg-black p-4">
              <option>Indore</option>
              <option>Ujjain</option>
              <option>Dewas</option>
            </select>

            <select className="rounded-xl border border-zinc-700 bg-black p-4">
              <option>Wedding</option>
              <option>Pre Wedding</option>
              <option>Baby Shoot</option>
              <option>Maternity</option>
            </select>

            <button className="rounded-xl bg-yellow-400 font-bold text-black transition hover:scale-105">
              Search
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}