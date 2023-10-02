import React from "react";
import Image from "next/image";

interface Props {
    image:string;
    status:string;
    name:string;
}

function TeamCart({ image,status,name }:Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 px-10 md:px-4 xl:px-0">
      {/* member image */}
      <div className="w-full h-[300px] sm:h-[520px] md:h-[320px] lg:h-[460px] relative ">
        <Image
          src={image}
          fill
          alt="seo text here"
          className="border-4 border-solid border-green rounded-[70px]"
        ></Image>
      </div>
      {/* member name */}
      <p className="font-carter font-semibold text-white-main h-auto sm:h-[80px] xl:h-auto text-center font-Net text-[24px] md:text-[30px]">
        {name}
      </p>
      {/* status */}
      <p className="font-carter  text-white-main text-[18px] h-auto sm:h-[40px] xl:h-auto xl:text-[22px] text-center font-BicycleThin text-darkWhite">
        {status}
      </p>
    </div>
  );
}

export default TeamCart;