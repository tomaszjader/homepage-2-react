import React from 'react';
import './InfoSection.css';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';
import Link from 'next/link';

export const InfoSection = () => {
  return (
    <section id="about">
    <div className="about">
        <div className="about-text">
            <h1 className="about-header">My name is Tomasz and I’m a <span className="about-header-custom">Fullstack developer</span> and AI fan.</h1>
            <p className="about-pargrph">You might be interested in checking the list of my <a href="#skills"
                    className="about-pargrph-custom about-link">skills</a>. Don’t forget to have a
                glimpse at my <Link href="#projects" className="about-pargrph-custom about-link">projects</Link>. I’m looking for a new challenges so if
                you have one - <Link href="#contact" className="about-pargrph-custom about-link">contact me</Link> 😊</p>
            <div className="buttons">
                <Link href="#contact" className="about-button-contact about-link link-font">
                    <Image src={getImagePath('assets/img/cloud.svg')} alt="" height="24" width="24" />
                    Get in touch
                </Link>
                <Link className="about-button-know about-link link-font" href="#skills" >
                    <Image src={getImagePath('assets/img/image-user.svg')} alt="" height="24" width="24" />
                    Get to know me
                </Link>
            </div>

        </div>
        <Image src={getImagePath('assets/img/tomaszjader.png')} alt="" className="about-img" height="400" width="400"/>
    </div>
</section>
  );
};