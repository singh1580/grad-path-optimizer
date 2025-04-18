
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface JobFiltersProps {
  handleFilterApply: () => void;
  handleFilterReset: () => void;
}

const jobTypes = ["Full-time", "Part-time", "Contract", "Remote", "Internship"];
const locations = ["New York", "London", "Remote", "San Francisco", "Singapore", "Toronto"];
const experiences = ["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"];

const JobFilters = ({ handleFilterApply, handleFilterReset }: JobFiltersProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-sm text-career-purple"
          onClick={handleFilterReset}
        >
          Reset All
        </Button>
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-5">
        <div>
          <h3 className="font-medium mb-3">Job Type</h3>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={`job-type-${type}`} />
                <label htmlFor={`job-type-${type}`} className="text-sm text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h3 className="font-medium mb-3">Location</h3>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox id={`location-${location}`} />
                <label htmlFor={`location-${location}`} className="text-sm text-gray-700">
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h3 className="font-medium mb-3">Experience Level</h3>
          <div className="space-y-2">
            {experiences.map((exp) => (
              <div key={exp} className="flex items-center space-x-2">
                <Checkbox id={`exp-${exp}`} />
                <label htmlFor={`exp-${exp}`} className="text-sm text-gray-700">
                  {exp}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <Button 
          className="w-full bg-career-purple hover:bg-career-purple/90"
          onClick={handleFilterApply}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default JobFilters;
