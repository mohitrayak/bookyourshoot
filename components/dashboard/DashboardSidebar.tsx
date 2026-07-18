"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DashboardSidebar() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/login");
    router.refresh();
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950 p-6">

      <h2 className="mb-8 text-2xl font-bold text-yellow-400">
        Book Your Shoot
      </h2>

      <nav className="flex-1 space-y-3">

        <Link
          href="/dashboard"
          className="block rounded-xl bg-yellow-400 px-4 py-3 font-semibold text-black"
        >
          📊 Dashboard
        </Link>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-900">
          👤 My Profile
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-900">
          🖼 Portfolio
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-900">
          💰 Packages
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-900">
          📅 Availability
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-900">
          ⭐ Reviews
        </button>

        <button className="w-full rounded-xl px-4 py-3 text-left transition hover:bg-zinc-900">
          ⚙ Settings
        </button>

      </nav>

      {/* Logout Button */}

      <button
        onClick={handleLogout}
        className="mt-6 w-full rounded-xl border border-red-500 px-4 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
      >
        🚪 Logout
      </button>

    </aside>
  );
}