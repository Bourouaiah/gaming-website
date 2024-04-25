"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { HiMenuAlt3, HiMenu } from "react-icons/hi";

function Navbar() {
  const [windowWidthSize, setWidthWindowSize] = useState(window.innerWidth);
  const [isNavOpen, setIisNavOpen] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidthWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowWidthSize > 768) {
    return (
      <nav className="py-[20px] w-full fixed top-0 z-50 border-b-[0.1px] border-[#00EEBD] backdrop-blur-xl nav-bg">
        <ul className="flex justify-around items-center">
          {navLinks.map((e, i) => (
            <li key={i}>
              {e.image ? (
                <Link href="#hero">
                  <Image
                    loading="lazy"
                    src="/logo.png"
                    width={80}
                    height={90}
                    alt="Picture of the author"
                  />
                </Link>
              ) : (
                <a className="text-sm" href={`${e.link}`}>
                  {e.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  } else {
    return (
      <section className="w-full fixed top-0 z-50 border-b-[0.1px] border-[#00EEBD] backdrop-blur-xl nav-bg">
        <nav className="p-[20px] flex items-center justify-between">
          <span>
            <Image
              loading="lazy"
              src="/logo.png"
              width={60}
              height={60}
              alt="Picture of the author"
            />
          </span>
          <span
            className="text-3xl cursor-pointer"
            onClick={() => {
              setIisNavOpen((e) => !e);
            }}
          >
            {isNavOpen ? <HiMenu /> : <HiMenuAlt3 />}
          </span>
        </nav>
        <ul
          className={`${
            isNavOpen
              ? "translate-y-0 visible h-[88vh]"
              : "translate-y-[-800px] invisible hidden"
          } flex flex-col p-5 justify-between items-center transition-all`}
        >
          {navLinks.map((e, i) => {
            if (!e.image) {
              return (
                <li key={i}>
                  <Link className="text-sm" href={`${e.link}`}>
                    {e.title}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </section>
    );
  }
}

export default Navbar;
