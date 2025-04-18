
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import JobsHeader from "@/components/jobs/JobsHeader";
import JobFilters from "@/components/jobs/JobFilters";
import JobsList from "@/components/jobs/JobsList";
import { useJobs } from "@/hooks/useJobs";
import { toast } from "sonner";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data: jobs = [], isLoading, error } = useJobs(searchTerm);

  const handleSearch = () => {
    // The search is handled automatically by the useJobs hook
    // when searchTerm changes
  };

  const handleFilterApply = () => {
    console.log("Applying filters");
  };

  const handleFilterReset = () => {
    console.log("Resetting all filters");
  };

  if (error) {
    toast.error("Failed to load jobs");
  }
  
  return (
    <Layout>
      <JobsHeader 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <JobFilters 
                handleFilterApply={handleFilterApply}
                handleFilterReset={handleFilterReset}
              />
            </div>
            
            <div className="lg:w-3/4">
              <JobsList 
                jobs={jobs}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
