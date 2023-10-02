import React from "react";
import ComponentWrapper from "../shared/ComponentWrapper/ComponentWrapper";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { Fade, Bounce } from "react-awesome-reveal";

function Contact() {
  return (
    <ComponentWrapper style="py-8">
      <div className="w-full min-h-screen flex flex-col gap-4 md:gap-10 justify-center items-center overflow-x-hidden">
        <Fade direction="up" triggerOnce>
          <p className="w-full text-center col-span-3 capitalize text-[30px] md:text-[56px] font-carter font-semibold text-white-main italic">
            contact
          </p>
        </Fade>
        {/* ==> logo */}
        <Fade direction="up" delay={100} triggerOnce>
          <div className="w-[140px] h-[130px] relative">
            <Image
              src="/logo.png"
              fill
              alt="logo-image"
              className="object-contain"
            ></Image>
          </div>
        </Fade>
        {/* => email */}
        <Fade direction="up" triggerOnce delay={100}>
          <p className="text-white-main font-comfortaa text-[16px] md:text-[22px] font-normal">
            email: masterpepe@pepe.vip
          </p>
        </Fade>
        {/* ===> social */}
        <div className="w-full flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {ContactSocial.map((soci, index) => {
            return (
              <Bounce triggerOnce key={index}>
                <Link
                  href={soci.path}
                  className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] bg-black-main flex justify-center items-center rounded-full hover:scale-110 transition-transform duration-300"
                >
                  {soci.icon}
                </Link>
              </Bounce>
            );
          })}
        </div>
        <Fade direction="left" triggerOnce>
          <p className="max-w-[860px] w-full text-center text-white-main font-comfortaa text-[16px] md:text-[22px] font-normal mt-4 md:mt-0">
            $pepe coin has no association with Matt Furie or his creation Pepe
            the Frog. This token is simply paying homage to a meme we all love
            and recognize.
          </p>
        </Fade>
        <Fade direction="right" triggerOnce>
          <p className="max-w-[860px] w-full text-center text-white-main font-comfortaa text-[16px] md:text-[22px] font-normal">
            $PEPE is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </Fade>
      </div>
    </ComponentWrapper>
  );
}

const ContactSocial = [
  {
    path: "#",
    icon: (
      <FaTelegramPlane className="text-[30px] md:text-[56px] text-white-main" />
    ),
  },
  {
    path: "#",
    icon: (
      <AiOutlineTwitter className="text-[30px] md:text-[56px] text-white-main" />
    ),
  },
  {
    path: "#",
    icon: <FaDiscord className="text-[30px] md:text-[56px] text-white-main" />,
  },
];

export default Contact;
