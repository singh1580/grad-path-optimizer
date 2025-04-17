
import { Briefcase, MapPin, Building, Clock, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  jobType: string;
  postedDate: string;
  isRemote?: boolean;
  logo?: string;
  tags: string[];
  matchPercentage?: number;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  salary,
  jobType,
  postedDate,
  isRemote,
  logo,
  tags,
  matchPercentage,
}: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5">
      <div className="flex items-start gap-4">
        {logo ? (
          <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
            <img src={logo} alt={`${company} logo`} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
            <Building className="h-8 w-8 text-gray-400" />
          </div>
        )}

        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-career-darkText">{title}</h3>
            {matchPercentage && (
              <Badge className="bg-career-purple text-white">
                {matchPercentage}% Match
              </Badge>
            )}
          </div>
          
          <div className="mt-1">
            <span className="text-gray-700 font-medium">{company}</span>
          </div>
          
          <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
              {isRemote && <span className="ml-2 text-career-blue">(Remote)</span>}
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1" />
              <span>{jobType}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{postedDate}</span>
            </div>
          </div>
          
          {salary && (
            <div className="mt-2 text-sm font-medium text-gray-700">{salary}</div>
          )}
          
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <BookmarkPlus className="h-4 w-4" />
          Save
        </Button>
        <Button size="sm" className="bg-career-purple hover:bg-career-purple/90">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
