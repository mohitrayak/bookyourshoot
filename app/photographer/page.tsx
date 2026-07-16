import Image from "next/image";

export default function PhotographerPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Cover Image */}
      <section className="relative h-[350px] w-full">
        <Image
          src="/images/photographers/photographer1.jpg"
          alt="Cover"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Profile Section */}
      <section className="relative mx-auto -mt-24 max-w-6xl px-6">

        <div className="flex flex-col items-center md:flex-row md:items-end md:gap-8">

          {/* Profile Photo */}
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-yellow-400">
            <Image
              src="/images/photographers/photographer1.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="mt-6 md:mt-0">

            <h1 className="text-4xl font-bold">
              Rayak Photography
            </h1>

            <p className="mt-2 text-yellow-400">
              ⭐ 4.9 • ✔ Verified Photographer
            </p>

            <p className="mt-2 text-gray-400">
              📍 Indore, Madhya Pradesh
            </p>

          </div>

        </div>

      </section>
{/* About Section */}

<section className="mx-auto mt-16 max-w-6xl px-6">

  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

    <h2 className="text-3xl font-bold">
      About Photographer
    </h2>

    <p className="mt-5 leading-8 text-gray-300">
      Rayak Photography is a premium wedding photography studio based in
      Indore. We specialize in Weddings, Pre-Weddings, Maternity, Baby
      Shoots, Fashion and Cinematic Films.

      <br /><br />

      Our goal is to capture timeless memories with creativity and emotion.
      Every wedding tells a unique story, and we love turning those moments
      into unforgettable memories.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">

      <button className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:scale-105 transition">
        📅 Book Now
      </button>

      <button className="rounded-xl border border-yellow-400 px-8 py-4 hover:bg-yellow-400 hover:text-black transition">
        📞 Contact
      </button>

      <button className="rounded-xl border border-zinc-700 px-8 py-4 hover:border-yellow-400 transition">
        ❤️ Save Photographer
      </button>

    </div>

  </div>

</section>
{/* Portfolio */}

<section className="mx-auto mt-16 max-w-6xl px-6">

  <h2 className="mb-8 text-3xl font-bold">
    Portfolio
  </h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
      <Image
        src="/images/photographers/photographer1.jpg"
        alt="Portfolio 1"
        fill
        className="object-cover transition duration-500 hover:scale-110"
      />
    </div>

    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
      <Image
        src="/images/photographers/photographer2.jpg"
        alt="Portfolio 2"
        fill
        className="object-cover transition duration-500 hover:scale-110"
      />
    </div>

    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
      <Image
        src="/images/photographers/photographer3.jpg"
        alt="Portfolio 3"
        fill
        className="object-cover transition duration-500 hover:scale-110"
      />
    </div>

  </div>

</section>
{/* Packages */}

<section className="mx-auto mt-20 max-w-6xl px-6">

  <h2 className="mb-10 text-3xl font-bold">
    Wedding Packages
  </h2>

  <div className="grid gap-8 md:grid-cols-3">

    {/* Basic */}
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h3 className="text-2xl font-bold">Basic</h3>

      <p className="mt-4 text-4xl font-bold text-yellow-400">
        ₹25,000
      </p>

      <ul className="mt-8 space-y-3 text-gray-300">
        <li>✔ 1 Photographer</li>
        <li>✔ 200 Edited Photos</li>
        <li>✔ Basic Album</li>
        <li>✔ Online Gallery</li>
      </ul>

      <button className="mt-8 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black hover:scale-105 transition">
        Choose Plan
      </button>
    </div>

    {/* Premium */}
    <div className="rounded-3xl border-2 border-yellow-400 bg-zinc-900 p-8">

      <span className="rounded-full bg-yellow-400 px-4 py-1 text-black font-bold">
        Most Popular
      </span>

      <h3 className="mt-5 text-2xl font-bold">
        Premium
      </h3>

      <p className="mt-4 text-4xl font-bold text-yellow-400">
        ₹55,000
      </p>

      <ul className="mt-8 space-y-3 text-gray-300">
        <li>✔ 2 Photographers</li>
        <li>✔ Drone Coverage</li>
        <li>✔ Cinematic Film</li>
        <li>✔ Premium Album</li>
        <li>✔ Instagram Reel</li>
      </ul>

      <button className="mt-8 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black hover:scale-105 transition">
        Choose Plan
      </button>

    </div>

    {/* Luxury */}

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h3 className="text-2xl font-bold">
        Luxury
      </h3>

      <p className="mt-4 text-4xl font-bold text-yellow-400">
        ₹90,000
      </p>

      <ul className="mt-8 space-y-3 text-gray-300">
        <li>✔ Team of 4</li>
        <li>✔ Drone</li>
        <li>✔ Cinematic Film</li>
        <li>✔ LED Wall Coverage</li>
        <li>✔ Same Day Edit</li>
        <li>✔ Premium Album</li>
      </ul>

      <button className="mt-8 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black hover:scale-105 transition">
        Choose Plan
      </button>

    </div>

  </div>

</section>
{/* Reviews */}

<section className="mx-auto mt-20 max-w-6xl px-6 pb-20">

  <div className="flex items-center justify-between">

    <div>
      <h2 className="text-3xl font-bold">
        Client Reviews
      </h2>

      <p className="mt-2 text-gray-400">
        127 Reviews • ⭐ 4.9 Average Rating
      </p>
    </div>

    <button className="rounded-xl border border-yellow-400 px-6 py-3 hover:bg-yellow-400 hover:text-black transition">
      Write Review
    </button>

  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-2">

    {/* Review 1 */}

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h3 className="text-xl font-bold">
        Rahul Sharma
      </h3>

      <p className="mt-2 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </p>

      <p className="mt-4 text-gray-300 leading-7">
        Amazing experience. Every moment of our wedding was beautifully captured.
        Highly recommended for premium weddings.
      </p>

    </div>

    {/* Review 2 */}

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h3 className="text-xl font-bold">
        Priya Patel
      </h3>

      <p className="mt-2 text-yellow-400">
        ⭐⭐⭐⭐⭐
      </p>

      <p className="mt-4 text-gray-300 leading-7">
        The team was very professional. The cinematic film and album quality
        exceeded our expectations.
      </p>

    </div>

  </div>

</section>
    </main>
  );
}