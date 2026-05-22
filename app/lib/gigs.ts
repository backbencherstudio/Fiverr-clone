export type StoredGig = {
  id: string;
  title: string;
  imageUrl: string;
  imageName: string;
  imageDeleteUrl?: string;
  createdAt: string;
};

export const GIG_STORAGE_KEY = "my-app-gigs";
export const GIGS_UPDATED_EVENT = "gigs-updated";

export function readStoredGigs() {
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

export function readGigFromStorage(id: string) {
  return readStoredGigs().find((gig) => gig.id === id) ?? null;
}

export function writeStoredGigs(gigs: StoredGig[]) {
  window.localStorage.setItem(GIG_STORAGE_KEY, JSON.stringify(gigs));
  window.dispatchEvent(new Event(GIGS_UPDATED_EVENT));
}
