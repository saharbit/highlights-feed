import React from "react";
import MobileTabs from "./MobileComponents/MobileTabs";
import Head from "next/head";
import MobileHeader from "./MobileComponents/MobileHeader";

const Layout = ({ children, title }) => {
  return (
    <div className="relative max-w-screen-xl mx-auto">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MobileHeader />
      <div className="flex mt-12 md:mt-0 min-h-screen mb-2">{children}</div>
      <MobileTabs />
    </div>
  );
};

export default Layout;
