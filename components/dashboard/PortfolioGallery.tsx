"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type PortfolioItem = {
  id: string;
  image: string;
};

type Props = {
  images: PortfolioItem[];
};

export default function PortfolioGallery({ images: initialImages }: Props) {
  const supabase = createClient();

  const [images, setImages] = useState(initialImages);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function deleteImage(id: string, imageUrl: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (!confirmDelete) return;

    try {
      setLoadingId(id);

      // Extract storage path
      const path = imageUrl.split("/portfolio/")[1];

      if (path) {
        await supabase.storage
          .from("portfolio")
          .remove([path]);
      }

      const { error } = await supabase
        .from("portfolio")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch (err) {
      console.error(err);
      alert("Unable to delete image.");
    } finally {
      setLoadingId(null);
    }
  }

  if (images.length === 0) {
    return (
      <div className="text-center text-zinc-500 py-10">
        No Portfolio Images
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-xl border border-zinc-800"
        >
          <Image
            src={item.image}
            alt=""
            width={600}
            height={600}
            className="aspect-square object-cover"
          />

          <button
            onClick={() => deleteImage(item.id, item.image)}
            disabled={loadingId === item.id}
            className="absolute top-3 right-3 rounded-full bg-red-600 p-2 text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}