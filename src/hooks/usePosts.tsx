
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
}

export const usePosts = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data as Post[];
    }
  });

  const { mutate: createPost } = useMutation({
    mutationFn: async ({ title, content }: { title: string; content: string }) => {
      if (!user) throw new Error('Must be logged in to create posts');
      
      const { error } = await supabase
        .from('posts')
        .insert({ title, content, user_id: user.id });
        
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Post created successfully');
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return {
    posts,
    isLoading,
    createPost
  };
};
