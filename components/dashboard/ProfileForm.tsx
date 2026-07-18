"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ProfileForm() {
  const supabase = createClient();

  const [profileId, setProfileId] = useState<string | null>(null);

  const [studioName, setStudioName] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("photographers")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!data) return;

    setProfileId(data.id);
    setStudioName(data.name ?? "");
    setCity(data.city ?? "");
    setCategory(data.category ?? "");
    setPrice(data.price ?? "");
    setAbout(data.about ?? "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      setLoading(false);
      return;
    }

    const profile = {
      user_id: user.id,
      name: studioName,
      city,
      category,
      price,
      about,
    };

    let error = null;

    if (profileId) {
      const result = await supabase
        .from("photographers")
        .update(profile)
        .eq("id", profileId);

      error = result.error;
    } else {
      const result = await supabase
        .from("photographers")
        .insert({
          ...profile,
          rating: 5,
          verified: false,
          image: "/images/photographers/photographer1.jpg",
        })
        .select()
        .single();

      error = result.error;

      if (result.data) {
        setProfileId(result.data.id);
      }
    }

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profile Saved Successfully ✅");
  }

  return (
    <div>
      <h2 className="text-4xl font-bold">My Profile</h2>

      <p className="mt-3 text-gray-400">
        Update your profile information.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-3xl space-y-6"
      >
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Studio Name
          </label>

          <input
            type="text"
            value={studioName}
            onChange={(e) => setStudioName(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            City
          </label>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Category
          </label>

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Starting Price
          </label>

          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            About
          </label>

          <textarea
            rows={6}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none focus:border-yellow-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105 disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : profileId
            ? "Update Profile"
            : "Save Profile"}
        </button>
      </form>
    </div>
  );
}