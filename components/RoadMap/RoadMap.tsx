import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
// ==> animations
import { Fade } from "react-awesome-reveal";


function RoadMap() {
  return (
    <ComponentWrapper style="py-8">
      <div
        id="roadmap"
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col lg:grid grid-cols-3 gap-4 md:gap-8 justify-center items-center overflow-hidden">
          <p className="lg:hidden block w-full text-center col-span-3 capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
            roadmap
          </p>
          {/* ==> left image */}
          <Fade direction="left" triggerOnce className="w-full h-[320px]">
            <div className="w-full h-full justify-center items-center relative">
              <Image
                src="/logo13.png"
                fill
                className="object-contain"
                alt=""
              />
            </div>
          </Fade>
          {/* ===> text */}
          <div className="w-full flex h-full flex-col justify-between items-center">
            <Fade direction="down" triggerOnce>
              <p className="lg:flex hidden w-full text-center col-span-3 capitalize text-[56px] font-carter font-semibold text-white-main italic">
                roadmap
              </p>
            </Fade>
            <Fade direction="up" triggerOnce>
              <div className="w-full flex min-h-[150px] flex-col justify-center items-center bg-black-main rounded-bl-[30px] rounded-tr-[30px] border-[2px] border-white-main gap-2 p-2">
                <p className="text-white-main text-center font-comfortaa text-[16px] md:text-[22px] font-normal">
                  Phase 1: Meme
                </p>
                <p className="text-white-main text-center font-comfortaa text-[16px] md:text-[22px] font-normal">
                  Phase 2: Vibe and HODL
                </p>
                <p className="text-white-main text-center font-comfortaa text-[16px] md:text-[22px] font-normal">
                  Phase 3: Generational wealth
                </p>
              </div>
            </Fade>
          </div>
          {/* ==> right image */}
          <Fade direction="right" triggerOnce className="h-[320px] w-full">
            <div className="w-full h-full justify-center items-center relative">
              <Image src="/logo12.png" fill className="object-contain" alt="" />
            </div>
          </Fade>
          {/*  */}
          <div className="w-full col-span-3 flex justify-center items-center mt-10">
            <Fade
              direction="up"
              triggerOnce
              className="w-full text-center md:w-[70%]"
            >
              <p className=" text-white-main font-comfortaa text-[16px] md:text-[22px] font-normal">
                All jokes aside, here is a rough sketch of $pepes path ahead. We
                dont want to give everything away on day 1, Expect surprises
                along the way ;)
              </p>
            </Fade>
          </div>
        </div>
        {/* ===> phases */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 mb-14">
          {RoadMapData.map((road, index) => {
            return (
              <Fade key={index} direction="up" triggerOnce>
                <div className="w-full h-full flex flex-col justify-start items-center rounded-bl-[30px] rounded-tr-[30px] border-[2px] border-white-main mt-10 bg-black-main pt-4">
                  <p className="w-full text-center capitalize text-[26px] md:text-[50px] font-carter font-semibold text-white-main italic">
                    {road.phase}
                  </p>
                  <Fade direction="down" triggerOnce delay={100}>
                    <ul className=" list-disc flex flex-col gap-2 px-12 mt-4">
                      {road.list.map((list, index) => {
                        return (
                          <li
                            key={index}
                            className="text-white-main font-comfortaa text-[16px] md:text-[22px] font-normal"
                          >
                            {list}
                          </li>
                        );
                      })}
                    </ul>
                  </Fade>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </ComponentWrapper>
  );
}

const RoadMapData = [
  {
    phase: "phase 1",
    list: [
      "Launch",
      "CoinGecko/Coinmarketcap Listings",
      "1,000+ Holders",
      "Get $PEPE Trending on twitter with our memetic power",
    ],
  },
  {
    phase: "phase 2",
    list: [
      "Community Partnerships Pepe Times digital newsletter",
      "Formation of token gated discord group, Pepe Palace, for holders, more details tba",
      "CEX Listings 10,000+holders",
    ],
  },
  {
    phase: "phase 3",
    list: [
      "Pepe themed merch, % revenues to $pepe buy and burn",
      "Pepe Academy: details tba",
      "Pepe Tools: details tba",
      "T1 Exchange Listings 100,000+ holders",
      "Flip Bitcoin",
    ],
  },
];

export default RoadMap;
