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

export default function HomePage() {
  const [gigs, setGigs] = useState<StoredGig[]>([]);

  useEffect(() => {
    const storedGigs = localStorage.getItem(GIG_STORAGE_KEY);

    if (!storedGigs) {
      setGigs([]);
      return;
    }

    try {
      setGigs(JSON.parse(storedGigs));
    } catch {
      setGigs([]);
    }
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
