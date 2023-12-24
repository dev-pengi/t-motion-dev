"use client";
import { FC, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { navLinks } from "@/constants";
import { MenuIcon } from "@/assets";

const NavBar: FC = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpened((prev) => !prev);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsNavOpened(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="h-[80px] z-9 relative bg-transparent">
      <Container className="w-full h-full flex items-center">
        <div className="flex-1">
          <Link href={"/"} className="w-max">
            <Image
              src={"/purple-dark-logo.svg"}
              alt="logo"
              width={165}
              height={43.33}
            />
          </Link>
        </div>
        <ul className="gap-11 md:flex hidden">
          {navLinks.map((link, index) => (
            <li>
              <Link
                className="capitalize duration-200 hover:text-primary"
                key={`nav-link-${link.name}-${index}`}
                href={link.route}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 justify-end md:flex hidden">
          <Button size="sm">Get Started</Button>
        </div>
        <div>
          <div
            ref={wrapperRef}
            className={`md:hidden block text-[32px] ${
              isNavOpened ? "text-primary" : "text-dark"
            }`}
            onClick={handleNavToggle}
          >
            <MenuIcon />
          </div>

          <div
            className={`fixed w-full left-0 h-max py-6 px-3 bg-dark z-10 rounded-t-xl duration-200 ${
              isNavOpened ? "-bottom-0.5" : "-bottom-full"
            }`}
          >
            <ul className="gap-5 flex flex-col justify-center items-center text-center text-white">
              {navLinks.map((link, index) => (
                <li>
                  <Link
                    className="capitalize duration-200 hover:text-primary"
                    key={`nav-link-${link.name}-${index}`}
                    href={link.route}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Button className="">Get Started</Button>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
