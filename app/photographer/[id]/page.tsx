import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PhotographerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Photographer
  const { data: photographer, error } = await supabase
    .from("photographers")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !photographer) {
    notFound();
  }

  // Portfolio
 const { data: portfolio, error: portfolioError } = await supabase
  .from("portfolio")
  .select("*");

console.log("ALL Portfolio:", portfolio);
console.log("Portfolio Error:", portfolioError);
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="rounded-xl border border-yellow-400 px-5 py-2 transition hover:bg-yellow-400 hover:text-black"
          >
            ← Back
          </Link>

          <h1 className="text-2xl font-bold">
            {photographer.name}
          </h1>

        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Main Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={photographer.image}
              alt={photographer.name}
              fill
              sizes="(max-width:768px)100vw,50vw"
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>

            <h2 className="text-5xl font-bold">
              {photographer.name}
            </h2>

            <p className="mt-4 text-xl text-gray-400">
              📍 {photographer.city}
            </p>

            <p className="mt-4 text-xl text-yellow-400">
              ⭐ {photographer.rating}
            </p>

            <div className="mt-6 inline-block rounded-full border border-yellow-400 px-5 py-2">
              {photographer.category}
            </div>

            <h3 className="mt-8 text-3xl font-bold text-yellow-400">
              Starting {photographer.price}
            </h3>

            <p className="mt-8 leading-8 text-gray-300">
              {photographer.about}
            </p>

            <div className="mt-10 flex gap-4">

              <button className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105">
                Book Now
              </button>

              <button className="rounded-xl border border-yellow-400 px-8 py-4 transition hover:bg-yellow-400 hover:text-black">
                WhatsApp
              </button>

            </div>

          </div>

        </div>

        {/* Portfolio */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold">
            Portfolio
          </h2>

          <p className="mt-3 text-gray-400">
            Some recent work by {photographer.name}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {portfolio?.map((photo) => (

              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden rounded-3xl"
              >

                <Image
                  src={photo.image}
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}