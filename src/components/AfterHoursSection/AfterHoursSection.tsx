import React from 'react';
import './AfterHoursSection.css';
interface AfterHoursSectionProps {
  // props here
}

export const AfterHoursSection: React.FC<AfterHoursSectionProps> = () => {
  return (
    <div className="after-houer">
      <div>
        <div className="after-houer-discription">
          <h2 className="after-houer-header">After Hours</h2>
          <p className="after-houer-p">
            Outside of my regular working hours, I delve into an array of activities
            and passions. Here's a glimpse into how I spend my after-hours.
          </p>
          <div className="after-houers">
            <div className="image-sections">
              <div className="image-section">
                <img
                  src="assets/img/ai.jpg"
                  alt=""
                  height="480"
                  style={{ borderRadius: '20px' }}
                />
                <h4 className="image-header">Artificial Intelligence</h4>
                <p className="image-p">
                  After work I test LLM and automate my work
                </p>
              </div>
              <div className="image-section">
                <img
                  src="assets/img/travel.jpg"
                  alt=""
                  height="480"
                  style={{ borderRadius: '20px' }}
                />
                <h4 className="image-header">Travel</h4>
                <p className="image-p">
                  In my spare time in love with foreign travel and new adventures
                </p>
              </div>
            </div>
            <div className="image-sections">
              <div className="image-section">
                <img src="assets/img/games.png" alt="" height="480" />
                <h4 className="image-header">Video Games</h4>
                <p className="image-p">
                  Lost in virtual realms, I find joy and challenge in the dynamic
                  world of video games.
                </p>
              </div>
              <div className="image-section">
                <img src="assets/img/gim.png" alt="" height="480" />
                <h4 className="image-header">Strength Training</h4>
                <p className="image-p">
                  Empowering both body and mind, I'm dedicated to the discipline of
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