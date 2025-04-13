import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Photos</span>
            <span className="block text-blue-200">Into Beautiful Videos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl">
            Create stunning video content from your photos in seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;