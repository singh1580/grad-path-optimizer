
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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

      return data || [];
    },
  });
};
