import React from "react";
import MobileTabs from "./MobileComponents/MobileTabs";
import Head from "next/head";
import MobileHeader from "./MobileComponents/MobileHeader";

const Layout = ({ children, title }) => {
  return (
    <div className="relative">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <MobileHeader />
      <div className="flex mt-12 md:mt-0 min-h-screen mb-2">{children}</div>
      <MobileTabs />
    </div>
  );
};

export default Layout;
