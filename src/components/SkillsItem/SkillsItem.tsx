import React from 'react';
import './SkillsItem.css';
interface SkillsItemProps {
  skillsArray: string[];
  skillsHeader: string;
  skillsImage: string;
}

export const SkillsItem: React.FC<SkillsItemProps> = ({ skillsArray, skillsHeader, skillsImage }) => {
  return (
    <div>
      <section className="skills-item">
        <img 
          className="skills-item__specific-image" 
          src={skillsImage} 
          alt="" 
          style={{ height: '180px' }}
        />
        <article className="skills-item__specific">
          <img className="line" src="/assets/img/myslnik.svg" alt="" />
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