
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import JobCard, { JobCardProps } from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

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

const jobTypes = ["Full-time", "Part-time", "Contract", "Remote", "Internship"];
const locations = ["New York", "London", "Remote", "San Francisco", "Singapore", "Toronto"];
const experiences = ["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-career-purple to-career-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Find Your Perfect Job</h1>
          <p className="mt-2 text-white/90">
            Browse through thousands of job opportunities tailored for graduates
          </p>
        </div>
      </section>
      
      {/* Search Bar */}
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
            <Button className="bg-career-purple hover:bg-career-purple/90">
              Search Jobs
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" className="text-sm text-career-purple">
                    Reset All
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-5">
                  {/* Job Type */}
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
                  
                  {/* Location */}
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
                  
                  {/* Experience Level */}
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
                  
                  <Button className="w-full bg-career-purple hover:bg-career-purple/90">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Available Jobs</h2>
                  <p className="text-gray-500 text-sm">{JOBS_DATA.length} jobs found</p>
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
                {JOBS_DATA.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-gray-500" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-career-purple text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
