import React from 'react';
import Layout from '../components/Layout';
import ExperienceItem from '../components/ExperienceItem';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <Layout title="Experience | Resume Website">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-center">Work Experience</h1>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
          A timeline of my professional journey and work experience.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {experienceData.experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            company={experience.company}
            position={experience.position}
            period={experience.period}
            description={experience.description}
            image={experience.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Experience; 