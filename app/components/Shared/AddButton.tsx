import Link from "next/link";
import React from "react";

export default function AddButton() {
  return (
    <div className="fixed bottom-10 left-10">
      <Link href="/add-gig" className="inline-flex items-center gap-2 rounded-md border border-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-950 hover:text-white">
        Add Gig
      </Link>
    </div>
  );
}
