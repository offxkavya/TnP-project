import React from 'react';
import { Building2, Building, BarChart2, Scale } from 'lucide-react';
import StatCard from '../ui/StatCard';

const PlatformPoliciesSection: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Platform Return Policies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Myntra Returners" 
          value="₹299" 
          description="Fee for frequent returners" 
          icon={<Building2 className="h-6 w-6 text-pink-500" />}
          color="bg-pink-50"
        />
        <StatCard 
          title="Amazon India" 
          value="₹100" 
          description="Return shipping refund" 
          icon={<Building className="h-6 w-6 text-amber-500" />}
          color="bg-amber-50"
        />
        <StatCard 
          title="Flipkart" 
          value="600+" 
          description="Categories with no refunds" 
          icon={<BarChart2 className="h-6 w-6 text-blue-500" />}
          color="bg-blue-50"
        />
        <StatCard 
          title="Global Trend" 
          value="45%" 
          description="Retailers charging for returns" 
          icon={<Scale className="h-6 w-6 text-purple-500" />} 
          color="bg-purple-50"
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Major Platform Policies</h3>
          
          <div className="space-y-6">
            <div className="p-5 border-l-4 border-pink-400 bg-pink-50 rounded-r-lg">
              <div className="flex items-center mb-2">
                <Building2 className="h-5 w-5 text-pink-600 mr-2" />
                <h4 className="font-semibold text-pink-800">Myntra & Flipkart</h4>
              </div>
              <ul className="space-y-2 text-sm text-pink-700 ml-7">
                <li>Introduced ₹299 "convenience fee" for frequent returners</li>
                <li>Suspended "Try & Buy" model for identified serial returners</li>
                <li>Removed ~600 categories from free return/refund eligibility</li>
                <li>Account suspension risk for users with high return rates</li>
                <li>Instant refunds available for only 60% of eligible returns</li>
              </ul>
            </div>
            
            <div className="p-5 border-l-4 border-amber-400 bg-amber-50 rounded-r-lg">
              <div className="flex items-center mb-2">
                <Building className="h-5 w-5 text-amber-600 mr-2" />
                <h4 className="font-semibold text-amber-800">Amazon India</h4>
              </div>
              <ul className="space-y-2 text-sm text-amber-700 ml-7">
                <li>More lenient return policy compared to Flipkart</li>
                <li>Refunds shipping up to ₹100 depending on fulfillment type</li>
                <li>Testing returnable packaging to reduce environmental impact</li>
                <li>Introducing processing fees for high-return users (similar to US)</li>
                <li>Maintains easier returns to compete with Flipkart/Myntra</li>
              </ul>
            </div>
            
            <div className="p-5 border-l-4 border-purple-400 bg-purple-50 rounded-r-lg">
              <div className="flex items-center mb-2">
                <Scale className="h-5 w-5 text-purple-600 mr-2" />
                <h4 className="font-semibold text-purple-800">Global Retailers</h4>
              </div>
              <ul className="space-y-2 text-sm text-purple-700 ml-7">
                <li>Zara, J.Crew, H&M ending free returns globally</li>
                <li>Introducing return fees (typically $3-8 per return)</li>
                <li>Shorter return windows (30 days → 14 days)</li>
                <li>SHEIN charging restocking fees for multiple returns</li>
                <li>More brands implementing "return to store only" policies</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Policy Evolution Timeline</h3>
          
          <div className="relative pl-8 border-l-2 border-slate-200 space-y-8 py-2">
            <div className="relative">
              <div className="absolute -left-[25px] w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">2017</span>
              </div>
              <div className="ml-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-slate-800">Initial Policy Changes</h4>
                <p className="text-sm text-slate-600 mt-1">Flipkart ends refunds on ~600 categories, offering only replacements for electronics, mobile accessories, etc.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[25px] w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">2020</span>
              </div>
              <div className="ml-8 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-slate-800">Post-COVID Adjustments</h4>
                <p className="text-sm text-slate-600 mt-1">Return windows shortened across platforms as e-commerce boomed during pandemic. Amazon India introduces free pickup services.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[25px] w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">2022</span>
              </div>
              <div className="ml-8 p-4 bg-pink-50 rounded-lg">
                <h4 className="font-medium text-slate-800">Myntra's New Fee</h4>
                <p className="text-sm text-slate-600 mt-1">Myntra introduces ₹299 "convenience fee" for frequent returners. Suspends Try & Buy for identified serial returners.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[25px] w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold">2023</span>
              </div>
              <div className="ml-8 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-medium text-slate-800">Global Return Fees</h4>
                <p className="text-sm text-slate-600 mt-1">Zara, H&M and other global brands end free returns globally, introducing fees of $3-5 per return.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[25px] w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">2024</span>
              </div>
              <div className="ml-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-slate-800">Sustainability Focus</h4>
                <p className="text-sm text-slate-600 mt-1">Amazon introduces returnable packaging and eco-friendly return options. Platforms implementing AI for better sizing recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-10 transition-all hover:shadow-md">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Policy Change Impact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-5 bg-slate-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-slate-800 mb-3">Consumer Response</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Negative Feedback:</span> Customer complaints on platforms like Myntra increased 30% after fee introduction
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-amber-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Platform Switching:</span> Some customers moved to platforms with more lenient policies
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Behavior Change:</span> More careful shopping with increased attention to product details
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-slate-800 mb-3">Business Results</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Return Rate Reduction:</span> 15-20% drop in return rates after policy changes
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Short-term Sales Impact:</span> 5-8% reduction in order volume immediately after changes
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Profitability:</span> Improved margins despite slight drop in gross sales volume
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-lg hover:shadow-md transition-all">
            <h4 className="font-medium text-slate-800 mb-3">Environmental Effects</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Reduced Transport:</span> 15-20% fewer return shipments, lowering carbon emissions
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Packaging Waste:</span> Estimated 18% reduction in packaging materials used for returns
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">Landfill Diversion:</span> Fewer items discarded due to stricter return qualification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Key Policy Insights</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Myntra and Flipkart have introduced penalties (₹299 fee) for frequent returners to discourage serial returns.</li>
          <li>Platforms are suspending "Try & Buy" models for users identified as abusing return policies.</li>
          <li>Amazon India maintains a more lenient return policy compared to Flipkart, refunding shipping costs up to ₹100.</li>
          <li>There's a global trend toward charging for returns, with major retailers like Zara, H&M, and J.Crew ending free returns.</li>
          <li>Policy changes have resulted in a 15-20% drop in return rates while initially causing a 5-8% reduction in order volume.</li>
          <li>Environmental benefits include reduced transportation emissions and packaging waste.</li>
          <li>Future policy evolution appears to be moving toward segmented approaches: strict for serial returners, lenient for loyal customers.</li>
        </ul>
      </div>
    </div>
  );
};

export default PlatformPoliciesSection;