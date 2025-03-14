import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Everyone deserves good mental health
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                  We're here to support you on your journey to better mental health and wellbeing.
                </p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
                <h2 className="text-primary text-2xl font-semibold mb-6">
                  Today I want to:
                </h2>
                <select className="w-full p-4 border rounded-xl text-gray-700 mb-6 focus:ring-2 focus:ring-primary focus:border-transparent text-lg">
                  <option>Get help for my mental health</option>
                  <option>Learn about mental health</option>
                  <option>Support the cause</option>
                  <option>Find mental health resources</option>
                </select>
                <button className="w-full bg-secondary text-white py-4 rounded-xl hover:bg-opacity-90 transition duration-300 font-semibold text-lg shadow-lg flex items-center justify-center gap-2">
                  Explore
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
                <img 
                  src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg" 
                  alt="Mental Health Support" 
                  className="relative rounded-3xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Resources</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover tools and information to support your mental health journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg" 
                  alt="Mental Health Support" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Mental Health A-Z</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore our comprehensive guide to mental health conditions and treatments.
                </p>
                <button className="text-primary font-semibold hover:text-accent transition-colors flex items-center group">
                  Learn More 
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg" 
                  alt="Support Groups" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Support Groups</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Find local and online support groups to connect with others.
                </p>
                <button className="text-primary font-semibold hover:text-accent transition-colors flex items-center group">
                  Find Support 
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg" 
                  alt="Get Involved" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Get Involved</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover ways to support mental health in your community.
                </p>
                <button className="text-primary font-semibold hover:text-accent transition-colors flex items-center group">
                  Take Action 
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-accent to-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Make a difference today</h2>
            <p className="text-xl mb-12 leading-relaxed">
              Your support helps us continue our vital work in mental health research, 
              advocacy, and support services. Join us in creating positive change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg text-lg flex items-center justify-center gap-2">
                <i className="fas fa-heart"></i>
                Donate Now
              </button>
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg text-lg flex items-center justify-center gap-2">
                <i className="fas fa-hands-helping"></i>
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
