"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';
import Link from 'next/link';

export const NavBarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-center py-6">
      <div className="flex justify-between items-center w-[1320px]">
        <div className="flex gap-4">
          <Image src={getImagePath('assets/img/navbar-logo.svg')} alt="" height={42} width={42}/>
          <div className="w-[172px] flex flex-col justify-center">
            <p className="text-[#CEFF7E] text-xl font-bold leading-6 m-0">Tomasz Jąder</p>
            <p className="text-white text-xs font-bold opacity-40 m-0">Fullstack developer</p>
          </div>
        </div>
        
        <div className={`flex items-center justify-center gap-10 ${
          isMenuOpen 
            ? 'flex-col absolute top-[90px] left-0 right-0 bg-[#020916] p-5 gap-5' 
            : 'hidden lg:flex'
        }`}>
          <Link href="#about" className="text-white text-base font-bold leading-5 no-underline" onClick={closeMenu}>
            About
          </Link>
          
          <Link href="#skills" className="text-white text-base font-bold leading-5 no-underline" onClick={closeMenu}>
            Skills
          </Link>
          
          <Link href="#projects" className="text-white text-base font-bold leading-5 no-underline" onClick={closeMenu}>
            Projects
          </Link>
          
          <div className="flex items-center justify-center gap-2">
            <Image src={getImagePath('assets/img/download-button.svg')} alt="" height={20} width={20}/>
            <a 
              href={getImagePath('assets/files/Tomasz_Jader_CV.pdf')} 
              download 
              className="text-white text-base font-bold leading-5 no-underline"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
          
          <Link 
            href="#contact" 
            className="flex px-8 py-3.5 bg-[#CEFF7E] text-[#020916] text-base font-bold leading-5 no-underline rounded-xl"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <button 
          className="flex lg:hidden flex-col justify-between w-[30px] h-[21px] bg-transparent border-0 cursor-pointer p-0 mr-6"
          onClick={toggleMenu}
        >
          <span className={`w-full h-[3px] bg-white transition-all duration-300 ${
            isMenuOpen ? 'transform translate-y-[9px] rotate-45' : ''
          }`}></span>
          <span className={`w-full h-[3px] bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-full h-[3px] bg-white transition-all duration-300 ${
            isMenuOpen ? 'transform -translate-y-[9px] -rotate-45' : ''
          }`}></span>
        </button>
      </div>
    </nav>
  );
};