import { FC } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  image,
  reverse,
}) => {
  return (
    <div
      className={`py-[42px] flex justify-around items-center ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div>
        <img
          src={image}
          alt={title}
          className="rounded-[15px] w-[515px] h-[300px] min-w-[415px] min-h-[360px] object-cover"
        />
      </div>
      <div className="w-full max-w-[634px]">
        <h3 className="font-[600] text-[32px]">{title}</h3>
        <p className="mt-[32px] text-[18px] text-dark-light">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
