import React from "react";
import ComponentWrapper from "@/components/shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="w-full shadow-2xl">
    <ComponentWrapper style="">
      <div
        id="about"
        className="w-full min-h-screen flex justify-center items-center overflow-x-hidden"
      >
        <div className="w-full h-full xl:w-[90%]  gap-10 grid grid-cols-1 xl:grid-cols-[1fr,1fr]">
          {/* ==> image */}
          <Fade
            direction="left"
            triggerOnce
            className="w-full flex justify-center items-center"
          >
            <div className="w-full max-w-[300px] md:max-w-[500px] h-[300px] md:h-[480px] relative">
              <Image src="/logo12.png" alt="" fill />
            </div>
          </Fade>
          {/* ===> text */}
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <Fade direction="down" triggerOnce>
              <p className="capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
                about barbie cat
              </p>
            </Fade>
            <Fade direction="right" triggerOnce>
              <p className=" text-white-main xl:text-left text-center whitespace-normal font-comfortaa text-[16px] md:text-[26px] font-normal">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here,
              </p>
            </Fade>
            <Fade direction="right" triggerOnce>
              <p className=" text-white-main xl:text-left text-center whitespace-normal font-comfortaa text-[16px] md:text-[26px] font-normal mt-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </ComponentWrapper>
    </div>
  );
}

export default About;
