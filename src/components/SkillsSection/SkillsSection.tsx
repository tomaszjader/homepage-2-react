import React from 'react';
import { SkillsItem } from '@/src/components/SkillsItem/SkillsItem';

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
    <section className="flex items-center justify-center flex-col my-[120px]" id="skills">
      <article>
        <div className="md:mx-6">
          <h2 className="text-[20px] text-gray-400 ml-auto">MY SKILLS</h2>
          <h3 className="text-white text-[40px] font-medium w-auto md:w-[864px] mb-20">I&apos;ve picked up some cool skills along the way, and I&apos;m excited to share them with you. Check out what I can do below!</h3> 
        </div>
        
        <div className="flex justify-center items-center gap-4 md:flex-row flex-col">
          <SkillsItem
            skillsArray={workingKnowledgeArray}
            skillsHeader="Working knowledge"
            skillsImage="assets/img/trangle.svg"
          />
          <SkillsItem
            skillsArray={knowSomethingAboutArray}
            skillsHeader="Know something about"
            skillsImage="assets/img/elicpse.svg"
          />
          <SkillsItem    
            skillsArray={wantToLearnArray}
            skillsHeader="Want to learn"
            skillsImage="assets/img/test.svg"
          />
        </div>
      </article>
    </section>
  );
};