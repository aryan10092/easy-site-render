
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Jobs</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Companies</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Resources</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">About</a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline">Sign In</Button>
            <Button>Post Job</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
