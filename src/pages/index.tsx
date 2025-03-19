import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import introData from '../data/intro.json';

const Home = () => {
  return (
    <Layout title="Home | Resume Website">
      <div className="relative min-h-[70vh] flex items-center justify-center mb-12 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/assets/images/sony.jpeg')",
            filter: 'brightness(70%)',
            transform: 'scale(1.1)'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{introData.name}</h1>
          {/* <h2 className="text-2xl mb-6">{introData.title}</h2> */}
          <p className="text-xl max-w-2xl mx-auto mb-8">{introData.intro}</p>
          <a 
            href="/assets/pdf/resume.pdf" 
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-xl font-bold mb-1">Bachelor of Engineering in Financial Technology</h3>
            <h4 className="text-lg text-blue-600 mb-2">The Chinese University of Hong Kong</h4>
            <p className="text-gray-600 mb-2">Sep 2020 - July 2025</p>
            <p className="text-gray-700">Specialized in AI and Machine Learning with a focus on time series analysis and multi-modal models. Currently pursuing advanced studies in financial technology applications.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 