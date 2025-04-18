
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Layout from "@/components/layout/Layout";
import { jobTypes, locations } from "@/components/jobs/jobFiltersData";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, MapPin, DollarSign, Tag } from "lucide-react";

interface FormValues {
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
  requirements: string;
  tags: string;
  isRemote: boolean;
}

const PostJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      company: "",
      location: "",
      jobType: "",
      salary: "",
      description: "",
      requirements: "",
      tags: "",
      isRemote: false,
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    if (!user) {
      toast.error("You must be logged in to post a job");
      navigate("/auth");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Convert comma-separated strings to arrays
      const requirementsArray = data.requirements
        ? data.requirements.split(",").map(item => item.trim())
        : [];
      
      const tagsArray = data.tags
        ? data.tags.split(",").map(item => item.trim())
        : [];
      
      const { error } = await supabase
        .from("jobs")
        .insert({
          title: data.title,
          company: data.company,
          location: data.location,
          job_type: data.jobType,
          salary: data.salary || null,
          description: data.description,
          requirements: requirementsArray,
          tags: tagsArray,
          is_remote: data.isRemote,
          posted_by: user.id
        });
        
      if (error) {
        toast.error(`Error posting job: ${error.message}`);
        console.error("Error posting job:", error);
        return;
      }
      
      toast.success("Job posted successfully!");
      navigate("/jobs");
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error("Failed to post job. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!user) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sign in to post a job</h1>
            <p className="mb-6">You need to be signed in to post job listings.</p>
            <Button onClick={() => navigate("/auth")}>
              Sign In / Sign Up
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Post a Job</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Job Title */}
            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Job title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <Input placeholder="e.g. Frontend Developer" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Company Name */}
            <FormField
              control={form.control}
              name="company"
              rules={{ required: "Company name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. TechCorp Inc" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Job Location and Remote Option */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                rules={{ required: "Location is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map(location => (
                              <SelectItem key={location} value={location}>{location}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="isRemote"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-end space-x-3 space-y-0 mt-8">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="cursor-pointer">This is a remote position</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Job Type and Salary Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="jobType"
                rules={{ required: "Job type is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobTypes.map(jobType => (
                            <SelectItem key={jobType} value={jobType}>{jobType}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary Range (Optional)</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                        <Input placeholder="e.g. $80,000 - $100,000" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Job Description */}
            <FormField
              control={form.control}
              name="description"
              rules={{ required: "Job description is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the job role, responsibilities, and company culture..." 
                      className="min-h-[150px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Job Requirements */}
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requirements (comma separated)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. 3+ years experience with React, Bachelor's degree, Strong communication skills" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Tags */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma separated)</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Tag className="h-5 w-5 text-gray-400" />
                      <Input placeholder="e.g. React, JavaScript, Remote" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/jobs")}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-career-purple hover:bg-career-purple/90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Post Job"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default PostJob;
