import { FC } from "react";
import Container from "../general/Container";
import TestimonialCard from "../general/TestimonialCard";
import { testimonials } from "@/constants";

const About: FC = () => {
  return (
    <section className="bg-light-gray">
      <Container className="py-[32px] flex vlg:items-center items-start vlg:flex-row flex-col">
        <div>
          <h2 className="font-[600] text-[32px]">
            We convert your view to success
          </h2>
          <p className="max-w-[680px] text-dark-light mt-[26px]">
            we are a freelancer software development team made of expert
            developers, designers and managers, we manage, design and develop
            the clients projects from an idea to a product that is ready to get
            deployed to production. and guess what, we take care of all that
            painful process!
          </p>
          <div className="mt-[26px] flex gap-[26px] items-center flex-wrap">
            <div className="md:px-4 px-2 py-6 bg-white w-full md:max-w-[224px] rounded-[32px] shadow-cards">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <img src="/purple-heart.svg" />
                </div>
                <p className="font-[100] mt-8">
                  leave the nerdy stuff to us, while you focus on being
                  innovative
                </p>
              </div>
            </div>
            <div className="md:px-4 px-2 py-6 bg-white  w-full md:max-w-[224px] rounded-[32px] shadow-cards">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <img src="/yellow-heart.svg" />
                </div>
                <p className="font-[100] mt-8">
                  we handle all the technical side from the notes taking, to
                  production
                </p>
              </div>
            </div>
            <div className="md:px-4 px-2 py-6 bg-white  w-full md:max-w-[224px] rounded-[32px] shadow-cards">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <img src="/blue-heart.svg" />
                </div>
                <p className="font-[100] mt-8">
                  your success is our ultimate goal, no bosses to satisfy. only
                  you
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full relative testimonials z-1 vlg:mt-0 mt-9">
          <div className="w-full max-h-[500px] overflow-hidden z-0 relative">
            <div className="md:px-4 px-2 w-full flex flex-col gap-[15px] testimonials-scroller z-0 relative">
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
