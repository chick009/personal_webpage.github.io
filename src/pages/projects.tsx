import React from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <Layout title="Projects | Resume Website">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
          Here are some of the projects I've worked on. Each project showcases different skills and technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects; 