
import { FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  icon?: React.ReactNode;
  link: string;
}

const ResourceCard = ({
  title,
  description,
  category,
  icon,
  link,
}: ResourceCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full bg-career-purple/10 flex items-center justify-center">
          {icon || <FileText className="h-5 w-5 text-career-purple" />}
        </div>
        <span className="text-xs font-medium text-career-purple uppercase tracking-wider">{category}</span>
      </div>
      
      <h3 className="font-semibold text-lg text-career-darkText">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
      
      <div className="mt-4">
        <Button
          variant="ghost"
          className="p-0 h-auto text-career-purple hover:text-career-purple/90 hover:bg-transparent flex items-center gap-1 text-sm font-medium"
          asChild
        >
          <a href={link}>
            Read More <ChevronRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;
