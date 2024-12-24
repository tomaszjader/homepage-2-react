import React from 'react';
import './GithubCard.css';
import { getImagePath } from '@/src/utils/utils';
import Image from 'next/image';

interface GithubCardProps {
  project: string;
  stargazersCount: number;
  description: string;
  topics: string[];
  website: string;
  link: string;
}

export const GithubCard: React.FC<GithubCardProps> = ({ project, stargazersCount, description, topics, website, link }) => {
  return (
    <article className="github-card">
    <div className="github-card-top">
        <div className="github-card-dot"></div>
        <div className="github-card-dot"></div>
        <div className="github-card-dot"></div>
    </div>
    <div className="github">
        <div className="github-card-header-section">
            <h3 className="github-card-header">
                {project}
            </h3>
            <span className="github-card-star">
                <Image src={getImagePath('assets/img/star.svg')} alt="" width={16} height={16}/>
                {stargazersCount}
            </span>
        </div>

        <p className="github-card-content">{description}</p>
        <div className="github-card-technologys">
            {topics.map((topic: string, index: number) => (
                <div key={index} className="github-card-technology">
                    {topic}
                </div>
            ))}
        </div>
        <div className="github-card-buttons">
            <a className="github-card-view-button" href={website} target="_blank" style={{textDecoration: 'none'}}>
                <Image src={getImagePath('assets/img/page.svg')} alt="" width={24} height={24}/> View demo
            </a>
            <a className="github-card-source-button" href={link} target="_blank" style={{textDecoration: 'none'}}>
                <Image src={getImagePath('assets/img/github-logo.svg')} alt="" width={24} height={24}/> Source code
            </a>
        </div>
    </div>
</article>
  );
};