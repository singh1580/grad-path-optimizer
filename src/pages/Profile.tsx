
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState<any>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [bio, setBio] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [location, setLocation] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [website, setWebsite] = useState("");
  
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  
  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    
    fetchProfileData();
  }, [user, navigate]);
  
  const fetchProfileData = async () => {
    setIsLoading(true);
    try {
      // Get user role from auth metadata
      const userRole = user?.user_metadata?.role;
      
      if (userRole === "student") {
        // Fetch student profile data
        const { data: studentData, error: studentError } = await supabase
          .from("student_profiles")
          .select("*")
          .eq("id", user.id)
          .single();
          
        if (studentError) throw studentError;
        
        if (studentData) {
          setBio(studentData.bio || "");
          setEducation(studentData.education || "");
          setExperience(studentData.experience || "");
          setSkills(studentData.skills || []);
          setResumeUrl(studentData.resume_url || null);
          setProfileData(studentData);
        }
      } else if (userRole === "employer") {
        // Fetch employer profile data
        const { data: employerData, error: employerError } = await supabase
          .from("employer_profiles")
          .select("*")
          .eq("id", user.id)
          .single();
          
        if (employerError) throw employerError;
        
        if (employerData) {
          setCompanyName(employerData.company_name || "");
          setIndustry(employerData.industry || "");
          setCompanySize(employerData.company_size || "");
          setLocation(employerData.location || "");
          setCompanyDescription(employerData.company_description || "");
          setWebsite(employerData.website || "");
          setLogoUrl(employerData.logo_url || null);
          setProfileData(employerData);
        }
      }
    } catch (error: any) {
      console.error("Error fetching profile data:", error.message);
      toast.error("Failed to load profile data");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handlePasswordChange = async () => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      toast.success("Password updated successfully");
      setCurrentPassword("");
      setNewPassword("");
      setIsChangingPassword(false);
    } catch (error: any) {
      toast.error("Failed to update password: " + error.message);
    }
  };
  
  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    
    if (!skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    } else {
      toast.error("This skill is already added");
    }
  };
  
  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  
  const handleUploadFile = async (bucketName: string) => {
    if (!selectedFile) return;
    
    setIsUpdating(true);
    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${user!.id}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, selectedFile);
        
      if (uploadError) throw uploadError;
      
      const { data: publicUrlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);
        
      const fileUrl = publicUrlData.publicUrl;
      
      if (bucketName === 'resumes') {
        setResumeUrl(fileUrl);
        
        // Update student_profiles with the resume URL
        const { error: updateError } = await supabase
          .from("student_profiles")
          .update({ resume_url: fileUrl })
          .eq("id", user!.id);
          
        if (updateError) throw updateError;
        toast.success("Resume uploaded successfully");
      } else if (bucketName === 'logos') {
        setLogoUrl(fileUrl);
        
        // Update employer_profiles with the logo URL
        const { error: updateError } = await supabase
          .from("employer_profiles")
          .update({ logo_url: fileUrl })
          .eq("id", user!.id);
          
        if (updateError) throw updateError;
        toast.success("Logo uploaded successfully");
      }
      
      setSelectedFile(null);
    } catch (error: any) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file: " + error.message);
    } finally {
      setIsUpdating(false);
    }
  };
  
  const updateStudentProfile = async () => {
    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from("student_profiles")
        .update({
          bio,
          education,
          experience,
          skills,
          updated_at: new Date().toISOString()
        })
        .eq("id", user!.id);
        
      if (error) throw error;
      
      toast.success("Profile updated successfully");
      fetchProfileData();
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile: " + error.message);
    } finally {
      setIsUpdating(false);
    }
  };
  
  const updateEmployerProfile = async () => {
    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from("employer_profiles")
        .update({
          company_name: companyName,
          industry,
          company_size: companySize,
          location,
          company_description: companyDescription,
          website,
          updated_at: new Date().toISOString()
        })
        .eq("id", user!.id);
        
      if (error) throw error;
      
      toast.success("Company profile updated successfully");
      fetchProfileData();
    } catch (error: any) {
      console.error("Error updating company profile:", error);
      toast.error("Failed to update company profile: " + error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="h-[60vh] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-career-purple" />
          <span className="ml-2">Loading profile...</span>
        </div>
      </Layout>
    );
  }

  const userRole = user.user_metadata?.role;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">
          {userRole === "student" ? "Student Profile" : "Employer Profile"}
        </h1>
        
        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profile Information</TabsTrigger>
            <TabsTrigger value="password">Security</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            {userRole === "student" ? (
              <Card>
                <CardHeader>
                  <CardTitle>Student Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input 
                      value={user.user_metadata?.full_name || ""}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      value={user.email || ""}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <Textarea 
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Write a short bio about yourself"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Education
                    </label>
                    <Textarea 
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      placeholder="Your educational background"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Experience
                    </label>
                    <Textarea 
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      placeholder="Your work experience"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Skills
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-1">
                          <span>{skill}</span>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveSkill(skill)}
                            className="text-gray-500 hover:text-red-500 text-xs ml-1"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill"
                        className="flex-1"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                      />
                      <Button onClick={handleAddSkill} type="button">Add</Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume
                    </label>
                    {resumeUrl && (
                      <div className="mb-2">
                        <a 
                          href={resumeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-career-purple hover:underline"
                        >
                          View Current Resume
                        </a>
                      </div>
                    )}
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    <Button 
                      onClick={() => handleUploadFile('resumes')}
                      disabled={!selectedFile || isUpdating}
                      className="mt-2"
                    >
                      {isUpdating ? 'Uploading...' : 'Upload Resume'}
                    </Button>
                  </div>
                  <Button 
                    onClick={updateStudentProfile}
                    disabled={isUpdating}
                    className="mt-4 w-full"
                  >
                    {isUpdating ? 'Updating...' : 'Update Profile'}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Employer Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Representative Name
                    </label>
                    <Input 
                      value={user.user_metadata?.full_name || ""}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      value={user.email || ""}
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <Input 
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. Software, Healthcare, Finance"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Size
                    </label>
                    <Input 
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      placeholder="e.g. 1-10, 11-50, 51-200, 201-1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <Input 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Company headquarters location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <Input 
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://example.com"
                      type="url"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Description
                    </label>
                    <Textarea 
                      value={companyDescription}
                      onChange={(e) => setCompanyDescription(e.target.value)}
                      placeholder="Brief description of your company"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Logo
                    </label>
                    {logoUrl && (
                      <div className="mb-2 flex items-center">
                        <img 
                          src={logoUrl} 
                          alt="Company Logo" 
                          className="h-12 w-12 object-contain mr-2" 
                        />
                        <a 
                          href={logoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-career-purple hover:underline"
                        >
                          View Current Logo
                        </a>
                      </div>
                    )}
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <Button 
                      onClick={() => handleUploadFile('logos')}
                      disabled={!selectedFile || isUpdating}
                      className="mt-2"
                    >
                      {isUpdating ? 'Uploading...' : 'Upload Logo'}
                    </Button>
                  </div>
                  <Button 
                    onClick={updateEmployerProfile}
                    disabled={isUpdating}
                    className="mt-4 w-full"
                  >
                    {isUpdating ? 'Updating...' : 'Update Company Profile'}
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent>
                {!isChangingPassword ? (
                  <Button 
                    variant="outline"
                    onClick={() => setIsChangingPassword(true)}
                  >
                    Change Password
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <Input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <Input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handlePasswordChange}>
                        Update Password
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsChangingPassword(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
