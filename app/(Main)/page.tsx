"use client";

import Container from "../components/Reusable/Container";
import GigCard from "../components/Card/GigCard";
import Filter from "../components/Filter/Filter";
import { useEffect, useState } from "react";

type StoredGig = {
  id: string;
  title: string;
  imageUrl: string;
  imageName: string;
  createdAt: string;
};

const GIG_STORAGE_KEY = "my-app-gigs";

function readStoredGigs() {
  if (typeof window === "undefined") {
    return [];
  }

  const storedGigs = window.localStorage.getItem(GIG_STORAGE_KEY);

  if (!storedGigs) {
    return [];
  }

  try {
    return JSON.parse(storedGigs) as StoredGig[];
  } catch {
    return [];
  }
}

export default function HomePage() {
  const [gigs, setGigs] = useState<StoredGig[]>(() => readStoredGigs());

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

  return (
    <div className="">
      <Filter />
      <Container>
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
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
