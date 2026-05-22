"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiGlobe, FiMenu, FiSearch, FiX } from "react-icons/fi";
import Container from "../Reusable/Container";
import Image from "next/image";

const primaryLinks = [
  { label: "Fiverr Pro", href: "#" },
  { label: "Explore", href: "#" },
  { label: "English", href: "#" },
  { label: "Become a Seller", href: "#" },
];

const mobileLinks = [...primaryLinks, { label: "Sign In", href: "#" }];

const navItems = [
  {
    label: "Fiverr Pro",
    href: "#",
    icon: <FiChevronDown className="h-4 w-4" />,
    iconPosition: "after",
    className:
      "inline-flex items-center gap-1 text-base font-semibold text-zinc-800 transition-colors hover:text-zinc-950",
  },
  {
    label: "Explore",
    href: "#",
    icon: <FiChevronDown className="h-4 w-4" />,
    iconPosition: "after",
    className:
      "inline-flex items-center gap-1 text-base font-semibold text-[#74767e] transition-colors hover:text-green-600",
  },
  {
    label: "English",
    href: "#",
    icon: <FiGlobe size={20} />,
    iconPosition: "before",
    className:
      "hidden items-center gap-2 text-base font-semibold text-[#74767e] transition-colors hover:text-green-600 xl:inline-flex",
  },
  {
    label: "Become a Seller",
    href: "#",
    className:
      "hidden text-base font-semibold text-[#74767e] transition-colors hover:text-green-600 xl:inline-flex",
  },
  {
    label: "Sign In",
    href: "#",
    className:
      "text-[15px] font-semibold text-[#74767e] transition-colors hover:text-green-600",
  },
  {
    label: "Add gig",
    href: "/add-gig",
    variant: "cta",
    className:
      "inline-flex h-10 items-center justify-center rounded-md border border-zinc-900 px-4 text-[15px] font-semibold text-zinc-950 transition-colors hover:bg-zinc-950 hover:text-white",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white py-4 px-4 xl:px-0">
      <Container>
        <div className="flex  items-center gap-3 lg:gap-6">
          <Link href="/">
            <Image
              width={200}
              height={200}
              src="/logo.svg"
              alt="Fiverr Logo"
              className="w-full h-full"
            />
          </Link>

          <form className="hidden flex-1 items-center md:flex">
            <div className="flex w-full max-w-145 items-center overflow-hidden rounded-md">
              <input
                type="text"
                placeholder="What service are you looking for today"
                aria-label="Search services"
                className="h-10.5 flex-1 border border-gray-300 focus:border-black rounded-l-md bg-transparent px-4 font-medium text-[#74767e] outline-none duration-300 placeholder:text-zinc-400 placeholder:font-medium tracking-wide focus:placeholder:text-zinc-300"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex h-10.5 w-12.5 items-center justify-center bg-zinc-900 text-white transition-colors hover:bg-black"
              >
                <FiSearch className="h-5 w-5" />
              </button>
            </div>
          </form>

          <nav className="ml-auto hidden items-center gap-7 lg:flex ">
            {navItems.map((item) =>
              item.variant === "cta" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={item.className}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={item.className}
                >
                  {item.icon && item.iconPosition === "before"
                    ? item.icon
                    : null}
                  {item.label}
                  {item.icon && item.iconPosition === "after"
                    ? item.icon
                    : null}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <Link
              href="/add-gig"
              className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-900 px-4 text-[14px] font-semibold text-zinc-950 transition-colors hover:bg-zinc-950 hover:text-white "
            >
              Add Gig
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              {menuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="pb-3 md:hidden mt-4">
          <form className="flex items-center overflow-hidden rounded-md border border-zinc-300 bg-white">
            <input
              type="text"
              defaultValue="full stack web developer"
              aria-label="Search services"
              className="h-11 flex-1 border-0 bg-transparent px-4 text-[15px] text-[#74767e] outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-11 w-13 items-center justify-center bg-zinc-900 text-white"
            >
              <FiSearch className="h-5 w-5" />
            </button>
          </form>
        </div>

        {menuOpen ? (
          <div className="border-t border-zinc-200 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {mobileLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-2 py-3 text-[15px] font-semibold text-zinc-800 transition-colors hover:bg-zinc-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
