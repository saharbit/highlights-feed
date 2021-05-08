import React from "react";
import MobileTabs from "./MobileTabs";
import Head from "next/head";
import MobileHeader from "./MobileHeader";
import MobileFilters from "./MobileFilters";

const Layout = ({ children, title }) => {
  return (
    <div className="flex max-w-screen-xl mx-auto min-h-screen">
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
      {/*<MobileFilters />*/}
      <div className="mt-12 md:mt-0 flex w-full">{children}</div>
      <MobileTabs />
    </div>
  );
};

export default Layout;
