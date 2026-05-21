"use client";

import GitHeader from "@/app/components/GigDetails/GitHeader";
import LevelIcon from "@/app/components/icons/LevelIcon";
import Container from "@/app/components/Reusable/Container";
import React, { useState } from "react";
import { TiStar } from "react-icons/ti";

export default function GigDetail() {
  const [tab, setTab] = useState("Basic");

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

  return (
    <div className="py-8">
      <GitHeader />
      <Container>
        <div className="flex max-w-7xl mx-auto justify-between gap-25 mt-6">
          <section className="">
            <h1 className="text-[1.75rem] font-bold mb-3 w-[40ch] leading-[120%]">
              I will be your professional full stack python django web developer
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop"
                alt="author"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold text-lg">Nafiz Al Turabi</h4>
                  <div className="flex gap-2 items-center">
                    <p className="font-semibold text-sm">Level 2 </p>
                    <div className="flex gap-0.5 items-center -mb-1">
                      <LevelIcon />
                      <LevelIcon />
                      <span className="text-gray-300">
                        {" "}
                        <LevelIcon />
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#74767e] ml-1">
                      1 order in queue
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    {[5, 4, 3, 2, 1].map((s) => (
                      <TiStar key={s} size={22} className="text-black" />
                    ))}
                    <p className="text-sm font-semibold  ml-1">
                      4.9{" "}
                      <span className="text-gray-400 font-normal">
                        (120 reviews)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative border bg-[#f5f5f5] border-zinc-200 overflow-hidden py-4">
              <img
                src="/card.jpg"
                alt="Gig preview"
                className="w-full h-106 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </section>

          <aside className="max-w-106 w-full">
            <div className="sticky top-24">
              <div className="bg-white border border-zinc-200 rounded-md overflow-hidden">
                <div className="flex mb-4 border-b border-zinc-200">
                  {(["Basic", "Standard", "Premium"] as const).map(
                    (t, index) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 py-5 text-center font-semibold ${
                          tab === t
                            ? "bg-white text-zinc-900 border-b-2"
                            : "bg-zinc-100 text-zinc-600 "
                        }`}
                      >
                        {t}
                      </button>
                    ),
                  )}
                </div>

                <div className="px-6">
                  <div className="mb-4">
                    <div className="uppercase font-medium text-black">
                       INTERMEDIATE LEVEL DJANGO WEBSITE

                    </div>
                    <div className="text-3xl font-bold mt-2">
                      {plans[tab].price}
                    </div>
                    <div className="text-sm text-zinc-500 mt-1">
                      {plans[tab].delivery}
                    </div>
                    <p className="text-sm text-zinc-600 mt-3">
                      {plans[tab].desc}
                    </p>
                  </div>

                  <button className="w-full bg-black text-white py-3 rounded-md font-semibold mb-3">
                    Continue →
                  </button>
                  <button className="w-full border border-zinc-300 py-2 rounded-md font-semibold mb-4">
                    Contact me ▾
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
