
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export const useSavedJobs = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: savedJobs = [] } = useQuery({
    queryKey: ['saved-jobs'],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('saved_jobs')
        .select('job_id')
        .eq('user_id', user.id);
        
      if (error) throw error;
      return data.map(saved => saved.job_id);
    },
    enabled: !!user,
  });

  const { mutate: toggleSaveJob } = useMutation({
    mutationFn: async (jobId: string) => {
      if (!user) throw new Error('Must be logged in to save jobs');
      
      const isSaved = savedJobs.includes(jobId);
      
      if (isSaved) {
        const { error } = await supabase
          .from('saved_jobs')
          .delete()
          .eq('user_id', user.id)
          .eq('job_id', jobId);
          
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('saved_jobs')
          .insert({ user_id: user.id, job_id: jobId });
          
        if (error) throw error;
      }
    },
    onSuccess: (_, jobId) => {
      const isSaved = savedJobs.includes(jobId);
      toast.success(isSaved ? 'Job removed from saved jobs' : 'Job saved successfully');
      queryClient.invalidateQueries({ queryKey: ['saved-jobs'] });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return {
    savedJobs,
    toggleSaveJob,
    isJobSaved: (jobId: string) => savedJobs.includes(jobId)
  };
};
