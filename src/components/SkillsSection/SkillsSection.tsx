import React from 'react';
import { SkillsItem } from '@/src/components/SkillsItem/SkillsItem';
import './SkillsSection.css';


export const SkillsSection: React.FC = () => {
  const workingKnowledgeArray: string[] = ['— Semantic HTML5', '— Flexbox',
    '— Markdown', '— Figma', '— CSS grid', '— Forms',
    '— SASS', '— TypeScript','— JavaScript ES6 + features','— Git','— Working with API','— Angular'];
  const knowSomethingAboutArray: string[] = ['— React', '— Ruby',
    '— Flask', '— Figma', '— make.com', '— LLM',
    '— OpenAI API'];
  const wantToLearnArray: string[] = ['— Node JS', '— Electron',
    '— Server side rendering', '— Gatsby', '— Websockets'];
  return (
    
<section className="skills" id="skills">
    <article>
        <div className="skills__content">
            <h2 className="skills__content-header">MY SKILLS</h2>
            <h3 className="skills__content-paragraf">I&apos;ve picked up some cool skills along the way, and I&apos;m excited to share them with you. Check out what I can do below!</h3> 
        </div>
        
        <div className  ="skills__boxs">
            <SkillsItem
            skillsArray = {workingKnowledgeArray}
            skillsHeader = "Working knowledge"
            skillsImage = "assets/img/trangle.svg"
            ></SkillsItem>
            <SkillsItem
            skillsArray = {knowSomethingAboutArray}
            skillsHeader = "Know something about"
            skillsImage = "assets/img/elicpse.svg"
            ></SkillsItem>
            <SkillsItem    
            skillsArray = {wantToLearnArray}
            skillsHeader = "Want to learn"
            skillsImage = "assets/img/test.svg"
            ></SkillsItem>
        </div>
    </article>
</section>
  );
};