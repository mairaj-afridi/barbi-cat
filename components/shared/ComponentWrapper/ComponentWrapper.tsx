import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  style?: string;
}

function ComponentWrapper({ children, style }: Props) {
  return (
    <div className={`w-full ${style}`}>
      <div className="w-full h-full max-w-[1280px]  m-auto md:px-8 px-2">
        {children}
      </div>
    </div>
  );
}

export default ComponentWrapper;
