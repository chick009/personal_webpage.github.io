import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import introData from '../data/intro.json';

const Home = () => {
  return (
    <Layout title="Home | Resume Website">
      <div className="relative min-h-[60vh] flex items-center justify-center mb-12 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop')",
            filter: 'brightness(30%)' 
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{introData.name}</h1>
          <h2 className="text-2xl mb-6">{introData.title}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">{introData.intro}</p>
          <a 
            href="/assets/pdf/YIKCHUNHO_RESUME_2025-02-27.pdf" 
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-xl font-bold mb-1">Master of Computer Science</h3>
            <h4 className="text-lg text-blue-600 mb-2">University of Technology</h4>
            <p className="text-gray-600 mb-2">2021 - 2023</p>
            <p className="text-gray-700">Specialized in Artificial Intelligence and Machine Learning with a focus on computer vision. Graduated with distinction.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-1">Bachelor of Science in Computer Engineering</h3>
            <h4 className="text-lg text-blue-600 mb-2">State University</h4>
            <p className="text-gray-600 mb-2">2017 - 2021</p>
            <p className="text-gray-700">Focused on software development and embedded systems. Graduated with honors.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">
            <span className="font-semibold">Email:</span> {introData.email}
          </p>
          <div className="flex space-x-4">
            <a 
              href={introData.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded transition-colors"
            >
              GitHub
            </a>
            <a 
              href={introData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Check Out My Work</h2>
        <div className="flex space-x-4 justify-center">
          <Link href="/projects">
            <span className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              View Projects
            </span>
          </Link>
          <Link href="/experience">
            <span className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              My Experience
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 