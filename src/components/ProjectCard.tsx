import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  index: number;
}

// Array of gradient backgrounds for different cards
const gradients = [
  'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
  'linear-gradient(135deg, #00c6fb 0%, #005bea 100%)',
  'linear-gradient(135deg, #f83600 0%, #f9d423 100%)',
  'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  'linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)',
  'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
];

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link,
  image,
  index = 0
}) => {
  // Use modulo to cycle through gradients if there are more projects than gradients
  const gradientIndex = index % gradients.length;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div 
        className="h-48 w-full bg-gray-300 flex items-center justify-center"
        style={{ 
          background: gradients[gradientIndex],
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: 'bold'
        }}
      >
        {title} Project
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-center">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 