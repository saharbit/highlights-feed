import React from "react";
import MobileNavbar from "./MobileNavbar";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
      <MobileNavbar />
    </div>
  );
};

export default Layout;
