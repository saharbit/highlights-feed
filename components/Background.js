import React from "react";
import Image from "next/image";

const Background = () => {
  return (
    <div className="fixed w-screen h-screen opacity-20">
      <Image src="/bg.jpg" alt="Background" layout="fill" objectFit="cover" />
    </div>
  );
};

export default Background;
