import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// HeroBanner Section
const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find the perfect freelance services for your business
          </h1>
          <p className="text-xl mb-8">
            Connect with talented freelancers within minutes. Maintain full control of your projects.
          </p>
          <div className="relative max-w-lg">
            <input
              type="text"
              placeholder="Search for any service..."
              className="w-full py-3 pl-12 pr-24 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-full transition">
              Search
            </button>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">Popular:</span>
            {['Website Design', 'WordPress', 'Logo Design', 'AI Services', 'Video Editing'].map((item) => (
              <Link
                key={item}
                to={`/services?q=${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-white hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// PopularServices Section
const PopularServices = () => {
  const popularCategories = [
    {
      id: 1,
      name: 'Graphics & Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      slug: 'graphics-design',
      description: 'Logos, websites, book covers & more',
      color: 'from-purple-500 to-indigo-500',
      icon: '🎨'
    },
    {
      id: 2,
      name: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      slug: 'digital-marketing',
      description: 'SEO, social media & more',
      color: 'from-blue-500 to-cyan-500',
      icon: '📱'
    },
    {
      id: 3,
      name: 'Writing & Translation',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      slug: 'writing-translation',
      description: 'Content, translation & more',
      color: 'from-green-500 to-emerald-500',
      icon: '✍️'
    },
    {
      id: 4,
      name: 'Video & Animation',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80',
      slug: 'video-animation',
      description: 'Explainer videos, editing & more',
      color: 'from-orange-500 to-red-500',
      icon: '🎥'
    },
    {
      id: 5,
      name: 'Programming & Tech',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      slug: 'programming-tech',
      description: 'Web, mobile & software development',
      color: 'from-blue-600 to-indigo-600',
      icon: '💻'
    },
    {
      id: 6,
      name: 'Data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      slug: 'data',
      description: 'Analytics, visualization & more',
      color: 'from-teal-500 to-cyan-500',
      icon: '📊'
    },
    {
      id: 7,
      name: 'Business',
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
      slug: 'business',
      description: 'Business plans, market research & more',
      color: 'from-yellow-500 to-orange-500',
      icon: '💼'
    },
    {
      id: 8,
      name: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      slug: 'lifestyle',
      description: 'Health, fitness & personal development',
      color: 'from-pink-500 to-rose-500',
      icon: '🌟'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">Popular Professional Services</h2>
        <p className="text-gray-600 mb-8">Find the right service for your business needs</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularCategories.map((category) => (
            <Link key={category.id} to={`/services?category=${category.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} mix-blend-multiply`}></div>
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={`${category.name} category`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-white" style={{ display: 'none' }}>
                    {category.icon}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="font-medium text-lg">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// HowItWorks Section
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Find the perfect service',
      description: 'Search from thousands of skilled freelancers for any project',
      icon: '🔍',
    },
    {
      id: 2,
      title: 'Connect and collaborate',
      description: 'Chat with freelancers to find the perfect match for your project',
      icon: '💬',
    },
    {
      id: 3,
      title: 'Pay when you\'re satisfied',
      description: 'Release payment when the work is completed and you\'re satisfied',
      icon: '💳',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How FiverrClone Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            FiverrClone connects businesses with freelancers offering digital services in 500+ categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="btn btn-primary btn-lg"
          >
            <span>Explore Services</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
      quote: 'FiverrClone has been a game-changer for our company. We\'ve found amazing talent that has helped us scale our marketing efforts quickly.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder',
      company: 'DesignHub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
      quote: 'As a small business owner, I rely on freelancers for various projects. The quality of work I\'ve received through FiverrClone has been consistently excellent.',
    },
    {
      id: 3,
      name: 'Jessica Williams',
      role: 'Product Manager',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      quote: 'Finding specialized developers used to be a challenge until we discovered FiverrClone. Now we can quickly find the right talent for our specific needs.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Businesses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what clients are saying about freelancers on FiverrClone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                />
              </div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{testimonial.role}, {testimonial.company}</p>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Home page composition
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PopularServices />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
