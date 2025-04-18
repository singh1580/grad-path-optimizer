import { useState } from "react";
import Layout from "@/components/layout/Layout";
import JobsHeader from "@/components/jobs/JobsHeader";
import JobFilters from "@/components/jobs/JobFilters";
import JobsList from "@/components/jobs/JobsList";
import { JobCardProps } from "@/components/jobs/JobCard";

const JOBS_DATA: JobCardProps[] = [
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
    title: "Data Analyst",
    company: "DataSphere",
    location: "Remote",
    jobType: "Full-time",
    postedDate: "1 week ago",
    isRemote: true,
    salary: "$75,000 - $95,000",
    tags: ["Python", "SQL", "Data Visualization"],
    matchPercentage: 82,
  },
  {
    id: "job4",
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "San Francisco, CA",
    jobType: "Full-time",
    postedDate: "5 days ago",
    salary: "$85,000 - $110,000",
    tags: ["Figma", "User Research", "Prototyping"],
    matchPercentage: 91,
  },
  {
    id: "job5",
    title: "Project Manager",
    company: "Global Innovations",
    location: "Singapore",
    jobType: "Full-time",
    postedDate: "1 day ago",
    salary: "$95,000 - $125,000",
    tags: ["Agile", "PMP", "Team Leadership"],
    matchPercentage: 79,
  },
  {
    id: "job6",
    title: "Financial Analyst",
    company: "Investment Partners",
    location: "Toronto, Canada",
    jobType: "Full-time",
    postedDate: "4 days ago",
    salary: "$80,000 - $100,000",
    tags: ["Financial Modeling", "Excel", "Forecasting"],
    matchPercentage: 85,
  }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleFilterApply = () => {
    console.log("Applying filters");
  };

  const handleFilterReset = () => {
    console.log("Resetting all filters");
  };
  
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
                jobs={JOBS_DATA}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
