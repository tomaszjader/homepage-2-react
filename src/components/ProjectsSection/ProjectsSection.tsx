'use client';
import React from 'react';
import { GithubCard } from '../GithubCard/GithubCard';
import { Project } from '@/src/interfaces/Project';
// import './ProjectsSection.css';
import { getGithubProjects } from '@/src/services/GithubAPIService';

export const ProjectsSection: React.FC = () => {
  const [data, setData] = React.useState<Project[]>([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getGithubProjects();
      const filteredProjects = projects.filter( 
        (repo: Project) => repo.description && repo.homepage
      );
      setData(filteredProjects);
    };
    
    fetchProjects();
  }, []);

  const renderGithubCard = (project: Project) => (
    <GithubCard
      key={project.name}
      description={project.description}
      project={project.name}
      link={project.html_url}
      website={project.homepage}
      topics={project.topics ?? []}
      stargazersCount={project.stargazers_count}
    />
  );

  if (!data.length) {
    return <div>Ładowanie projektów...</div>;
  }

  return (
    <section className="flex flex-col items-center justify-center my-30" id="projects">
      <article>
        <div className="mx-6 md:mx-0">
          <h2 className="text-gray-400 text-xl ml-auto">Recent Projects</h2>
          <p className="text-white text-4xl font-medium w-full md:w-[864px] mb-20">
            Since diving into development in 2020, I&apos;m working on a range of projects
            to life. Here&apos;s a snapshot of my accomplishments so far.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {data.slice(0, 2).map(renderGithubCard)}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {data.slice(2, 4).map(renderGithubCard)}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {data.slice(4, 6).map(renderGithubCard)}
          </div>
        </div>
      </article>
    </section>
  );
};