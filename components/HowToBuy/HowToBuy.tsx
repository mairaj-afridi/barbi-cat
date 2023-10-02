import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function HowToBuy() {
  return (
    <ComponentWrapper style="py-8">
      <div
        id="howToBuy"
        className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden"
      >
        <Fade direction="down" triggerOnce>
          <p className="capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
            how to buy
          </p>
        </Fade>
        {[
          HowToBuyData.map((item, index) => {
            return (
                  <Fade key={index} direction="down" delay={300} triggerOnce>
                <div
                  className="w-full grid grid-cols-1 lg:grid-cols-[0.4fr,1.2fr] lg:gap-0 gap-6 shadow-xl rounded-bl-[30px] rounded-tr-[30px] bg-black-main border-[2px] border-white-main p-8 justify-center items-center mt-4 lg:mt-8"
                >
                  {/* ===> image */}
                  <div className="w-full flex justify-center items-center">
                    <div
                      className={`w-full ${
                        item.name === "Switch ETH for $PEPE"
                          ? "max-w-[360px] w-full lg:max-w-unset"
                          : "max-w-[160px]"
                      }  h-[160px] relative`}
                    >
                      <Image src={item.image} alt="" fill />
                    </div>
                  </div>
                  {/* ===> text */}
                  <div className="w-full flex flex-col gap-2 justify-center items-center lg:items-start">
                    <p className="capitalize text-[30px] md:text-[50px] text-center font-carter font-semibold text-white-main italic">
                      {item.name}
                    </p>
                    <p className="text-white-main font-comfortaa text-[16px] lg:text-[22px] font-normal text-center lg:text-left">
                      {item.dec}
                    </p>
                  </div>
                </div>
              </Fade>
            );
          }),
        ]}
      </div>
    </ComponentWrapper>
  );
}

const HowToBuyData = [
  {
    name: "Create a Wallet",
    dec: "download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
    image: "/assets/howToBuy/1.webp",
  },
  {
    name: "Get Some ETH",
    dec: "have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
    image: "/assets/howToBuy/2.png",
  },
  {
    name: "Go to Uniswap",
    dec: "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.",
    image: "/assets/howToBuy/3.png",
  },
  {
    name: "Switch ETH for $PEPE",
    dec: "switch ETH for $PEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
    image: "/assets/howToBuy/4.png",
  },
];

export default HowToBuy;
