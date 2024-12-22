import React from 'react';
import './SkillsItem.css';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';

interface SkillsItemProps {
  skillsArray: string[];
  skillsHeader: string;
  skillsImage: string;
}

export const SkillsItem: React.FC<SkillsItemProps> = ({ skillsArray, skillsHeader, skillsImage }) => {
  return (
    <div>
      <section className="skills-item">
        <Image 
          className="skills-item__specific-image"
          src={getImagePath(skillsImage)}
          alt="skills icon"
          width={180}
          height={180}
        />
        <article className="skills-item__specific">
          <div className="line-container">
            <Image 
              className="line" 
              src={getImagePath('assets/img/myslnik.svg')} 
              alt="" 
              width={2000}
              height={1}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
          <p className="skills-item__specific-header">{skillsHeader}</p>
          {skillsArray.map((item, index) => (
            <p key={index} className="skills-item__specific-item">
              {item}
            </p>
          ))}
        </article>
      </section>
    </div>
  );
};