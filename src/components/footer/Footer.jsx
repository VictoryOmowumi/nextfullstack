import React from "react";
import Image from "next/image";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between items-center pt-8 pb-2 ">
      <div className="text-slate-500">
        @ {year} <span className="text-primary">Victo</span>
        <span className="text-black">Rious</span>. All Rights Reserved.
      </div>
      <div className="flex gap-4 mt-4">
        <Image src="/1.png" width={30} height={30} alt="logo" />
        <Image src="/2.png" width={30} height={30} alt="logo" />
        <Image src="/3.png" width={30} height={30} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
