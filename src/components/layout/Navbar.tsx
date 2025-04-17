
import { Link } from "react-router-dom";
import { Search, BriefcaseBusiness, GraduationCap, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-career-purple" />
              <span className="ml-2 text-xl font-bold text-career-darkText">GradPath</span>
            </Link>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-career-purple text-sm font-medium">
                Home
              </Link>
              <Link to="/jobs" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 hover:text-gray-800 hover:border-gray-300">
                Jobs
              </Link>
              <Link to="/internships" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 hover:text-gray-800 hover:border-gray-300">
                Internships
              </Link>
              <Link to="/resources" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 hover:text-gray-800 hover:border-gray-300">
                Resources
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:border-career-purple focus:ring-1 focus:ring-career-purple"
                  placeholder="Search jobs..."
                  type="search"
                />
              </div>
            </div>
            <Button variant="ghost" className="hidden md:flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>Sign In</span>
            </Button>
            <Button className="bg-career-purple hover:bg-career-purple/90">
              <BriefcaseBusiness className="h-5 w-5 mr-2" />
              <span>Post a Job</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
