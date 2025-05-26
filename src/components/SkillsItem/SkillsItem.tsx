import React from 'react';
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
      <section className="bg-[#1f2937] rounded-[20px] w-[426.67px] text-white border border-[#020916] bg-gradient-to-br from-white/10 to-white/[0.04] shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset] backdrop-blur-[5px] max-lg:w-[327px] max-sm:w-[272px]">
        <Image 
          className="p-10"
          src={getImagePath(skillsImage)}
          alt="skills icon"
          width={180}
          height={180}
        />
        <article className="p-[20px_40px_40px_40px] h-[462px]">
          <div className="line-container">
            <Image 
              className="w-full h-[1px] object-cover max-lg:w-[247px] max-sm:w-[192px] max-sm:h-[3px]"
              src={getImagePath('assets/img/myslnik.svg')} 
              alt="" 
              width={2000}
              height={1}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
          <p className="text-2xl my-3">{skillsHeader}</p>
          {skillsArray.map((item, index) => (
            <p key={index} className="text-sm">
              {item}
            </p>
          ))}
        </article>
      </section>
    </div>
  );
};