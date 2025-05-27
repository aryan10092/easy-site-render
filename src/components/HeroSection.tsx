
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover thousands of job opportunities with all the information you need. 
            Its your future. Come find it.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Job title, keywords, or company" 
                    className="pl-10 h-12"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Location" 
                    className="pl-10 h-12"
                  />
                </div>
                <Button className="h-12 bg-blue-600 hover:bg-blue-700">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Popular searches: <span className="text-blue-600 cursor-pointer">Remote Work</span>, 
            <span className="text-blue-600 cursor-pointer ml-2">Software Engineer</span>, 
            <span className="text-blue-600 cursor-pointer ml-2">Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
