
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import JobCard, { JobCardProps } from "@/components/jobs/JobCard";

interface JobsListProps {
  jobs: JobCardProps[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isLoading?: boolean;
}

const JobsList = ({ jobs, currentPage, setCurrentPage, isLoading }: JobsListProps) => {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading jobs...</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No jobs found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Available Jobs</h2>
          <p className="text-gray-500 text-sm">{jobs.length} jobs found</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
            <option>Relevance</option>
            <option>Most Recent</option>
            <option>Match Score</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {jobs.map((job) => (
          <Link to={`/jobs/${job.id}`} key={job.id} className="block hover:no-underline">
            <JobCard {...job} />
          </Link>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-gray-500" 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className={currentPage === 1 ? "bg-career-purple text-white" : ""}
            onClick={() => setCurrentPage(1)}
          >
            1
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className={currentPage === 2 ? "bg-career-purple text-white" : ""}
            onClick={() => setCurrentPage(2)}
          >
            2
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className={currentPage === 3 ? "bg-career-purple text-white" : ""}
            onClick={() => setCurrentPage(3)}
          >
            3
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
