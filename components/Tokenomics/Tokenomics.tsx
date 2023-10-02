import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function Tokenomics() {
  return (
    <ComponentWrapper style="py-8">
      <div
        id="tokenomics"
        className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden"
      >
        <Fade direction="down" triggerOnce>
          <p className="capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
            AHY BARBIE CAT
          </p>
        </Fade>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-4 md:mt-10">
          {/* ==> left */}
          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <Fade direction="down" triggerOnce>
              <p className="w-full text-center text-[22px] md:text-[36px] leading-[44px] font-carter font-semibold text-white-main italic">
                Token Supply: <br /> 420,690,000,000,000
              </p>
            </Fade>
            <Fade direction="left" triggerOnce>
              <div className="w-full flex flex-col gap-4 md:gap-8 bg-black-main p-6 rounded-bl-[30px] rounded-tr-[30px] border-[2px] border-white-main text-white-main font-comfortaa text-[16px] md:text-[20px] font-normal">
                <p>No Taxes, No Bullshit. Its that simple.</p>
                <p>
                  93.1% of the tokens were sent to the liquidity pool, LP tokens
                  were burnt, and contract is renounced. The remaining 6.9% of
                  the supply is being held in a multi-sig team wallet only to be
                  used as tokens for future centralized exchange listings,
                  bridges, and liquidity pools. This wallet is easily trackable
                  with the ENS name “pepecexwallet.eth”
                </p>
              </div>
            </Fade>
          </div>
          {/* ===> right */}
          <Fade direction="right" triggerOnce>
            <div className="w-full h-[300px] md:h-[470px] relative">
              <Image
                src="/assets/tokenomics.png"
                fill
                className="object-contain"
                alt=""
              />
            </div>
          </Fade>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Tokenomics;
