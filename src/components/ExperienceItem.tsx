import React from 'react';
import Image from 'next/image';

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  image: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  period,
  description,
  image
}) => {
  return (
    <div className="flex flex-col md:flex-row mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:w-1/3 p-4 bg-gray-100 flex flex-col items-center justify-center">
        <span className="text-lg font-semibold text-gray-700 mb-4">{period}</span>
        <div className="relative h-40 w-40 overflow-hidden rounded-lg mb-2">
          <Image
            src={image}
            alt={`${company} logo`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-xl font-bold mb-1">{company}</h3>
        <h4 className="text-lg text-blue-600 mb-3">{position}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem; 