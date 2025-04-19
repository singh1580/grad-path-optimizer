
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { formatDistanceToNow } from "date-fns";

export interface InternshipData {
  id: string;
  title: string;
  company: string;
  location: string;
  duration?: string;
  stipend?: string;
  description: string;
  isRemote?: boolean;
  requirements?: string[];
  skillsRequired?: string[];
  postedDate: string;
}

export const useInternships = (searchTerm?: string) => {
  return useQuery({
    queryKey: ['internships', searchTerm],
    queryFn: async () => {
      let query = supabase
        .from('internships')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,company.ilike.%${searchTerm}%`);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return (data || []).map((internship): InternshipData => ({
        id: internship.id,
        title: internship.title,
        company: internship.company,
        location: internship.location,
        duration: internship.duration,
        stipend: internship.stipend,
        description: internship.description,
        isRemote: internship.is_remote,
        requirements: internship.requirements,
        skillsRequired: internship.skills_required,
        postedDate: formatDistanceToNow(new Date(internship.created_at), { addSuffix: true }),
      }));
    },
  });
};
