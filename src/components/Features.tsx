import React from 'react';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Transitions",
      description: "Smart transitions that perfectly blend your photos into smooth videos",
      icon: "✨"
    },
    {
      title: "Multiple Languages",
      description: "Available in 9 languages including English, Spanish, French, German, and more",
      icon: "🌎"
    },
    {
      title: "Premium Effects",
      description: "Professional video effects and filters to enhance your content",
      icon: "🎨"
    },
    {
      title: "Easy Sharing",
      description: "Share directly to social media or export in HD quality",
      icon: "📱"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transform Your Photos Like Never Before
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to create stunning videos from your photos
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
