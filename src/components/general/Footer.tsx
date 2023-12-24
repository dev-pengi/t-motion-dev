"use client";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/assets";
import Link from "next/link";
import { FC, useState } from "react";
import Container from "./Container";

const Footer: FC = () => {
  const now = new Date();

  return (
    <footer className="bg-dark py-[120px] text-white">
      <Container>
        <div className="flex justify-between items-start gap-[64px] lg:flex-row flex-col">
          <div className="">
            <img src="/light-logo.svg" alt="" />
            <p className="font-light ml-9 text-[15px]">
              When your views meet specialists <br /> the innovation really
              begins!
            </p>
          </div>
          <div className="flex flex-1 lg:justify-end justify-center vmd:gap-[128px] gap-[64px] items-start vmd:flex-row flex-col">
            <div className="flex flex-col gap-[13px]">
              <h3 className="font-normal text-[17px]">Links</h3>
              <Link
                href={"/home"}
                className="opacity-75 text-[16px] font-light"
              >
                Home
              </Link>
              <Link
                href={"/portfolio"}
                className="opacity-75 text-[16px] font-light"
              >
                Portfolio
              </Link>
            </div>
            <div className="flex flex-col gap-[13px]">
              <h3 className="font-normal text-[17px]">Resources</h3>
              <Link
                href={"/faqs"}
                className="opacity-75 text-[16px] font-light"
              >
                FAQs
              </Link>
              <Link
                href={"/support"}
                className="opacity-75 text-[16px] font-light"
              >
                Support
              </Link>
              <Link
                href={"/contact"}
                className="opacity-75 text-[16px] font-light"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex flex-col gap-[13px]">
              <h3 className="font-normal text-[17px]">Legal</h3>
              <Link
                href={"/terms"}
                className="opacity-75 text-[16px] font-light"
              >
                Terms Of Service
              </Link>
              <Link
                href={"/privacy"}
                className="opacity-75 text-[16px] font-light"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-white opacity-20 my-[36px]" />
        <div className="px-[20px] flex vmd:flex-row flex-col items-center vmd:justify-between justify-center gap-[32px]">
          <p className="text-center">
            © Copyright T Motion Dev {now.getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-[20px] text-[20px]">
            <Link
              href="facebook.com/tmotiondev"
              className="hover:-translate-y-1 duration-200"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="instagram.com/tmotiondev"
              className="hover:-translate-y-1 duration-200"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="twitter.com/tmotiondev"
              className="hover:-translate-y-1 duration-200"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="linkedin.com/company/tmotion"
              className="hover:-translate-y-1 duration-200"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
