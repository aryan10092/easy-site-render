
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Find Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover thousands of job opportunities with all the information you need. 
            Its your future. Come find it.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                  <Input 
                    placeholder="Job title, keywords, or company" 
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl bg-white/50 backdrop-blur-sm"
                  />
                </div>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                  <Input 
                    placeholder="Location" 
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-xl bg-white/50 backdrop-blur-sm"
                  />
                </div>
                <Button className="h-14 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-base text-gray-500">
            Popular searches: 
            <span className="text-indigo-600 cursor-pointer hover:text-indigo-800 ml-2 font-medium">Remote Work</span>, 
            <span className="text-indigo-600 cursor-pointer hover:text-indigo-800 ml-2 font-medium">Software Engineer</span>, 
            <span className="text-indigo-600 cursor-pointer hover:text-indigo-800 ml-2 font-medium">Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
