"use client";
import { getBlurUrl } from "@/utils";
import Image from "next/image";
import { FC, useState } from "react";

interface TestimonialCardProps {
  image: string;
  blurhash: string;
  name: string;
  note: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  note,
  image,
  blurhash,
}) => {
  const [blurData] = useState(getBlurUrl(blurhash));
  return (
    <div className="w-full px-6 py-3 bg-white rounded-[15px] flex items-center">
      <div>
        <Image
          src={image}
          alt={name}
          loading="lazy"
          width={60}
          height={60}
          placeholder="blur"
          blurDataURL={blurData}
          className="rounded-full min-h-[60px] h-[60px] object-cover min-w-[60px] w-[60px]"
        />
      </div>
      <div className="ml-4">
        <div>
          <h3 className="font-[600] text-[17px] leading-[0.6ae]">{name}</h3>
        </div>
        <p className="font-[500] text-[15px]">{note}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
