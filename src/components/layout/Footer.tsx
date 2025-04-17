
import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-career-purple" />
              <span className="ml-2 text-xl font-bold text-career-darkText">GradPath</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Helping graduates connect with global opportunities through AI-powered job matching and career resources.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-career-purple">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-career-purple">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-career-purple">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-career-purple">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/jobs" className="text-sm text-gray-600 hover:text-career-purple">Browse Jobs</Link></li>
              <li><Link to="/internships" className="text-sm text-gray-600 hover:text-career-purple">Find Internships</Link></li>
              <li><Link to="/international" className="text-sm text-gray-600 hover:text-career-purple">International Jobs</Link></li>
              <li><Link to="/government" className="text-sm text-gray-600 hover:text-career-purple">Government Sector</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/resources" className="text-sm text-gray-600 hover:text-career-purple">Career Guidance</Link></li>
              <li><Link to="/resume-builder" className="text-sm text-gray-600 hover:text-career-purple">Resume Builder</Link></li>
              <li><Link to="/interview-prep" className="text-sm text-gray-600 hover:text-career-purple">Interview Preparation</Link></li>
              <li><Link to="/mentorship" className="text-sm text-gray-600 hover:text-career-purple">Mentorship Program</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-career-purple">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-career-purple">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-career-purple">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-career-purple">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} GradPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
