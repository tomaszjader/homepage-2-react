import React from 'react';
import Image from 'next/image';
import './NavBarSection.css';

interface NavBarSectionProps {
  // props here
}

export const NavBarSection: React.FC<NavBarSectionProps> = () => {
  return (
    <nav className="hero hero-gap">
    <div className="nav-bar">
        <div className="hero hero-section">
            <Image src={`assets/img/navbar-logo.svg`} alt="" height={42} width={42}/>
            <div className="my">
                <p className="my-name">Tomasz Jąder</p>
                <p className="my-title">Junior Fullstack developer</p>
            </div>
        </div>
        <div className="hero nav-items">
            <a href="#about" className="nav-item">About</a>
    
            <a href="#skills" className="nav-item">Skills</a>
    
            <a href="#projects" className="nav-item">Projects</a>
    
            <div className="nav-item-resume">
                <Image src={`assets/img/download-button.svg`} alt="" height={20} width={20}/>
    
                <a href="assets/files/TomaszJąderCV.pdf"  download="TomaszJąderCV.pdf" className="nav-item">Resume</a>
    
            </div>
    
            <a href="#contact" className="nav-item-contact">Contact</a>
        </div>
    </div>
    
</nav>
  );
};