import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';
import './FooterSection.css';


export const FooterSection: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <h2 className="footer__header">Let’s work together</h2>
      <h3 className="footer__pargraph">I’m open for new opportunities. <br/>If you have one for me we should talk!</h3>
      <a className="footer__button" href="mailto:tomasz.jader@gmail.com"><Image src={getImagePath('assets/img/mail.svg')} alt="" height={24} width={24} /><span>tomasz.jader@gmail.com</span></a>
      <p className="footer__pargraph-custom">or find me on</p>
    <div className="footer__buttons">
        <a href="https://github.com/tomaszjader/" className="footer__buttons-social"><Image src={getImagePath('assets/img/github.svg')} alt="" height={24} width={24} /></a>
        <a href="https://www.linkedin.com/in/tomasz-j%C4%85der-a25427200/" className="footer__buttons-social"><Image src={getImagePath('assets/img/linkedin.svg')} alt="" height={24} width={24} /></a>
        <a href="https://www.instagram.com/leonardo_davidoff/" className="footer__buttons-social"><Image src={getImagePath('assets/img/instagram.svg')} alt="" height={24} width={24} /></a> 
    </div> 
</footer>
  );
};