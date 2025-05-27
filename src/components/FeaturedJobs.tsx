
import { MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      salary: "$120k - $180k",
      type: "Full-time",
      posted: "2 days ago",
      featured: true,
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      salary: "$100k - $150k",
      type: "Full-time",
      posted: "1 day ago",
      featured: true,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Creative Studio",
      location: "Austin, TX",
      salary: "$80k - $120k",
      type: "Full-time",
      posted: "3 days ago",
      featured: false,
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Seattle, WA",
      salary: "$110k - $160k",
      type: "Full-time",
      posted: "1 day ago",
      featured: false,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Jobs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hand-picked opportunities from top companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={job.logo} 
                        alt={job.company}
                        className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{job.title}</CardTitle>
                      <p className="text-gray-600 font-medium mt-1">{job.company}</p>
                    </div>
                  </div>
                  {job.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 font-semibold">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="p-2 bg-green-100 rounded-lg mr-3">
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">{job.salary}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <div className="p-2 bg-purple-100 rounded-lg mr-3">
                        <Clock className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium">{job.posted}</span>
                    </div>
                    <Badge variant="outline" className="border-indigo-200 text-indigo-600 font-medium">
                      {job.type}
                    </Badge>
                  </div>
                  <Button className="w-full mt-6 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold text-lg rounded-xl">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
