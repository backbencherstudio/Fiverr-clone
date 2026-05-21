"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Container from "../Reusable/Container";

const filters = [
  "Category",
  "Service options",
  "Seller details",
  "Budget",
  "Delivery time",
];

function Toggle({
  label,
  enabled,
  onToggle,
}: {
  label: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
      className="inline-flex items-center gap-3 text-[15px] font-semibold text-[#62646a]"
    >
      <span
        className={`flex h-5 w-8 items-center rounded-full p-0.5 transition-colors ${
          enabled ? "bg-[#1dbe73]" : "bg-[#dadbdd]"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-white transition-transform ${
            enabled ? "translate-x-3" : "translate-x-0"
          }`}
        />
      </span>
      <span>{label}</span>
    </button>
  );
}

export default function Filter() {
  const [proServices, setProServices] = useState(false);
  const [instantResponse, setInstantResponse] = useState(false);

  return (
    <section className="my-8.5">
      <Container>
        <div className="flex flex-col gap-6">
          <div className="space-y-5">
            <h1 className="text-[1.75rem] tracking-[-0.02em] text-[#222325]">
              Results for <span className="font-bold">full stack web developer</span>
            </h1>

            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap gap-3">
                {filters.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#dadbdd] bg-white px-5 text-[16px] font-semibold text-[#222325] transition-colors hover:border-[#b5b6ba]"
                  >
                    <span>{label}</span>
                    <FiChevronDown className="h-4 w-4 text-[#222325]" />
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 xl:justify-end">
                <Toggle
                  label="Pro services"
                  enabled={proServices}
                  onToggle={() => setProServices((current) => !current)}
                />
                <Toggle
                  label="Instant response"
                  enabled={instantResponse}
                  onToggle={() => setInstantResponse((current) => !current)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[18px] font-medium text-[#74767e]">41,000+ results</p>

            <button
              type="button"
              className="inline-flex items-center gap-2 self-start text-[16px] text-[#74767e] sm:self-auto"
            >
              <span>Sort by:</span>
              <span className="font-semibold text-[#222325]">Relevance</span>
              <FiChevronDown className="h-4 w-4 text-[#222325]" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
