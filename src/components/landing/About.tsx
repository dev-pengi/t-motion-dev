import { FC } from "react";
import Container from "../general/Container";
import TestimonialCard from "../general/TestimonialCard";
import { testimonials } from "@/constants";
import Reveal from "../general/Reveal";

const About: FC = () => {
  return (
    <section className="bg-light-gray overflow-hidden">
      <Container className="py-[32px] flex gap-6 vlg:items-center items-start vlg:flex-row flex-col">
        <div>
          <Reveal delay={0.12} duration={0.3}>
            <h2 className="font-[600] text-[32px]">
              We convert your view to success
            </h2>
          </Reveal>
          <Reveal delay={0.16} duration={0.4}>
            <p className="max-w-[680px] text-dark-light mt-[26px]">
              we are a freelancer software development team made of expert
              developers, designers and managers, we manage, design and develop
              the clients projects from an idea to a product that is ready to
              get deployed to production. and guess what, we take care of all
              that painful process!
            </p>
          </Reveal>
          <div className="mt-[26px] flex gap-[26px] items-center flex-wrap">
            <Reveal
              delay={0.2}
              duration={0.4}
              className="vmd:px-4 px-5 py-6 bg-white w-full vmd:max-w-[224px] vmd:rounded-[32px] rounded-[16px] shadow-cards"
            >
              <div className="h-full flex vmd:flex-col flex-row vmd:justify-between vmd:items-start items-center">
                <div>
                  <img
                    src="/purple-heart.svg"
                    className="w-full h-auto max-w-[60px] min-w-[60px]"
                  />
                </div>
                <p className="font-[100] vmd:mt-8 vmd:ml-0 ml-3">
                  leave the nerdy stuff to us, while you focus on being
                  innovative
                </p>
              </div>
            </Reveal>
            <Reveal
              delay={0.4}
              duration={0.4}
              className="vmd:px-4 px-5 py-6 bg-white  w-full vmd:max-w-[224px] vmd:rounded-[32px] rounded-[16px] shadow-cards"
            >
              <div className="h-full flex vmd:flex-col flex-row vmd:justify-between vmd:items-start items-center">
                <div>
                  <img
                    src="/yellow-heart.svg"
                    className="w-full h-auto max-w-[60px] min-w-[60px]"
                  />
                </div>
                <p className="font-[100] vmd:mt-8 vmd:ml-0 ml-3">
                  we handle all the technical side from the notes taking, to
                  production
                </p>
              </div>
            </Reveal>
            <Reveal
              delay={0.6}
              duration={0.4}
              className="vmd:px-4 px-5 py-6 bg-white  w-full vmd:max-w-[224px] vmd:rounded-[32px] rounded-[16px] shadow-cards"
            >
              <div className="h-full flex vmd:flex-col flex-row vmd:justify-between vmd:items-start items-center">
                <div>
                  <img
                    src="/blue-heart.svg"
                    className="w-full h-auto max-w-[60px] min-w-[60px]"
                  />
                </div>
                <p className="font-[100] vmd:mt-8 vmd:ml-0 ml-3">
                  your success is our ultimate goal, no bosses to satisfy. only
                  you
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="flex-1 h-full relative testimonials z-1 vlg:mt-0 mt-9">
          <div className="w-full max-h-[500px] overflow-hidden z-0 relative">
            <div className="vmd:px-4 px-2 w-full flex flex-col gap-[15px] testimonials-scroller z-0 relative">
              {testimonials.map((testimony, index) => (
                <TestimonialCard
                  key={`${testimony.name}-${index}`}
                  {...testimony}
                />
              ))}
              {testimonials.map((testimony, index) => (
                <TestimonialCard
                  key={`${testimony.name}-${index}`}
                  {...testimony}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
