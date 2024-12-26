import React from 'react';
import Image from 'next/image';
import './NavBarSection.css';
import { getImagePath } from '@/src/utils/utils';
import Link from 'next/link';

export const NavBarSection = () => {
  return (
    <nav className="hero hero-gap">
    <div className="nav-bar">
        <div className="hero hero-section">
            <Image src={getImagePath('assets/img/navbar-logo.svg')} alt="" height={42} width={42}/>
            <div className="my">
                <p className="my-name">Tomasz Jąder</p>
                <p className="my-title">Junior Fullstack developer</p>
            </div>
        </div>
        <div className="hero nav-items">
            <Link href="#about" className="nav-item">About</Link>
    
            <Link href="#skills" className="nav-item">Skills</Link>
    
            <Link href="#projects" className="nav-item">Projects</Link>
    
            <div className="nav-item-resume">
                <Image src={getImagePath('assets/img/download-button.svg')} alt="" height={20} width={20}/>
    
                <Link href="assets/files/TomaszJąderCV.pdf"  download="TomaszJąderCV.pdf" className="nav-item">Resume</Link>
    
            </div>
    
            <Link href="#contact" className="nav-item-contact">Contact</Link>
        </div>
    </div>
</nav>
  );
};