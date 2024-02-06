import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FAQcardProps {
  question: string;
  answer: string;
  isOpened: boolean;
  onOpen: () => void;
}

const FAQcard: FC<FAQcardProps> = ({ question, answer, isOpened, onOpen }) => {
  return (
    <div
      className="cursor-pointer bg-light-gray w-full max-w-[1024px] flex flex-col items-center"
      onClick={onOpen}
      style={{
        borderRadius: 10,
      }}
    >
      <div className="py-[28px] px-[24px] w-full">
        <div className="flex justify-between items-center w-full">
          <p className="h-max text-[18px] leading-[22px] duration-200 font-[500]">
            {question}
          </p>
          <div
            className={`duration-200 ${isOpened ? "rotate-180" : "rotate-0"}`}
          >
            <img src="/down.svg" />
          </div>
        </div>
      </div>
      {isOpened && (
        <>
          <div className="pb-[28px] px-[24px]">
            <p className="h-max text-[16px] ">{answer}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FAQcard;
