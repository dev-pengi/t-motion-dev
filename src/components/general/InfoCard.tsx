"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { getBlurUrl } from "@/utils";
import Reveal from "./Reveal";

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  blurhash: string;
  reverse: boolean;
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  image,
  blurhash,
  reverse,
}) => {
  const [blurData] = useState(getBlurUrl(blurhash));
  return (
    <div
      className={`py-[42px] flex justify-around items-center gap-6 flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <Reveal
        type={reverse ? "fade-left" : "fade-right"}
        delay={0.2}
        duration={0.4}
        className="lg:w-[490px] w-full h-full lg:block flex items-center justify-center"
      >
        <Image
          loading="lazy"
          src={image}
          width={490}
          height={360}
          placeholder="blur"
          blurDataURL={blurData}
          alt={title}
          style={{}}
          className="rounded-[15px] vlg:min-w-[490px] lg:min-w-[390px] w-full max-w-[490px] h-auto object-cover"
        />
      </Reveal>
      <div className="w-full max-w-[634px] lg:text-start text-center">
        <Reveal
          type={reverse ? "fade-right" : "fade-left"}
          delay={0.3}
          duration={0.4}
          className="font-[600] sm:text-[32px] text-[28px] lg:text-start text-center"
        >
          {title}
        </Reveal>
        <Reveal
          type={reverse ? "fade-right" : "fade-left"}
          delay={0.4}
          duration={0.4}
          className="mt-[32px] text-[18px] text-dark-light lg:text-start text-center"
        >
          {description}
        </Reveal>
      </div>
    </div>
  );
};

export default InfoCard;
