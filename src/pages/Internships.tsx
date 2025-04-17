
import { useState } from "react";
import { Search, Filter, BookOpen, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import JobCard, { JobCardProps } from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const INTERNSHIPS_DATA: JobCardProps[] = [
  {
    id: "intern1",
    title: "Software Engineering Intern",
    company: "TechFusion Inc.",
    location: "New York, NY",
    jobType: "Internship",
    postedDate: "2 days ago",
    isRemote: false,
    tags: ["Java", "Spring", "Git"],
    matchPercentage: 92,
  },
  {
    id: "intern2",
    title: "Marketing Intern",
    company: "Brand Elevate",
    location: "London, UK",
    jobType: "Internship",
    postedDate: "3 days ago",
    tags: ["Content Creation", "Social Media", "Analytics"],
    matchPercentage: 85,
  },
  {
    id: "intern3",
    title: "Data Science Intern",
    company: "DataSphere",
    location: "Remote",
    jobType: "Internship",
    postedDate: "1 week ago",
    isRemote: true,
    tags: ["Python", "Machine Learning", "Data Analysis"],
    matchPercentage: 89,
  },
  {
    id: "intern4",
    title: "UX Research Intern",
    company: "Creative Solutions",
    location: "San Francisco, CA",
    jobType: "Internship",
    postedDate: "5 days ago",
    tags: ["User Research", "Prototyping", "Usability Testing"],
    matchPercentage: 91,
  },
  {
    id: "intern5",
    title: "Finance Intern",
    company: "Investment Partners",
    location: "Toronto, Canada",
    jobType: "Internship",
    postedDate: "4 days ago",
    tags: ["Financial Analysis", "Excel", "Accounting"],
    matchPercentage: 82,
  },
];

const durations = ["3 months", "6 months", "Summer", "Fall", "Year-round"];
const locations = ["New York", "London", "Remote", "San Francisco", "Singapore", "Toronto"];
const fields = ["Technology", "Marketing", "Finance", "Design", "Data Science"];

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-career-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Find the Perfect Internship</h1>
          <p className="mt-2 text-white/90">
            Kickstart your career with hands-on professional experience
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
                placeholder="Search internships by title, company, or keywords"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Search Internships
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
                  <Button variant="ghost" size="sm" className="text-sm text-green-600">
                    Reset All
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-5">
                  {/* Duration */}
                  <div>
                    <h3 className="font-medium mb-3">Duration</h3>
                    <div className="space-y-2">
                      {durations.map((duration) => (
                        <div key={duration} className="flex items-center space-x-2">
                          <Checkbox id={`duration-${duration}`} />
                          <label htmlFor={`duration-${duration}`} className="text-sm text-gray-700">
                            {duration}
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
                  
                  {/* Field */}
                  <div>
                    <h3 className="font-medium mb-3">Field</h3>
                    <div className="space-y-2">
                      {fields.map((field) => (
                        <div key={field} className="flex items-center space-x-2">
                          <Checkbox id={`field-${field}`} />
                          <label htmlFor={`field-${field}`} className="text-sm text-gray-700">
                            {field}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Apply Filters
                  </Button>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-career-darkText flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-career-blue" />
                  Internship Resources
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Prepare for your internship application and make the most of your experience.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-career-blue hover:underline flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" /> How to Write a Great Application
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-career-blue hover:underline flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" /> Internship Interview Tips
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-career-blue hover:underline flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" /> Making the Most of Your Internship
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Internship Listings */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Available Internships</h2>
                  <p className="text-gray-500 text-sm">{INTERNSHIPS_DATA.length} internships found</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option>Most Recent</option>
                    <option>Match Score</option>
                    <option>Company Name</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {INTERNSHIPS_DATA.map((internship) => (
                  <JobCard key={internship.id} {...internship} />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-gray-500" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-green-600 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
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

export default Internships;
