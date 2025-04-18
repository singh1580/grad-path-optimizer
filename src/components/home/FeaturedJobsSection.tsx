
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import JobCard from "@/components/jobs/JobCard";
import { useJobs } from "@/hooks/useJobs";

const FeaturedJobsSection = () => {
  const { data: jobs = [], isLoading } = useJobs();
  
  // Take only the first 3 jobs for the featured section
  const featuredJobs = jobs.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-career-darkText">Featured Opportunities</h2>
          <Link to="/jobs">
            <Button variant="outline" className="text-career-purple border-career-purple hover:bg-career-purple/5">
              View All Jobs
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-3 text-center py-8">Loading jobs...</div>
          ) : featuredJobs.length > 0 ? (
            featuredJobs.map((job) => (
              <Link to={`/jobs/${job.id}`} key={job.id} className="block hover:no-underline">
                <JobCard {...job} />
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">No jobs available</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
