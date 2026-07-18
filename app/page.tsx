import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedPhotographers from "@/components/FeaturedPhotographers";

import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: photographers, error } = await supabase
    .from("photographers")
    .select("*");
  if (error) {
    console.error(error);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Categories />

      <FeaturedPhotographers photographers={photographers ?? []} />
    </main>
  );
}