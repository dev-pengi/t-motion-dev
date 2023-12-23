"use client";
import { FC, useState } from "react";
import Container from "../general/Container";
import { faqs } from "@/constants";
import FAQcard from "../general/FAQcard";
import Button from "../general/Button";
import Link from "next/link";

const FAQs: FC = () => {
  const [isOpened, setIsOpened] = useState<number | null>(null);
  const handleIsOpened = (index: number) => {
    setIsOpened((prev) => {
      if (prev === index) return null;
      else return index;
    });
  };
  return (
    <section>
      <Container className="py-6">
        <div className="flex items-center justify-center">
          <h2 className="font-[600] text-[32px]">Frequently asked questions</h2>
        </div>
        <div className="mt-12 flex flex-col items-center gap-[15px]">
          {faqs.map((question, index) => (
            <FAQcard
              {...question}
              isOpened={isOpened === index}
              onOpen={() => handleIsOpened(index)}
              key={`${question.question}-${index}`}
            />
          ))}
        </div>
        <div className="flex mt-6 items-center justify-center">
          <Link href="/faq">
            <Button>Learn More</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FAQs;
