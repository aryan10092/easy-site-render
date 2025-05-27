
import { Briefcase, Users, TrendingUp, Star, DollarSign, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const JobCategories = () => {
  const categories = [
    { name: "Technology", count: 1250, icon: Briefcase, color: "from-blue-500 to-cyan-500" },
    { name: "Healthcare", count: 890, icon: Users, color: "from-green-500 to-emerald-500" },
    { name: "Finance", count: 675, icon: TrendingUp, color: "from-purple-500 to-violet-500" },
    { name: "Education", count: 445, icon: Star, color: "from-yellow-500 to-orange-500" },
    { name: "Marketing", count: 320, icon: DollarSign, color: "from-red-500 to-pink-500" },
    { name: "Design", count: 290, icon: Clock, color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Browse Jobs by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find the perfect job in your preferred industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{category.name}</h3>
                      <p className="text-gray-600 font-medium">{category.count} open positions</p>
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
