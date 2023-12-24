import { FC } from "react";
import Container from "../general/Container";
import Button from "../general/Button";
import NavBar from "../general/NavBar";

const Hero: FC = () => {
  return (
    <section className="relative">
      <Container className="flex items-center justify-between pt-[32px] pb-[32px] z-1 relative">
        <div>
          <h1 className="lg:max-w-[587px] text-[42px] vlg:text-[54px] font-[600]">
            Even the greatest innovations, started with an idea
          </h1>
          <p className="mt-[32px] vlg:text-[20px] text-[18px] max-w-[500px]">
            You have an idea ready to flight but no design, development, or
            project management skills? T Motion Dev is the answer. We turn your
            ideas into real world projects. Let's get started!
          </p>
          <Button className="mt-[32px] sm:w-max w-full">Get Started</Button>
        </div>
        <div className="relative lg:block hidden">
          <img
            className="absolute -bottom-2 -right-9"
            width={100}
            src="/soft-star.svg"
          />
          <img
            className="absolute top-0 left-[120px]"
            width={80}
            src="/star.svg"
          />
          <img
            width={600}
            src={"/hero-illustration.png"}
            alt="man holding a laptop"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
