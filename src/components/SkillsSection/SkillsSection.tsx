import React from 'react';
import { SkillsItem } from '@/src/components/SkillsItem/SkillsItem';
import './SkillsSection.css';
interface SkillsSectionProps {
  // props here
}

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  return (
    
<section className="skills" id="skills">
    <article>
        <div className="skills__content">
            <h2 className="skills__content-header">MY SKILLS</h2>
            <h3 className="skills__content-paragraf">I've picked up some cool skills along the way, and I'm excited to share them with you. Check out what I can do below!</h3> 
        </div>
        
        <div className  ="skills__boxs">
            <SkillsItem
            skillsArray = {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']}
            skillsHeader = "Working knowledge"
            skillsImage = "/assets/img/trangle.svg"
            ></SkillsItem>
            <SkillsItem
            skillsArray = {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']}
            skillsHeader = "Know something about"
            skillsImage = "/assets/img/elicpse.svg"
            ></SkillsItem>
            <SkillsItem    
            skillsArray = {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']}
            skillsHeader = "Want to learn"
            skillsImage = "/assets/img/test.svg"
            ></SkillsItem>
        </div>
    </article>
</section>
  );
};