
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import JobCard, { JobCardProps } from "@/components/jobs/JobCard";

const FEATURED_JOBS: JobCardProps[] = [
  {
    id: "job1",
    title: "Software Engineer",
    company: "TechFusion Inc.",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    jobType: "Full-time",
    postedDate: "2 days ago",
    isRemote: true,
    tags: ["React", "JavaScript", "Node.js"],
    matchPercentage: 94,
  },
  {
    id: "job2",
    title: "Marketing Specialist",
    company: "Brand Elevate",
    location: "London, UK",
    jobType: "Full-time",
    postedDate: "3 days ago",
    tags: ["Digital Marketing", "Social Media", "SEO"],
    matchPercentage: 87,
  },
  {
    id: "job3",
    title: "Data Analyst Intern",
    company: "DataSphere",
    location: "Remote",
    jobType: "Internship",
    postedDate: "1 week ago",
    isRemote: true,
    tags: ["Python", "SQL", "Data Visualization"],
    matchPercentage: 82,
  },
];

const FeaturedJobsSection = () => {
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
          {FEATURED_JOBS.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
