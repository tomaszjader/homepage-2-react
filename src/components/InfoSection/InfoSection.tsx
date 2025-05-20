import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';
import Link from 'next/link';

export const InfoSection = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center m-0">
      <div className="flex justify-center items-center m-[120px_64px] gap-36 w-[1320px] max-lg:flex-col-reverse max-lg:w-auto max-lg:p-0 max-lg:gap-0 max-lg:mx-6">
        <div className="about-text">
          <h1 className="text-white text-5xl font-bold">
            My name is Tomasz and I&apos;m a <span className="text-[#ceff7e]">Fullstack developer</span> and AI fan.
          </h1>
          <p className="text-gray-400 text-2xl font-medium">
            If you might be interested in my <a href="#skills" className="text-white no-underline">skills</a> please check the list. Don&apos;t forget to take a quick look at my new <Link href="#projects" className="text-white no-underline">projects</Link>. I&apos;m looking for new challenges so if you have one don&apos;t hesitate to <Link href="#contact" className="text-white no-underline">contact me</Link> 😊
          </p>
          <div className="flex gap-4 mt-16 max-lg:flex-col">
            <Link 
              href="#contact" 
              className="flex items-center gap-3 px-8 py-3.5 rounded-[20px] bg-[#ceff7e] text-[#020916] text-xl font-bold font-arial no-underline max-lg:w-[188px]"
            >
              <Image src={getImagePath('assets/img/cloud.svg')} alt="" height="24" width="24" />
              Get in touch
            </Link>
            <Link 
              href="#skills" 
              className="flex items-center gap-3 px-8 py-3.5 rounded-[20px] border-2 border-[#1f2937] bg-[#020916] text-[#ceff7e] text-xl font-bold font-arial no-underline max-lg:w-[221px]"
            >
              <Image src={getImagePath('assets/img/image-user.svg')} alt="" height="24" width="24" />
              Get to know me
            </Link>
          </div>
        </div>
        <Image 
          src={getImagePath('assets/img/tomaszjader.jpg')} 
          alt="" 
          className="w-[400px] h-[400px] rounded-[16px_200px_16px_16px] bg-[#d2d5da] object-cover max-lg:w-[300px] max-lg:h-[300px] max-sm:w-[280px] max-sm:h-[280px]" 
          height="400" 
          width="400"
        />
      </div>
    </section>
  );
};