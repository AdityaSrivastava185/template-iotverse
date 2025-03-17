"use client"


import React, { useState } from 'react';

type PlanFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  title: string;
  price: string | 'Custom';
  description: string;
  buttonText: string;
  buttonLink: string;
  features: PlanFeature[];
  isCustom?: boolean;
};

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('annually');

  const plans: PricingPlan[] = [
    {
      title: 'Basic',
      price: '$480',
      description: 'Essential tools and features for starting your journey with ease.',
      buttonText: 'Go with this plan',
      buttonLink: '#',
      features: [
        { text: 'Basic workflow automation', included: true },
        { text: 'Basic chatbot development', included: true },
        { text: '60 content request', included: true },
        { text: 'Email support', included: true },
        { text: '1 consultation a month', included: true },
      ],
    },
    {
      title: 'Professional',
      price: '$960',
      description: 'Advanced capabilities designed to meet growing business needs.',
      buttonText: 'Go with this plan',
      buttonLink: '#',
      features: [
        { text: 'Advanced workflow automation', included: true },
        { text: 'Advanced chatbot development', included: true },
        { text: '120 content request', included: true },
        { text: 'Email support', included: true },
        { text: '2 consultations a month', included: true },
      ],
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive solutions tailored for large-scale business success.',
      buttonText: 'Schedule a call',
      buttonLink: '#',
      isCustom: true,
      features: [
        { text: 'Custom workflow automation', included: true },
        { text: 'Custom chatbot development', included: true },
        { text: 'Unlimited content request', included: true },
        { text: '24hr priority support', included: true },
        { text: 'Unlimited consultations a month', included: true },
      ],
    }
  ];

  return (
    <div className="bg-black py-16">
      {/* Plans Section Button */}
      <div className="flex justify-center mb-10">
        <button className="bg-black bg-opacity-60 border border-gray-800 text-white hover:bg-gray-900 py-2 px-6 rounded-md transition">
          Plans
        </button>
      </div>

      {/* Pricing Header */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-medium text-center mb-4">
          Flexible plans for growth
        </h2>
        <p className="text-white text-center opacity-70 mb-10">
          Transparent pricing designed to fit your requirements.
        </p>

      
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/30 rounded-lg p-8 border borderflex flex-col"
            >
              {/* Plan Badge */}
              <div className="flex items-center mb-4">
                <div className="h-6 w-6 rounded-full bg-zinc-600 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-medium">{plan.title}</span>
              </div>

              {/* Plan Price */}
              <div className="mb-3">
                {plan.isCustom ? (
                  <div className="text-white text-2xl font-bold">{plan.price}</div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-white text-2xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 text-sm ml-1">/month</span>
                  </div>
                )}
              </div>

              {/* Plan Description */}
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* CTA Button */}
              <button 
                className={`${
                  plan.isCustom ? 'bg-transparent border border-indigo-600 text-indigo-400' : 'bg-indigo-600 text-white'
                } py-2 px-4 rounded-md flex items-center justify-center transition hover:bg-opacity-90 mb-8`}
              >
                {plan.buttonText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Features List */}
              <div className="mt-auto">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm ml-2">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;