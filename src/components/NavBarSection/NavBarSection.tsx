"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import './NavBarSection.css';
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
    <nav className="hero hero-gap">
    <div className="nav-bar">
        <div className="hero hero-section">
            <Image src={getImagePath('assets/img/navbar-logo.svg')} alt="" height={42} width={42}/>
            <div className="my">
                <p className="my-name">Tomasz Jąder</p>
                <p className="my-title">Fullstack developer</p>
            </div>
        </div>
        <div className={`hero nav-items ${isMenuOpen ? 'nav-items-mobile' : ''}`}>
            <Link href="#about" className="nav-item" onClick={closeMenu}>About</Link>
    
            <Link href="#skills" className="nav-item" onClick={closeMenu}>Skills</Link>
    
            <Link href="#projects" className="nav-item" onClick={closeMenu}>Projects</Link>
    
            <div className="nav-item-resume">
                <Image src={getImagePath('assets/img/download-button.svg')} alt="" height={20} width={20}/>
    
                <a 
                    href={getImagePath('assets/files/TomaszJąderCV.pdf')} 
                    download 
                    className="nav-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                >
                    Resume
                </a>
    
            </div>
    
            <Link href="#contact" className="nav-item-contact" onClick={closeMenu}>Contact</Link>
        </div>

        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
    </div>
</nav>
  );
};