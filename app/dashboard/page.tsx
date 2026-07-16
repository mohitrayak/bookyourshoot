import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <h1 className="text-3xl font-bold">
            Photographer Dashboard
          </h1>

          <Link
            href="/"
            className="rounded-xl border border-yellow-400 px-5 py-2 transition hover:bg-yellow-400 hover:text-black"
          >
            Back to Website
          </Link>

        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">

        {/* Sidebar */}

        <aside className="w-72 border-r border-zinc-800 p-6">

          <nav className="space-y-3">

            <button className="w-full rounded-xl bg-yellow-400 px-4 py-3 text-left font-bold text-black">
              📊 Dashboard
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
              👤 My Profile
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
              🖼 Portfolio
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
              💰 Packages
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
              📅 Availability
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
              ⭐ Reviews
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left hover:bg-zinc-900">
              ⚙ Settings
            </button>

          </nav>

        </aside>

        {/* Main Content */}

        <section className="flex-1 p-10">

          <h2 className="text-4xl font-bold">
            My Profile
          </h2>

          <p className="mt-3 text-gray-400">
            Update your profile information.
          </p>

          <form className="mt-10 max-w-3xl space-y-6">

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Studio Name
              </label>

              <input
                type="text"
                placeholder="Rayak Photography"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                City
              </label>

              <input
                type="text"
                placeholder="Indore"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Category
              </label>

              <input
                type="text"
                placeholder="Wedding Photographer"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Starting Price
              </label>

              <input
                type="text"
                placeholder="₹50,000"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                About
              </label>

              <textarea
                rows={6}
                placeholder="Tell clients about yourself..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Save Profile
            </button>

          </form>

        </section>

      </div>

    </main>
  );
}