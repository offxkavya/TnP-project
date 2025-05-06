import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { DataProvider } from './contexts/DataContext';
import './App.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Indian E-commerce Returns Data';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <DataProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="mb-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                The Hidden Cost of Returns in Indian E-commerce
              </h1>
              <p className="text-slate-600 text-lg mb-6">
                Exploring the economic, environmental, and logistical impacts of India's high return rates
              </p>
              <a 
                href="#dashboard" 
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium transition-all hover:bg-blue-700"
              >
                Explore the data <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </section>
          
          <Dashboard />
        </main>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;