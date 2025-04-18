
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { JobCardProps } from "@/components/jobs/JobCard";
import { formatDistanceToNow } from "date-fns";

// Helper function to map database job to JobCardProps
export const mapJobToJobCardProps = (job: any): JobCardProps => {
  return {
    id: job.id,
    title: job.title,
    company: job.company,
    location: job.location,
    salary: job.salary || undefined,
    jobType: job.job_type, // Map job_type to jobType
    postedDate: formatDistanceToNow(new Date(job.created_at), { addSuffix: true }), // Format date
    isRemote: job.is_remote || false,
    logo: undefined, // No logo in database yet
    tags: job.tags || [],
    matchPercentage: undefined, // No match percentage feature yet
  };
};

export const useJobs = (searchTerm?: string) => {
  return useQuery({
    queryKey: ['jobs', searchTerm],
    queryFn: async () => {
      let query = supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,company.ilike.%${searchTerm}%`);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      // Map each job to the JobCardProps format
      return (data || []).map(mapJobToJobCardProps);
    },
  });
};
