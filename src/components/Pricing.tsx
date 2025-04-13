import React from 'react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Convert photos to video',
        'Basic transitions',
        'English language only',
        'SD quality export',
        '5 projects per month'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
    },
    {
      name: 'Premium',
      price: '$7.99/mo',
      yearlyPrice: '$47.98/year',
      yearlyDiscount: 'Save 50%',
      features: [
        'All Free features',
        'Premium transitions & effects',
        '9 languages support',
        'HD & 4K export',
        'Unlimited projects',
        'Priority support'
      ],
      buttonText: 'Go Premium',
      buttonStyle: 'bg-purple-600 text-white hover:bg-purple-700'
    }
  ];

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start free or unlock all features with Premium
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">{tier.price}</p>
              {tier.yearlyPrice && (
                <p className="mt-2 text-sm text-gray-500">
                  or {tier.yearlyPrice} <span className="text-green-500 font-semibold">{tier.yearlyDiscount}</span>
                </p>
              )}
              <ul className="mt-6 space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-md px-4 py-2 text-base font-medium ${tier.buttonStyle}`}>
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
