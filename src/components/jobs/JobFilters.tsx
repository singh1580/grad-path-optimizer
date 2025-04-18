
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FilterSection from "./FilterSection";
import { jobTypes, locations, experiences } from "./jobFiltersData";

interface JobFiltersProps {
  handleFilterApply: () => void;
  handleFilterReset: () => void;
}

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
        <FilterSection title="Job Type" items={jobTypes} />
        <Separator className="my-4" />
        <FilterSection title="Location" items={locations} />
        <Separator className="my-4" />
        <FilterSection title="Experience Level" items={experiences} />
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
