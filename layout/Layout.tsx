import React, { ReactNode } from "react";
import Navibar from "./Navibar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <Navibar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;