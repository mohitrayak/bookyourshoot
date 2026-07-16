import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PhotographerProfile({ params }: Props) {
  const { id } = await params;

  const { data: photographer, error } = await supabase
    .from("photographers")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !photographer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Cover */}
      <section className="relative h-[350px] w-full">
        <Image
          src={photographer.image}
          alt={photographer.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Profile */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <h1 className="text-5xl font-bold">
          {photographer.name}
        </h1>

        <p className="mt-4 text-yellow-400 text-xl">
          ⭐ {photographer.rating}
        </p>

        <p className="mt-2 text-gray-400">
          📍 {photographer.city}
        </p>

        <div className="mt-6 inline-block rounded-full border border-yellow-400 px-5 py-2 text-yellow-400">
          {photographer.category}
        </div>

        <p className="mt-8 text-lg leading-8 text-gray-300">
          {photographer.about}
        </p>

        <div className="mt-10 flex gap-4">

          <button className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:scale-105 transition">
            Book Now
          </button>

          <button className="rounded-xl border border-yellow-400 px-8 py-4 hover:bg-yellow-400 hover:text-black transition">
            Contact
          </button>

        </div>

      </section>

    </main>
  );
}