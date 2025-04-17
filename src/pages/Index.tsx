
import { Search, Briefcase, GraduationCap, Globe, Building2, BookOpen, LightbulbIcon, FileText, Users, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AiMatchSection from "@/components/home/AiMatchSection";
import JobCard, { JobCardProps } from "@/components/jobs/JobCard";
import ResourceCard, { ResourceCardProps } from "@/components/resources/ResourceCard";

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

const FEATURED_RESOURCES: ResourceCardProps[] = [
  {
    title: "Resume Building Masterclass",
    description: "Learn how to craft a standout resume that will catch employers' attention and showcase your skills effectively.",
    category: "Career Development",
    link: "/resources/resume-building",
    icon: <FileText className="h-5 w-5 text-career-purple" />,
  },
  {
    title: "Interview Preparation Guide",
    description: "Comprehensive preparation strategies for job interviews, including common questions and effective answering techniques.",
    category: "Interview Tips",
    link: "/resources/interview-guide",
    icon: <Users className="h-5 w-5 text-career-purple" />,
  },
  {
    title: "Networking for Career Growth",
    description: "Strategies for building professional connections and leveraging your network for career advancement opportunities.",
    category: "Professional Growth",
    link: "/resources/networking",
    icon: <Network className="h-5 w-5 text-career-purple" />,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-career-purple to-career-blue py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Find Your Perfect Career Path
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
              Connect with global opportunities and resources tailored for graduates through AI-powered matchmaking.
            </p>

            <div className="mt-10 bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job titles, skills, or keywords"
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-career-purple"
                  />
                </div>
                <Button className="bg-career-purple hover:bg-career-purple/90 text-white px-6 py-3 rounded-md">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-career-darkText mb-12">
            Explore Career Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
              <div className="h-14 w-14 bg-career-purple/10 rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="h-7 w-7 text-career-purple" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-career-darkText">Private Sector</h3>
              <p className="mt-2 text-gray-600">Explore opportunities in corporate and startup environments</p>
              <Button variant="link" className="mt-4 text-career-purple">
                Browse Jobs
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
              <div className="h-14 w-14 bg-career-blue/10 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-7 w-7 text-career-blue" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-career-darkText">Government Sector</h3>
              <p className="mt-2 text-gray-600">Find public service positions and government opportunities</p>
              <Button variant="link" className="mt-4 text-career-blue">
                Browse Jobs
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
              <div className="h-14 w-14 bg-career-magenta/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-7 w-7 text-career-magenta" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-career-darkText">International Jobs</h3>
              <p className="mt-2 text-gray-600">Access global opportunities and overseas positions</p>
              <Button variant="link" className="mt-4 text-career-magenta">
                Browse Jobs
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-career-darkText">Internships</h3>
              <p className="mt-2 text-gray-600">Discover training opportunities and internship programs</p>
              <Button variant="link" className="mt-4 text-green-600">
                Browse Internships
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Match Section */}
      <AiMatchSection />

      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-career-darkText">Featured Opportunities</h2>
            <Button variant="outline" className="text-career-purple border-career-purple hover:bg-career-purple/5">
              View All Jobs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_JOBS.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-career-darkText">Career Resources</h2>
              <p className="mt-2 text-gray-600">Guides and tools to help you succeed</p>
            </div>
            <Button variant="outline" className="text-career-purple border-career-purple hover:bg-career-purple/5">
              All Resources
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_RESOURCES.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-career-darkText">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Advance Your Career?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Create your profile today to get personalized job recommendations and access career resources.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-career-purple hover:bg-career-purple/90 text-white px-6 py-6 rounded-md">
              Create Free Account
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 rounded-md">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
