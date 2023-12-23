import { FC } from "react";
import Container from "../general/Container";
import { infos } from "@/constants";
import InfoCard from "../general/InfoCard";

const Info: FC = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center mt-6 justify-center">
          <h2 className="font-[600] text-[32px]">What do we have to offer?</h2>
        </div>
        <div className="mt-12">
          {infos.map((info, index) => (
            <InfoCard
              {...info}
              reverse={(index + 1) % 2 === 0}
              key={`${info.title}-${index}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Info;
