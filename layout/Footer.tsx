import ComponentWrapper from '@/components/shared/ComponentWrapper/ComponentWrapper'
import React from 'react'


const Footer = () => {
  return (
    <div className="w-full mt-14 footerShadow">
   <ComponentWrapper style='py-8'>
      <div className="w-full  h-[90px] md:h-[150px] flex justify-center items-center">
          <p className="text-[12px] md:text-[18px] text-white-main">
            © copy right Barbie Cat !
          </p>
      </div>
    </ComponentWrapper>
  </div>
  )
}

export default Footer