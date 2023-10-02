import React from "react";
import ComponentWrapper from "@/components/shared/ComponentWrapper/ComponentWrapper";

function Footer() {
  return (
    <div className="w-full mt-14 footerShadow">
      <ComponentWrapper style="">
        <div className="w-full  h-[90px] md:h-[150px] flex justify-center items-center">
          <p className="text-[12px] md:text-[18px] text-white-main">
            © copy right Barbie Cat !
          </p>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default Footer;