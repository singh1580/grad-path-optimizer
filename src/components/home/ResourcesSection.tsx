
import { FileText, Users, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ResourceCard, { ResourceCardProps } from "@/components/resources/ResourceCard";

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

const ResourcesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-career-darkText">Career Resources</h2>
            <p className="mt-2 text-gray-600">Guides and tools to help you succeed</p>
          </div>
          <Link to="/resources">
            <Button variant="outline" className="text-career-purple border-career-purple hover:bg-career-purple/5">
              All Resources
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_RESOURCES.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
