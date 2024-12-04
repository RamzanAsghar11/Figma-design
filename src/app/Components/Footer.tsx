import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#043873] h-[461px] w-[1920px] py-[140px] px-[220px] text-white">
      {/* Top Section */}
      <div className="flex gap-[200px]">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col gap-[15px] w-1/2">
          <Image src="/Logo.png" width={190} height={34} alt="logo" />
          <p className="font-normal text-lg leading-8">
            whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Columns Section */}
        <div className="flex flex-col gap-[15px] w-1/2">
          <div className="flex flex-col gap-[15px]">
            <p className="font-bold text-lg leading-5">Product</p>
            <p className="text-[#FFE492] font-normal text-[16px] leading-5">Overview</p>
            <p className="font-normal text-[16px] leading-5">Pricing</p>
            <p className="font-normal text-[16px] leading-5">Customer Stories</p>
          </div>
        </div>

        <div className="flex flex-col gap-[15px] w-1/2">
          <p className="font-bold text-lg leading-5">Resources</p>
          <p className="font-normal text-[16px] leading-5">Blogs</p>
          <p className="font-normal text-[16px] leading-5">Guides & Tutorials</p>
          <p className="font-normal text-[16px] leading-5">Help Center</p>
        </div>

        <div className="flex flex-col gap-[15px] w-1/2">
          <p className="font-bold text-lg leading-5">Company</p>
          <p className="font-normal text-[16px] leading-5">About Us</p>
          <p className="font-normal text-[16px] leading-5">Careers</p>
          <p className="font-normal text-[16px] leading-5">Media Kit</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] mt-[50px]"></div>

      {/* Bottom Section */}
      <p className="text-center mt-[20px]">©2021 Whitepace LLC.</p>
    </div>
  );
};

export default Footer;
