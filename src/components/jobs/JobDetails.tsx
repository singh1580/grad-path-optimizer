
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { JobCardProps } from "./JobCard";
import { MapPin, Building, Clock, BookmarkPlus, BookmarkCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSavedJobs } from "@/hooks/useSavedJobs";
import { useAuth } from "@/contexts/AuthContext";

interface JobDetailsProps {
  job: JobCardProps;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetails = ({ job, isOpen, onClose }: JobDetailsProps) => {
  const { user } = useAuth();
  const { isJobSaved, toggleSaveJob } = useSavedJobs();
  const saved = isJobSaved(job.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{job.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {job.logo ? (
                <img src={job.logo} alt={`${job.company} logo`} className="h-16 w-16 rounded-lg object-cover" />
              ) : (
                <div className="h-16 w-16 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Building className="h-8 w-8 text-gray-400" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                  {job.isRemote && <span className="ml-2 text-career-blue">(Remote)</span>}
                </div>
              </div>
            </div>
            
            {user && (
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => toggleSaveJob(job.id)}
              >
                {saved ? (
                  <>
                    <BookmarkCheck className="h-4 w-4" />
                    Saved
                  </>
                ) : (
                  <>
                    <BookmarkPlus className="h-4 w-4" />
                    Save Job
                  </>
                )}
              </Button>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              Posted {job.postedDate}
            </div>
            {job.salary && (
              <Badge variant="outline" className="text-career-purple border-career-purple">
                {job.salary}
              </Badge>
            )}
            <Badge variant="outline">
              {job.jobType}
            </Badge>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Button className="w-full bg-career-purple hover:bg-career-purple/90">
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetails;
