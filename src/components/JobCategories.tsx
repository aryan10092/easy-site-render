
import { Briefcase, Users, TrendingUp, Star, DollarSign, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const JobCategories = () => {
  const categories = [
    { name: "Technology", count: 1250, icon: Briefcase, color: "bg-blue-100 text-blue-600" },
    { name: "Healthcare", count: 890, icon: Users, color: "bg-green-100 text-green-600" },
    { name: "Finance", count: 675, icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
    { name: "Education", count: 445, icon: Star, color: "bg-yellow-100 text-yellow-600" },
    { name: "Marketing", count: 320, icon: DollarSign, color: "bg-red-100 text-red-600" },
    { name: "Design", count: 290, icon: Clock, color: "bg-indigo-100 text-indigo-600" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Jobs by Category</h2>
          <p className="text-lg text-gray-600">Find the perfect job in your preferred industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-gray-500">{category.count} open positions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
