
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SchemesList from '../components/welfare/SchemesList';

const Welfare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-swasthya-text mb-2">Welfare Schemes</h1>
              <p className="text-swasthya-text-light">
                Find and apply for government schemes you're eligible for
              </p>
            </div>
          </div>
          
          <SchemesList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Welfare;
