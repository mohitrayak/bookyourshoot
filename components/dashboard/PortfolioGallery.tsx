"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type PortfolioImage = {
  id: string;
  image_url: string;
  storage_path: string;
};

export default function PortfolioGallery() {
  const supabase = createClient();

  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("portfolio")
      .select("id,image_url,storage_path")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setImages(data ?? []);
    setLoading(false);
  }

  async function deleteImage(image: PortfolioImage) {
    const confirmDelete = window.confirm(
      "Delete this image permanently?"
    );

    if (!confirmDelete) return;

    setDeletingId(image.id);

    const { error: storageError } = await supabase.storage
      .from("portfolio")
      .remove([image.storage_path]);

    if (storageError) {
      alert(storageError.message);
      setDeletingId(null);
      return;
    }

    const { error: dbError } = await supabase
      .from("portfolio")
      .delete()
      .eq("id", image.id);

    if (dbError) {
      alert(dbError.message);
      setDeletingId(null);
      return;
    }

    setImages((prev) =>
      prev.filter((item) => item.id !== image.id)
    );

    setDeletingId(null);
  }

  if (loading) {
    return (
      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-5 text-2xl font-bold">
          Portfolio Gallery
        </h2>

        <p className="text-zinc-400">
          Loading images...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-5 text-2xl font-bold">
        Portfolio Gallery
      </h2>

      {images.length === 0 ? (
        <p className="text-zinc-500">
          No images uploaded yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl border border-zinc-800"
            >
              <Image
  src={image.image_url}
  alt="Portfolio"
  width={500}
  height={500}
  unoptimized
  className="aspect-square h-full w-full object-cover"
/>

              <button
                onClick={() => deleteImage(image)}
                disabled={deletingId === image.id}
                className="absolute right-3 top-3 rounded-full bg-red-600 p-2 text-white transition hover:bg-red-700 disabled:opacity-50"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}