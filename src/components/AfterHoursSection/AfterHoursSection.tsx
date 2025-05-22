import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';

interface AfterHoursSectionProps {
  children?: React.ReactNode;
}

export const AfterHoursSection: React.FC<AfterHoursSectionProps> = () => {
  return (
    <div className="my-[120px]">
      <div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex justify-center flex-col w-[1320px] max-lg:w-auto">
            <h2 className="text-[#9ca3af] text-xl font-bold leading-6 tracking-[1px] uppercase">
              After Hours
            </h2>
            <p className="text-white text-[40px] font-medium leading-[48px] tracking-[-0.8px]">
              Outside of my regular working hours, I delve into an array of activities
              and passions. Here&apos;s a glimpse into how I spend my after-hours.
            </p>
          </div>

          <div className="flex items-baseline justify-center gap-4 max-lg:flex-col max-lg:items-center">
            <div className="flex gap-4 justify-center items-center max-md:flex-col">
              <div className="w-[316px] max-sm:w-[272px]">
                <Image
                  className="rounded-[20px]"
                  src={getImagePath("assets/img/ai.jpg")}
                  alt=""
                  width={320}
                  height={480}
                />
                <h4 className="text-white text-2xl font-bold">Artificial Intelligence</h4>
                <p className="text-[#9ca3af] text-base">
                  After work I test LLM and automate my work
                </p>
              </div>
              <div className="w-[316px] max-sm:w-[272px]">
                <Image
                  className="rounded-[20px]"
                  src={getImagePath("assets/img/travel.jpg")}
                  alt=""
                  width={320}
                  height={480}
                />
                <h4 className="text-white text-2xl font-bold">Travel</h4>
                <p className="text-[#9ca3af] text-base">
                  In my spare time in love with foreign travel and new adventures
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center max-md:flex-col">
              <div className="w-[316px] max-sm:w-[272px]">
                <Image
                  className="rounded-[20px]"
                  src={getImagePath("assets/img/chess.png")}
                  alt=""
                  width={316}
                  height={480}
                />
                <h4 className="text-white text-2xl font-bold">Chess</h4>
                <p className="text-[#9ca3af] text-base">
                  Lost in strategic battles, I find joy and challenge in the timeless world of chess.
                </p>
              </div>
              <div className="w-[316px] max-sm:w-[272px]">
                <Image
                  className="rounded-[20px]"
                  src={getImagePath("assets/img/gim.png")}
                  alt=""
                  width={316}
                  height={480}
                />
                <h4 className="text-white text-2xl font-bold">Strength Training</h4>
                <p className="text-[#9ca3af] text-base">
                  Empowering both body and mind, I&apos;m dedicated to the discipline of
                  strength training, continuously pushing my limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};