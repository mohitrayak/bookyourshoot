import PortfolioGallery from "@/components/dashboard/PortfolioGallery";
import PortfolioUpload from "@/components/dashboard/PortfolioUpload";
import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ProfileForm from "@/components/dashboard/ProfileForm";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

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
        <DashboardSidebar />

        {/* Main Content */}
        <section className="flex-1 p-10">
          <ProfileForm />
          <PortfolioUpload />
          <PortfolioGallery />
        </section>

      </div>

    </main>
  );
}