"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function PortfolioUpload() {
  const supabase = createClient();

  const [uploading, setUploading] = useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      setUploading(false);
      return;
    }

    const extension = file.name.split(".").pop();

const fileName =
  `${user.id}/${Date.now()}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("portfolio")
      .upload(fileName, file);

    if (uploadError) {
      alert(uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("portfolio")
      .getPublicUrl(fileName);

  const { error: dbError } = await supabase
  .from("portfolio")
  .insert({
    user_id: user.id,
    image_url: data.publicUrl,
    storage_path: fileName,
  });
    setUploading(false);

    if (dbError) {
      alert(dbError.message);
      return;
    }

    alert("Image Uploaded Successfully ✅");
  }

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Portfolio
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {uploading && (
        <p className="mt-4 text-yellow-400">
          Uploading...
        </p>
      )}
    </div>
  );
}