import Link from "next/link";
import Image from "next/image";
type Photographer = {
  id: string;
  name: string;
  city: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  verified: boolean;
  about: string;
};

export default function FeaturedPhotographers({
  photographers,
}: {
  photographers: Photographer[];
}) {

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold">
          Featured <span className="text-yellow-400">Photographers</span>
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Discover top-rated photographers near you.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {photographers.map((photographer, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-yellow-400"
            >
              {/* Placeholder Image */}
<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-500/20">
  <Image
    src={photographer.image}
    alt={photographer.name}
    fill
    className="object-cover object-center transition duration-500 group-hover:scale-110"
  />

  <div className="absolute right-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black shadow-lg">
    ⭐ {photographer.rating}
  </div>
  <button className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur-md transition hover:bg-red-500">
  ❤️
</button>
</div>

              <div className="mt-6 flex items-center justify-between">
  <h3 className="text-2xl font-bold">
    {photographer.name}
  </h3>

  {photographer.verified && (
  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
    ✔ Verified
  </span>
)}
</div>

              <p className="mt-3 flex items-center gap-2 text-gray-400">
  <span>📍</span>
  <span>{photographer.city}</span>
</p>

              <p className="mt-2 text-yellow-400">
                ⭐ {photographer.rating}
              </p>

              <div className="mt-4 inline-block rounded-full border border-yellow-400 px-4 py-2 text-sm text-yellow-400">
  {photographer.category}
</div>

              <div className="mt-5 flex items-center justify-between">
  <div>
    <p className="text-sm text-gray-400">
      Starting From
    </p>

    <p className="text-2xl font-bold text-yellow-400">
      {photographer.price}
    </p>
  </div>
</div>

              <div className="mt-6 flex gap-3">

  <Link
  href={`/photographer/${photographer.id}`}
  className="flex-1 rounded-xl border border-yellow-400 py-3 text-center font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-black"
>
  View Profile
</Link>

  <button className="flex-1 rounded-xl bg-yellow-400 py-3 font-bold text-black transition-all duration-300 hover:scale-105">
    Book Now
  </button>

</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}