import Image from "next/image";
import Link from "next/link";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiExternalLink,
  FiHeart,
  FiHome,
  FiMoreHorizontal,
  FiRefreshCw,
} from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import Container from "@/app/components/Reusable/Container";
import LevelIcon from "@/app/components/icons/LevelIcon";

const breadcrumbs = [
  "Programming & Tech",
  "Website Development",
  "Custom Websites",
];

const packageTabs = ["Basic", "Standard", "Premium"];
const previewStrip = [1, 2, 3, 4, 5];

export default function DetailsPage() {
  return (
    <section className="bg-white py-6 lg:py-8">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between xl:gap-14">
          <div className="min-w-0 flex-1 xl:max-w-[780px]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <nav className="flex flex-wrap items-center gap-2 text-[14px] text-[#62646a]">
                <FiHome className="h-4 w-4 text-[#74767e]" />
                {breadcrumbs.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <FiChevronRight className="h-3.5 w-3.5 text-[#b5b6ba]" />
                    <Link href="#" className="transition-colors hover:text-[#222325]">
                      {item}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="flex items-center gap-3 text-[#74767e]">
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#b5b6ba] transition-colors hover:bg-[#f5f5f5] hover:text-[#222325]"
                >
                  <FiHeart className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 items-center rounded-md border border-[#e4e5e7] px-3 text-[14px] font-semibold text-[#62646a] transition-colors hover:bg-[#f5f5f5]"
                >
                  113
                </button>
                <button
                  type="button"
                  className="inline-flex h-9 w-12 items-center justify-center rounded-xl border border-[#e4e5e7] text-[#62646a] transition-colors hover:bg-[#f5f5f5]"
                >
                  <FiExternalLink className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-9 w-12 items-center justify-center rounded-xl border border-[#e4e5e7] text-[#62646a] transition-colors hover:bg-[#f5f5f5]"
                >
                  <FiMoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="max-w-[760px] text-[34px] font-bold leading-[1.16] tracking-[-0.03em] text-[#222325] lg:text-[42px]">
                I will be your professional full stack python django web developer
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Image
                  src="/profile.jpg"
                  alt="Seller profile"
                  width={62}
                  height={62}
                  className="h-[62px] w-[62px] rounded-full border border-[#e4e5e7] object-cover"
                />

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-[15px] text-[#62646a]">
                    <Link href="#" className="text-[18px] font-semibold text-[#222325] hover:underline">
                      Ashar K
                    </Link>
                    <span className="text-[15px] font-semibold text-[#222325]">Level 2</span>
                    <span className="flex gap-px text-[#a0a3a8]">
                      <LevelIcon />
                      <LevelIcon />
                      <LevelIcon />
                    </span>
                    <span>1 order in queue</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 text-[15px]">
                    <div className="flex items-center gap-0.5 text-[#222325]">
                      <TiStar className="h-[18px] w-[18px]" />
                      <TiStar className="h-[18px] w-[18px]" />
                      <TiStar className="h-[18px] w-[18px]" />
                      <TiStar className="h-[18px] w-[18px]" />
                      <TiStar className="h-[18px] w-[18px]" />
                    </div>
                    <span className="font-semibold text-[#222325]">5.0</span>
                    <Link href="#" className="text-[#62646a] underline underline-offset-2">
                      (54 reviews)
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="relative overflow-hidden border border-[#efeff0] bg-[#f5f5f5]">
                  <Image
                    src="/card.jpg"
                    alt="Gig preview"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />

                  <button
                    type="button"
                    className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#62646a] shadow-[0_2px_10px_rgba(0,0,0,0.12)] transition-colors hover:text-[#222325]"
                  >
                    <FiChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    type="button"
                    className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#62646a] shadow-[0_2px_10px_rgba(0,0,0,0.12)] transition-colors hover:text-[#222325]"
                  >
                    <FiChevronRight className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-5 gap-2">
                  {previewStrip.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`overflow-hidden border transition-opacity ${
                        index === 0
                          ? "border-[#222325] opacity-100"
                          : "border-[#e4e5e7] opacity-40 hover:opacity-70"
                      }`}
                    >
                      <Image
                        src="/card.jpg"
                        alt={`Gig preview ${item}`}
                        width={220}
                        height={140}
                        className="h-[62px] w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="w-full xl:w-[418px] xl:shrink-0">
            <div className="overflow-hidden rounded-lg border border-[#dadbdd] bg-white xl:sticky xl:top-24">
              <div className="grid grid-cols-3 border-b border-[#dadbdd]">
                {packageTabs.map((tab, index) => (
                  <button
                    key={tab}
                    type="button"
                    className={`h-[58px] border-r border-[#dadbdd] text-[15px] font-semibold transition-colors last:border-r-0 ${
                      index === 0
                        ? "bg-white text-[#222325] shadow-[inset_0_-3px_0_0_#222325]"
                        : "bg-[#fafafa] text-[#74767e] hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-5 p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="max-w-[235px] text-[17px] font-bold leading-[1.45] text-[#222325]">
                      BASIC LEVEL DJANGO WEBSITE
                    </h2>
                    <p className="text-[30px] font-normal leading-none text-[#222325]">$80</p>
                  </div>

                  <p className="text-[16px] leading-[1.35] text-[#62646a]">
                    Web Application/Website with Authentication CRUD Operations ,
                    bug fix, and Database optimization
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[16px] font-semibold text-[#62646a]">
                  <div className="flex items-center gap-2">
                    <FiClock className="h-[18px] w-[18px]" />
                    <span>2-day delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiRefreshCw className="h-[18px] w-[18px]" />
                    <span>2 Revisions</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-[16px] font-semibold text-[#404145]"
                >
                  <span>What&apos;s Included</span>
                  <FiChevronDown className="h-[18px] w-[18px]" />
                </button>

                <button
                  type="button"
                  className="inline-flex h-11 w-full items-center justify-center rounded-[4px] bg-black px-6 text-[16px] font-semibold text-white transition-colors hover:bg-[#222325]"
                >
                  <span>Continue</span>
                  <span className="ml-3 text-[19px]">→</span>
                </button>

                <button
                  type="button"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[4px] border border-[#dadbdd] bg-white px-6 text-[16px] font-semibold text-[#222325] transition-colors hover:bg-[#f9f9f9]"
                >
                  <span>Contact me</span>
                  <FiChevronDown className="h-4 w-4" />
                </button>
              </div>

              <div className="border-t border-[#dadbdd] bg-[#fcfcfc] p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src="/profile.jpg"
                    alt="Seller avatar"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="space-y-3">
                    <h3 className="text-[15px] font-bold leading-6 text-[#404145]">
                      Need flexibility when hiring?
                    </h3>
                    <p className="text-[15px] leading-7 text-[#62646a]">
                      Hire by the hour, ideal for long-term projects with flexible
                      hours and weekly payments.
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-3 text-[15px]">
                      <span className="font-bold text-[#222325]">$29/hour</span>
                      <Link
                        href="#"
                        className="font-medium text-[#404145] underline underline-offset-2"
                      >
                        Request hourly offer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
