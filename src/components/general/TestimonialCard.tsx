import { FC } from "react";

interface TestimonialCardProps {
  image: string;
  name: string;
  note: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ name, note, image }) => {
  return (
    <div className="w-full px-6 py-3 bg-white h-[110px] rounded-[15px] flex items-center">
      <div>
        <img
          src={image}
          alt={name}
          className="rounded-full min-w-[60px] w-[60px]"
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
