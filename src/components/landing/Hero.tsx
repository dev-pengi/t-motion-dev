import { FC } from "react";
import Container from "../general/Container";
import Button from "../general/Button";
import NavBar from "../general/NavBar";
import Reveal from "../general/Reveal";

const Hero: FC = () => {
  return (
    <section className="relative">
      <Container className="flex items-center justify-between pt-[32px] pb-[32px] z-1 relative">
        <div>
          <h1 className="lg:max-w-[587px] text-[42px] vlg:text-[54px] font-[600]">
            <Reveal onScroll={false} delay={0.2} duration={0.4}>
              Even the greatest innovations, started with an idea
            </Reveal>
          </h1>
          <p className="mt-[32px] vlg:text-[20px] text-[18px] max-w-[500px]">
            <Reveal onScroll={false} delay={0.23} duration={0.42}>
              You have an idea ready to flight but no design, development, or
              project management skills? T Motion Dev is the answer. We turn
              your ideas into real world projects. Let's get started!
            </Reveal>
          </p>
          <Reveal onScroll={false} delay={0.27} duration={0.5}>
            <Button className="mt-[32px] sm:w-max w-full">Get Started</Button>
          </Reveal>
        </div>
        <div className="relative lg:block hidden">
          <Reveal onScroll={false} delay={0.25} duration={0.5}>
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
