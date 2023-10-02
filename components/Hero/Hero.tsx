import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { Fade,Zoom } from "react-awesome-reveal";

function Hero() {
  return (
    <ComponentWrapper style="py-8 lg:py-0">
      <div
        id="home"
        className="w-full min-h-[calc(100vh-150px)] flex justify-center items-center overflow-hidden"
      >
        <div className="w-full h-full xl:w-[90%] grid grid-cols-1 lg:grid-cols-[1fr,1fr] lg:gap-0 gap-4">
          {/* ===> left portion */}
          <div className="w-full flex flex-col gap-3 md:gap-6 justify-center items-start">
            <Fade direction="left" duration={1500} triggerOnce className="w-full lg:text-left text-center">
              <p className="w-full capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
                barbie cat
              </p>
              <p className="text-white-main text-center lg:text-left font-comfortaa text-[20px] md:text-[26px] font-normal">
                the most memeable memecoin in existence. The dogs have had their
                day, it’s time for Pepe to take reign.
              </p>
            </Fade>
            {/* ===> social links */}
            <Zoom triggerOnce>
              <div className="w-full flex flex-wrap justify-center lg:justify-start items-center gap-3">
                {SocialLinks.map((soc, index) => {
                  return (
                    <>
                      {index === 0 || index === 1 ? (
                        <Link
                          key={index}
                          href="#"
                          className="w-[50px] md:w-[65px] h-[50px] md:h-[65px] rounded-full hover:scale-110 transition-transform duration-300 flex justify-center items-center bg-black-main"
                        >
                          {soc.icon}
                        </Link>
                      ) : (
                        <Link key={index} href="#">
                          <div className="w-[48px] md:w-[67px] h-[48px] md:h-[67px] relative">
                            <Image
                              src={`${soc.icon}`}
                              fill
                              className="object-contain hover:scale-110 transition-transform duration-300"
                              alt=""
                            ></Image>
                          </div>
                        </Link>
                      )}
                    </>
                  );
                })}
              </div>
            </Zoom>
          </div>
          {/* ==> right postion */}
          <Fade
            direction="right"
            duration={1500}
            triggerOnce
            className="w-full flex justify-center lg:justify-end items-center"
          >
            <div className="w-full flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[300px] md:max-w-[430px] h-[300px] md:h-[420px] relative">
                <Image src="/logo12.png" fill alt=""></Image>
              </div>
            </div>
          </Fade>
          {/* ====> buttons */}
          <div className="w-full col-span-1 lg:col-span-3 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            {/* 1 button */}
            <Fade direction="up" triggerOnce>
              <div className="w-[200px] h-[58px] flex justify-center hover:bg-white-main/20 items-center border-[2px] border-white-main rounded-[30px]">
                <button className="lowercase text-[22px] font-semibold text-white-main flex justify-center items-center gap-1">
                  buy now
                </button>
              </div>
            </Fade>
           
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

const SocialLinks = [
  {
    path: "",
    icon: (
      <AiOutlineTwitter className="text-[30px] md:text-[50px] text-white-main" />
    ),
  },
  {
    path: "",
    icon: (
      <FaTelegramPlane className="text-[30px] md:text-[50px] text-white-main" />
    ),
  },
  {
    path: "",
    icon: "/assets/social/7.webp.png",
  },
  {
    path: "",
    icon: "/assets/social/5.webp.png",
  },
  {
    path: "",
    icon: "/assets/social/3.png",
  },
  {
    path: "",
    icon: "/assets/social/9.webp.png",
  },
  {
    path: "",
    icon: "/assets/social/6.webp.png",
  }
];

export default Hero;
