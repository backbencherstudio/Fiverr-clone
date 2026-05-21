import {
  FiChevronRight,
  FiHeart,
  FiHome,
  FiMoreHorizontal,
  FiShare2,
} from "react-icons/fi";
import Container from "../Reusable/Container";
import Link from "next/link";
import ShareIcon from "../icons/ShareIcon";
export default function GitHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4">
        <header className="flex justify-between gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#000000]">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#74767e] transition-colors hover:bg-[#f5f5f5] hover:text-[#222325]"
            >
              <FiHome size={16} />
            </Link>

            <span className="text-gray-400">/</span>
            <Link
              href="/"
              className="font-medium transition-colors hover:text-[#222325]"
            >
              Programming &amp; Tech
            </Link>

            <span className="text-gray-400">/</span>
            <Link
              href="/"
              className="font-medium transition-colors hover:text-[#222325]"
            >
              Website Development
            </Link>

            <span className="text-gray-400">/</span>
            <span className="font-medium text-[#222325]">Custom Websites</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              aria-label="Save gig"
              className="inline-flex h-8 items-center gap-2 rounded-lg border border-[#dadbdd] px-4 text-sm font-semibold  transition-colors hover:border-[#b5b6ba] hover:text-[#222325]"
            >
              <FiHeart size={18} />
              <span>113</span>
            </button>

            <button
              type="button"
              aria-label="Share gig"
              className="inline-flex h-8 w-12 items-center justify-center rounded-lg border border-[#dadbdd]  transition-colors hover:border-[#b5b6ba] hover:text-[#222325]"
            >
              <ShareIcon />
            </button>

            <button
              type="button"
              aria-label="More options"
              className="inline-flex h-8 w-12 items-center justify-center rounded-lg border border-[#dadbdd]  transition-colors hover:border-[#b5b6ba] hover:text-[#222325]"
            >
              <FiMoreHorizontal size={18} />
            </button>
          </div>
        </header>
    </div>
  );
}
