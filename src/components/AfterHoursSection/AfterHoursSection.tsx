import React from 'react';
import './AfterHoursSection.css';
import Image from 'next/image';
import { getImagePath } from '@/src/utils/utils';


interface AfterHoursSectionProps {
  children?: React.ReactNode;
}

export const AfterHoursSection: React.FC<AfterHoursSectionProps> = () => {
  return (
    <div className="after-hours">
      <div>
        <div className="after-hours__content">
          <div className="after-hours__header-container">
            <h2 className="after-hours__header">After Hours</h2>
            <p className="after-hours__text">
              Outside of my regular working hours, I delve into an array of activities
              and passions. Here&apos;s a glimpse into how I spend my after-hours.
            </p>
          </div>

          <div className="after-hours__grid">
            <div className="after-hours__row">
              <div className="card">
                <Image
                  className="card__image"
                  src={getImagePath("assets/img/ai.jpg")}
                  alt=""
                  width={320}
                  height={480}
                />
                <h4 className="card__header">Artificial Intelligence</h4>
                <p className="card__text">
                  After work I test LLM and automate my work
                </p>
              </div>
              <div className="card">
                <Image
                  className="card__image"
                  src={getImagePath("assets/img/travel.jpg")}
                  alt=""
                  width={320}
                  height={480}
                />
                <h4 className="card__header">Travel</h4>
                <p className="card__text">
                  In my spare time in love with foreign travel and new adventures
                </p>
              </div>
            </div>
            <div className="after-hours__row">
              <div className="card">
                <Image
                  className="card__image"
                  src={getImagePath("assets/img/chess.png")}
                  alt=""
                  width={316}
                  height={480}
                />
                <h4 className="card__header">Chess</h4>
                <p className="card__text">
                Lost in strategic battles, I find joy and challenge in the timeless world of chess.
                </p>
              </div>
              <div className="card">
                <Image
                  className="card__image"
                  src={getImagePath("assets/img/gim.png")}
                  alt=""
                  width={316}
                  height={480}
                />
                <h4 className="card__header">Strength Training</h4>
                <p className="card__text">
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