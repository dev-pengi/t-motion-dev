"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { getBlurUrl } from "@/utils";

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
      <div className="lg:w-[490px] w-full h-full lg:block flex items-center justify-center">
        <Image
          loading="lazy"
          src={image}
          width={490}
          height={360}
          placeholder="blur"
          blurDataURL={blurData}
          alt={title}
          style={{
            objectFit: "cover",
            width: "100%",
            maxWidth: "490px",
            height: "auto",
          }}
          className="rounded-[15px] object-cover"
        />
      </div>
      <div className="w-full max-w-[634px] lg:text-start text-center">
        <h3 className="font-[600] sm:text-[32px] text-[28px] lg:text-start text-center">
          {title}
        </h3>
        <p className="mt-[32px] text-[18px] text-dark-light lg:text-start text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
