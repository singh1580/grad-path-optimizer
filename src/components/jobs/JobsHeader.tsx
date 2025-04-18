
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface JobsHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
}

const JobsHeader = ({ searchTerm, setSearchTerm, handleSearch }: JobsHeaderProps) => {
  return (
    <>
      <section className="bg-gradient-to-r from-career-purple to-career-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Find Your Perfect Job</h1>
          <p className="mt-2 text-white/90">
            Browse through thousands of job opportunities tailored for graduates
          </p>
        </div>
      </section>
      
      <section className="py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text"
                placeholder="Job titles, skills, or keywords"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-career-purple hover:bg-career-purple/90" onClick={handleSearch}>
              Search Jobs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsHeader;
