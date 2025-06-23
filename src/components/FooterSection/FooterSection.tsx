import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';
import Link from 'next/link';

export const FooterSection: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center text-white my-[120px] mx-0 md:mx-6" id="contact">
      <h2 className="text-[40px] font-bold m-0 text-center">Let&apos;s work together</h2>
      <h3 className="text-[#9ca3af] text-2xl font-medium text-center mt-4 mb-0">I&apos;m open for new opportunities. <br/>If you have one for me we should talk!</h3>
      <Link 
        className="w-[312px] h-16 rounded-[20px] bg-[#ceff7e] flex items-center justify-center gap-3 text-xl font-bold text-black my-10 mx-0 no-underline hover:opacity-90 xs:w-[272px] xs:text-[17px]"
        href="mailto:tomasz.jader@gmail.com"
      >
        <Image src={getImagePath('assets/img/mail.svg')} alt="" height={24} width={24} />
        <span>tomasz.jader@gmail.com</span>
      </Link>
      <p className="text-[#9ca3af] font-medium text-2xl mb-6 mt-0">or find me on</p>
      <div className="flex gap-4">
        <Link 
          href="https://github.com/tomaszjader/" 
          className="rounded-full bg-gradient-to-br from-white/10 to-white/[0.04] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.15)] backdrop-blur-[5px] p-4 flex items-center hover:opacity-90"
        >
          <Image src={getImagePath('assets/img/github.svg')} alt="" height={24} width={24} />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/tomasz-j%C4%85der-a25427200/" 
          className="rounded-full bg-gradient-to-br from-white/10 to-white/[0.04] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.15)] backdrop-blur-[5px] p-4 flex items-center hover:opacity-90"
        >
          <Image src={getImagePath('assets/img/linkedin.svg')} alt="" height={24} width={24} />
        </Link>
        <Link 
          href="https://www.instagram.com/leonardo_davidoff/" 
          className="rounded-full bg-gradient-to-br from-white/10 to-white/[0.04] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.15)] backdrop-blur-[5px] p-4 flex items-center hover:opacity-90"
        >
          <Image src={getImagePath('assets/img/instagram.svg')} alt="" height={24} width={24} />
        </Link>
      </div>
    </footer>
  );
};