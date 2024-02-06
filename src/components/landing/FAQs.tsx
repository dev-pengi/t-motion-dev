"use client";
import { FC, useState } from "react";
import Container from "../general/Container";
import { faqs } from "@/constants";
import FAQcard from "../general/FAQcard";
import Button from "../general/Button";
import Link from "next/link";
import Reveal from "../general/Reveal";
import { motion } from "framer-motion";

interface FAQsProps {
  isFull?: boolean;
}

const FAQs: FC<FAQsProps> = ({ isFull }) => {
  const [isOpened, setIsOpened] = useState<number | null>(null);
  const handleIsOpened = (index: number) => {
    setIsOpened((prev) => {
      if (prev === index) return null;
      else return index;
    });
  };

  return (
    <section>
      <Reveal delay={0.15} duration={0.4}>
        <Container className="py-6">
          <div className="flex items-center justify-center">
            <h2 className="font-[600] text-[32px] text-center">
              Frequently asked questions
            </h2>
          </div>
          <div className="py-9 flex flex-col items-center gap-[15px]">
            {faqs
              .filter((question) => question.category === "main")
              .map((question, index) => (
                <FAQcard
                  {...question}
                  isOpened={isOpened === index}
                  onOpen={() => handleIsOpened(index)}
                  key={`${question.question}-${index}`}
                />
              ))}
          </div>
          {!isFull && (
            <div className="flex items-center justify-center">
              <Link href="/faqs">
                <Button>Learn More</Button>
              </Link>
            </div>
          )}
        </Container>
      </Reveal>
    </section>
  );
};

export default FAQs;
