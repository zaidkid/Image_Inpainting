"use client";

import { useState, DragEvent, ChangeEvent } from "react";
import Image from "next/image";
import { UploadCloud, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFile = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleDrag = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/restore", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.status === "success") {
        localStorage.setItem("original", data.original_url);
        localStorage.setItem("restored", data.restored_url);
        router.push("/result");
      } else {
        alert("Error restoring image");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE3] flex flex-col justify-center items-center pt-32 pb-20 px-6">
      <h1 className="text-2xl md:text-3xl font-serif font-semibold text-[#2C241C] mb-2">
        Upload Artifact Image
      </h1>
      <p className="text-sm text-[#68615A] mb-10 max-w-md text-center">
        Upload a damaged artifact to restore it using AI inpainting.
      </p>

      <label
        htmlFor="uploadInput"
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center w-full max-w-md h-64 border-2 border-dashed rounded-xl cursor-pointer transition
        ${dragActive ? "border-[#2C241C] bg-[#E9E2D6]" : "border-[#B7AFA5] bg-[#FAF7F2]"}`}
      >
        <input
          type="file"
          id="uploadInput"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />

        {!preview ? (
          <div className="flex flex-col items-center gap-2 text-[#5D564E]">
            <UploadCloud className="w-10 h-10 text-[#7C746A]" />
            <p className="text-sm">Drag & Drop or Click to Upload</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Image
              src={preview}
              alt="Preview"
              width={200}
              height={200}
              className="rounded-lg border border-[#B7AFA5]"
            />
            <button
              onClick={() => {
                setImage(null);
                setPreview(null);
              }}
              className="text-xs text-red-600 underline"
            >
              Remove
            </button>
          </div>
        )}
      </label>

      <div className="mt-10 flex gap-4">
        <button
          disabled={!preview || loading}
          onClick={handleUpload}
          className="px-6 py-2.5 rounded-full text-sm font-medium bg-[#2C241C] text-white hover:bg-black disabled:opacity-50 transition flex items-center gap-2"
        >
          {loading && <Loader className="animate-spin w-4 h-4" />}
          {loading ? "Restoring..." : "Restore"}
        </button>

        <Link
          href="/"
          className="px-6 py-2.5 rounded-full text-sm font-medium border border-[#2C241C] text-[#2C241C] hover:bg-[#E6DDCF] transition"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}
