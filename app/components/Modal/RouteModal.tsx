"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function RouteModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/55 px-4 py-6 backdrop-blur-[2px] sm:px-6 sm:py-10"
      role="dialog"
      aria-modal="true"
      onClick={() => router.back()}
    >
      <div
        className="relative w-full max-w-3xl rounded-[28px] bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={() => router.back()}
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950"
        >
          <FiX className="h-5 w-5" />
        </button>

        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto pr-1 sm:pr-2">
          {children}
        </div>
      </div>
    </div>
  );
}
