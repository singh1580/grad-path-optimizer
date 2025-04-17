
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-career-purple to-career-blue py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Find Your Perfect Career Path
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Connect with global opportunities and resources tailored for graduates through AI-powered matchmaking.
          </p>

          <div className="mt-10 bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Job titles, skills, or keywords"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-career-purple"
                />
              </div>
              <Link to="/jobs">
                <Button className="bg-career-purple hover:bg-career-purple/90 text-white px-6 py-3 rounded-md">
                  Search Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
