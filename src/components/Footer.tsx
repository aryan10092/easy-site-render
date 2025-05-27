
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              JobPortal
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connect talented people with great companies. Find your next opportunity today.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">For Job Seekers</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Career Advice</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Resume Builder</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Salary Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-400">For Employers</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Post a Job</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Browse Resumes</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Recruitment Solutions</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Company Pages</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Contact</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 JobPortal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
