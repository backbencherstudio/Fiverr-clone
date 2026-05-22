"use client";

import { deleteImageFromImgBB } from "@/app/lib/imgbb";
import { readStoredGigs, writeStoredGigs, type StoredGig } from "@/app/lib/gigs";
import Container from "../components/Reusable/Container";
import GigCard from "../components/Card/GigCard";
import Filter from "../components/Filter/Filter";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [gigs, setGigs] = useState<StoredGig[]>(() => readStoredGigs());
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deletingGigId, setDeletingGigId] = useState<string | null>(null);

  useEffect(() => {
    const syncGigs = () => {
      setGigs(readStoredGigs());
    };

    window.addEventListener("storage", syncGigs);
    window.addEventListener("gigs-updated", syncGigs);

    return () => {
      window.removeEventListener("storage", syncGigs);
      window.removeEventListener("gigs-updated", syncGigs);
    };
  }, []);

  const handleDeleteGig = async (gigId: string) => {
    const gig = gigs.find((item) => item.id === gigId);

    if (!gig) {
      return;
    }

    if (!gig.imageDeleteUrl) {
      setDeleteError(
        "This gig was created before ImgBB delete support was added. Re-upload it if you need remote image deletion."
      );
      return;
    }

    const confirmed = window.confirm(
      "Delete this gig and remove its image from ImgBB?"
    );

    if (!confirmed) {
      return;
    }

    setDeleteError(null);
    setDeletingGigId(gigId);

    try {
      await deleteImageFromImgBB(gig.imageDeleteUrl);

      const nextGigs = gigs.filter((item) => item.id !== gigId);
      writeStoredGigs(nextGigs);
      setGigs(nextGigs);
    } catch {
      setDeleteError("Unable to delete the image from ImgBB right now.");
    } finally {
      setDeletingGigId(null);
    }
  };

  return (
    <div className="">
      <Filter />
      <Container>
        {deleteError ? (
          <p className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {deleteError}
          </p>
        ) : null}

        {gigs.length === 0 ? (
          <div>
            <p className="text-center text-4xl mt-20 text-gray-400">No gigs available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6.5 xl:grid-cols-4">
            {gigs.map((gig) => (
              <GigCard
                key={gig.id}
                id={gig.id}
                title={gig.title}
                imageSrc={gig.imageUrl}
                onDelete={() => void handleDeleteGig(gig.id)}
                isDeleting={deletingGigId === gig.id}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
