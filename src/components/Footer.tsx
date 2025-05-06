import React from 'react';
import { BarChart3, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">ReturnMetrics</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Providing insights and analytics on return rates in Indian E-commerce to help businesses and consumers understand the economic and environmental impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#return-rates" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Return Rates
                </a>
              </li>
              <li>
                <a href="#environmental-impact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Environmental Impact
                </a>
              </li>
              <li>
                <a href="#financial-costs" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Financial Costs
                </a>
              </li>
              <li>
                <a href="#consumer-behavior" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Consumer Behavior
                </a>
              </li>
              <li>
                <a href="#platform-policies" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Platform Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Research Methodology
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Data Sources
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm">
                Email: info@returnmetrics.com
              </li>
              <li className="text-slate-300 text-sm">
                Phone: +91 98765 43210
              </li>
              <li className="text-slate-300 text-sm">
                Address: 123 Analytics Way, Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} ReturnMetrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;