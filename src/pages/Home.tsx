import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Brain, Award } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: 'Connect with Others',
      description: 'Find people who want to learn what you know, and teach what you want to learn.',
    },
    {
      icon: <Brain className="w-8 h-8 text-primary-500" />,
      title: 'Exchange Skills',
      description: 'Share your expertise and gain new knowledge through meaningful exchanges.',
    },
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      title: 'Earn Recognition',
      description: 'Get badges and recognition for helping others learn and grow.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Share Knowledge,<br />Grow Together
            </h1>
            <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto">
              ConnectSphere brings people together to exchange skills and knowledge.
              No money involved—just pure learning and sharing.
            </p>
            <div className="mt-10">
              {!user && (
                <button
                  onClick={() => navigate('/auth')}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              )}
              {user && (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ready to start your learning journey?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join our community of learners and teachers today.
          </p>
          {!user && (
            <button
              onClick={() => navigate('/auth')}
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              Join ConnectSphere
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;