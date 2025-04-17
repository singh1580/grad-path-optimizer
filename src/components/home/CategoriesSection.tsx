
import { Briefcase, GraduationCap, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CategoryCard = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkTo, 
  colorClass 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  colorClass: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center border border-gray-100">
      <div className={`h-14 w-14 ${colorClass} rounded-full flex items-center justify-center mx-auto`}>
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-career-darkText">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link to={linkTo}>
        <Button variant="link" className={`mt-4 ${colorClass.replace('/10', '')}`}>
          {linkText}
        </Button>
      </Link>
    </div>
  );
};

const CategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-career-darkText mb-12">
          Explore Career Opportunities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard
            icon={<Briefcase className="h-7 w-7 text-career-purple" />}
            title="Private Sector"
            description="Explore opportunities in corporate and startup environments"
            linkText="Browse Jobs"
            linkTo="/jobs"
            colorClass="bg-career-purple/10"
          />
          <CategoryCard
            icon={<Building2 className="h-7 w-7 text-career-blue" />}
            title="Government Sector"
            description="Find public service positions and government opportunities"
            linkText="Browse Jobs"
            linkTo="/jobs"
            colorClass="bg-career-blue/10"
          />
          <CategoryCard
            icon={<Globe className="h-7 w-7 text-career-magenta" />}
            title="International Jobs"
            description="Access global opportunities and overseas positions"
            linkText="Browse Jobs"
            linkTo="/jobs"
            colorClass="bg-career-magenta/10"
          />
          <CategoryCard
            icon={<GraduationCap className="h-7 w-7 text-green-600" />}
            title="Internships"
            description="Discover training opportunities and internship programs"
            linkText="Browse Internships"
            linkTo="/internships"
            colorClass="bg-green-100"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
