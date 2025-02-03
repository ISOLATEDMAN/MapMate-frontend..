import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Existing Home Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
        <div className="md:w-1/2 text-center md:text-left md:mr-10 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm mb-6">
            <span className="mr-2">✨</span>
            Connect Locally
          </div>
          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MapMate
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Connect with people nearby based on shared interests and locations.
            See who's around and explore new connections with MapMate!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link to="/login">
              <button className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 
                transition-all duration-200 shadow-lg hover:shadow-blue-200">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img 
            src='/mapImg.jpeg'
            alt="Map Preview" 
            className="relative w-full max-w-lg rounded-2xl shadow-2xl 
              transform transition-transform duration-500 hover:-translate-y-2"
          />
        </div>
      </div>

      {/* What is MapMate? Section with Transparent Glass Effect */}
      <section id='whatisMapMate'>
      <div className="relative py-16 px-6 md:px-20 flex justify-center">
        <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg max-w-7xl text-center p-10 border border-white/30">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">🌍 What is MapMate? 🌍</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            MapMate is your personal <strong>social discovery map</strong>, helping you connect with people nearby who share your passions. 
            Whether you're a <strong>tech enthusiast, sports lover, partygoer, or introvert</strong>, MapMate lets you <strong>explore, filter, and connect</strong> effortlessly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-map-marker-alt", title: "🌎 Discover Nearby Users", desc: "See who's around you on an interactive world map in real-time." },
              { icon: "fas fa-filter", title: "🎯 Filter by Interests", desc: "Find like-minded people using interest-based filters." },
              { icon: "fas fa-user", title: "📍 View & Connect", desc: "Check out profiles, follow people, and connect instantly." },
              { icon: "fas fa-users", title: "🤝 Build Your Network", desc: "Expand your circle by meeting new people nearby!" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-lg rounded-lg shadow-lg transition transform hover:scale-105 border border-white/40">
                <i className={`${item.icon} text-6xl text-blue-600 mb-4`}></i>
                <p className="text-gray-700 text-lg font-semibold">{item.title}</p>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/login">
              <button className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 
                transition-all duration-200 shadow-lg hover:shadow-blue-200 text-lg font-semibold">
                🌍 Start Exploring Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Home;
