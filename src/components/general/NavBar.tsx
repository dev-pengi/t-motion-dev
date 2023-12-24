import { FC } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { navLinks } from "@/constants";


const NavBar: FC = () => {
  return (
    <nav className="h-[80px] z-10 relative bg-transparent">
      <Container className="w-full h-full flex items-center">
        <Link href={'/'} className="flex-1">
          <Image
            src={"/purple-dark-logo.svg"}
            alt="logo"
            width={165}
            height={43.33}
          />
        </Link>
        <div className="gap-11 md:flex hidden">
          {navLinks.map((link, index) => (
            <Link
              className="capitalize duration-200 hover:text-primary"
              key={`nav-link-${link.name}-${index}`}
              href={link.route}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex-1 justify-end md:flex hidden">
          <Button size="sm">Get Started</Button>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
