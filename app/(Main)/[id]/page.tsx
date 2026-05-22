"use client";

import { readGigFromStorage, readStoredGigs, writeStoredGigs } from "@/app/lib/gigs";
import { deleteImageFromImgBB } from "@/app/lib/imgbb";
import GitHeader from "@/app/components/GigDetails/GitHeader";
import LevelIcon from "@/app/components/icons/LevelIcon";
import Container from "@/app/components/Reusable/Container";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { TiStar } from "react-icons/ti";

const defaultGigTitle =
  "I will be your professional full stack python django web developer";
const defaultGigImage = "/card.jpg";

export default function GigDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [tab, setTab] = useState("Basic");
  const [gigData, setGigData] = useState({
    title: defaultGigTitle,
    imageUrl: defaultGigImage,
  });
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const plans: Record<
    string,
    { price: string; delivery: string; desc: string }
  > = {
    Basic: {
      price: "$80",
      delivery: "2-day delivery · 2 Revisions",
      desc: "Web Application/Website with Authentication, CRUD Operations, bug fix, and Database optimization",
    },
    Standard: {
      price: "$160",
      delivery: "3-day delivery · 3 Revisions",
      desc: "Everything in Basic + additional pages and integrations",
    },
    Premium: {
      price: "$300",
      delivery: "5-day delivery · 5 Revisions",
      desc: "Full featured website with deployment and post-launch support",
    },
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const currentGig = readGigFromStorage(id);

      setGigData({
        title: currentGig?.title ?? defaultGigTitle,
        imageUrl: currentGig?.imageUrl ?? defaultGigImage,
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [id]);

  const handleDeleteGig = async () => {
    const gig = readGigFromStorage(id);

    if (!gig?.imageDeleteUrl) {
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
    setIsDeleting(true);

    try {
      await deleteImageFromImgBB(gig.imageDeleteUrl);
      writeStoredGigs(readStoredGigs().filter((item) => item.id !== id));
      router.push("/");
    } catch {
      setDeleteError("Unable to delete the image from ImgBB right now.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="py-8">
      <GitHeader />
      <Container>
        <div className="mx-auto mt-6 flex max-w-7xl justify-between gap-25">
          <section>
            <h1 className="mb-3 w-[40ch] text-[1.75rem] font-bold leading-[120%]">
              {gigData.title}
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <img
                src="/profile.jpg"
                alt="author"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-semibold">Nafiz Al Turabi</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">Level 2</p>
                    <div className="-mb-1 flex items-center gap-0.5">
                      <LevelIcon />
                      <LevelIcon />
                      <span className="text-gray-300">
                        <LevelIcon />
                      </span>
                    </div>
                    <p className="ml-1 text-sm font-semibold text-[#74767e]">
                      1 order in queue
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {[5, 4, 3, 2, 1].map((s) => (
                    <TiStar key={s} size={22} className="text-black" />
                  ))}
                  <p className="ml-1 text-sm font-semibold">
                    4.9{" "}
                    <span className="font-normal text-gray-400">
                      (120 reviews)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border border-zinc-200 bg-[#f5f5f5] py-4">
              <img
                src={gigData.imageUrl}
                alt="Gig preview"
                className="h-106 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </section>

          <aside className="w-full max-w-106">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-md border border-zinc-200 bg-white">
                <div className="mb-4 flex border-b border-zinc-200">
                  {(["Basic", "Standard", "Premium"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`flex-1 py-5 text-center font-semibold ${
                        tab === t
                          ? "border-b-2 bg-white text-zinc-900"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="px-6">
                  <div className="mb-4">
                    <div className="uppercase font-medium text-black">
                      INTERMEDIATE LEVEL DJANGO WEBSITE
                    </div>
                    <div className="mt-2 text-3xl font-bold">
                      {plans[tab].price}
                    </div>
                    <div className="mt-1 text-sm text-zinc-500">
                      {plans[tab].delivery}
                    </div>
                    <p className="mt-3 text-sm text-zinc-600">
                      {plans[tab].desc}
                    </p>
                  </div>

                  <button className="mb-3 w-full rounded-md bg-black py-3 font-semibold text-white">
                    Continue
                  </button>
                  <button className="mb-4 w-full rounded-md border border-zinc-300 py-2 font-semibold">
                    Contact me v
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleDeleteGig()}
                    disabled={isDeleting}
                    className="mb-4 w-full rounded-md border border-red-200 py-3 font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isDeleting ? "Deleting..." : "Delete gig"}
                  </button>
                  {deleteError ? (
                    <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                      {deleteError}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
