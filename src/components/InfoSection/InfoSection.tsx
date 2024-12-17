import React from 'react';
import './InfoSection.css';

interface InfoSectionProps {
  // props here
}

export const InfoSection: React.FC<InfoSectionProps> = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="about-text">
          <h1 className="about-header">My name is Tomasz and I’m a <span className="about-header-custom">Junior Fullstack developer</span> and AI fan.</h1>

          <p className="about-pargrph">You might be interested in checking the list of my <a href="#skills"
            className="about-pargrph-custom about-link">skills</a>. Don’t forget to have a
            glimpse at my <a href="#projects" className="about-pargrph-custom about-link">projects</a>. I’m looking for a new challenges so if
            you have one - <a href="#contact" className="about-pargrph-custom about-link">contact me</a> 😊</p>
          <div className="buttons">
            <a href="#contact" className="about-button-contact about-link link-font">
              <img src="assets/img/cloud.svg" alt="" height="24" />
              Get in touch
            </a>
            <a className="about-button-know about-link link-font" href="#skills" >
              <img src="assets/img/image-user.svg" alt="" height="24" />
              Get to know me
            </a>
          </div>

        </div>

        <img src="assets/img/47568523.jpg" alt="" className="about-img" height="400" />
      </div>
    </section>
  );
};