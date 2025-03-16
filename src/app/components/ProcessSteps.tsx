import React from 'react';

export default function ProcessSection() {
  const processSteps = [
    {
      title: 'Discovery & Analysis',
      description: 'We dive deep into your needs, exploring ideas and defining strategies for long-term success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      image: '/images/discovery-screen.png' // You would need to create these images
    },
    {
      title: 'Development & Test',
      description: 'We craft tailored solutions for your goals and rigorously test them for top-notch reliability.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" />
        </svg>
      ),
      image: '/images/development-screen.png'
    },
    {
      title: 'Launch & Maintain',
      description: 'We deploy your solution seamlessly and ensure its continued performance with ongoing support.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
      image: '/images/launch-screen.png'
    }
  ];

  const services = [
    {
      title: 'Business Chatbot',
      description: 'Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.',
      image: (
        <div className="bg-gray-900 rounded-lg p-4 w-full h-48 flex flex-col justify-between">
          <div>
            <div className="h-2 bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-2 bg-gray-700 rounded w-3/4 mb-6"></div>
          </div>
          <div>
            <div className="h-2 bg-gray-700 rounded w-1/2 mb-4"></div>
          </div>
          <div className="bg-gray-800 rounded p-2 flex items-center mt-6 w-4/5">
            <span className="text-gray-400 text-sm">Ask me something...</span>
            <div className="ml-auto bg-gray-700 p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Content Creation',
      description: 'Efficiently generate high-quality, engaging content tailored to your audience using AI.',
      image: (
        <div className="bg-gray-900 rounded-lg p-4 w-full h-48 flex flex-col justify-between">
          <div className="bg-gray-800 rounded flex items-center p-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-400 text-sm">Generate content...</span>
          </div>
          <div className="bg-gray-800 rounded p-2 text-center text-gray-200 text-sm mb-2">
            Generate
          </div>
          <div className="flex justify-between">
            <div className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-gray-400 text-xs">in</span>
            </div>
            <div className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-gray-400 text-xs">X</span>
            </div>
            <div className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-gray-400 text-xs">IG</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Lead Generation',
      description: 'Sharpen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision.',
      image: (
        <div className="bg-gray-900 rounded-lg p-4 w-full h-48 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-gray-800 rounded-full mr-2"></div>
              <div className="text-sm text-gray-200">Jack Daniel</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-gray-800 rounded-full mr-2"></div>
              <div className="text-sm text-gray-200">Justin Rudd</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="bg-indigo-600 rounded p-2 text-center text-white text-sm mt-4">
            Generate Leads
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-black py-16">
      {/* Process Steps Section */}
      <div className="container mx-auto px-4 mb-24">
        <h2 className="text-white text-4xl md:text-5xl font-medium text-center mb-2">
          Your path to excellence
        </h2>
        <p className="text-white text-center opacity-70 mb-16">
          A simple, effective approach to deliver excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto border border-blue-900/40 rounded-lg p-4">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
              <div className="bg-gray-800 rounded-lg w-full h-32 mb-6 flex items-center justify-center">
                {/* This would be a screenshot in the actual implementation */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-16 w-6 bg-indigo-500/30 rounded"></div>
                  <div className="h-20 w-6 bg-purple-500/30 rounded"></div>
                  <div className="h-12 w-6 bg-blue-500/30 rounded"></div>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section Button */}
      <div className="flex justify-center mb-16">
        <button className="bg-black bg-opacity-60 border border-gray-800 text-white hover:bg-gray-900 py-2 px-6 rounded-md transition">
          Services
        </button>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl font-medium text-center mb-4">
          Innovative services for growth
        </h2>
        <p className="text-white text-center opacity-70 mb-16">
          Tailored solutions to streamline, innovate, and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/30 p-6 rounded-lg">
              {service.image}
              <h3 className="text-white text-xl font-bold mt-6 mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

