import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import ResourceCard, { ResourceCardProps } from "@/components/resources/ResourceCard";
import { BookOpen, FileText, Users, Compass, PenTool, VideoIcon, BookMarked, LightbulbIcon, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Resource data for different categories
const CAREER_GUIDES: ResourceCardProps[] = [
  {
    title: "Resume Building Masterclass",
    description: "Learn how to craft a standout resume that will catch employers' attention and showcase your skills effectively.",
    category: "Career Development",
    link: "/resources/resume-building",
    icon: <FileText className="h-5 w-5 text-career-purple" />,
  },
  {
    title: "Interview Preparation Guide",
    description: "Comprehensive preparation strategies for job interviews, including common questions and effective answering techniques.",
    category: "Interview Tips",
    link: "/resources/interview-guide",
    icon: <Users className="h-5 w-5 text-career-purple" />,
  },
  {
    title: "Networking for Career Growth",
    description: "Strategies for building professional connections and leveraging your network for career advancement opportunities.",
    category: "Professional Growth",
    link: "/resources/networking",
    icon: <Compass className="h-5 w-5 text-career-purple" />,
  },
];

const SKILL_DEVELOPMENT: ResourceCardProps[] = [
  {
    title: "Technical Writing Fundamentals",
    description: "Develop your technical writing skills to better communicate complex ideas and instructions in a professional context.",
    category: "Communication Skills",
    link: "/resources/technical-writing",
    icon: <PenTool className="h-5 w-5 text-career-blue" />,
  },
  {
    title: "Data Analysis Essentials",
    description: "Learn the basics of data analysis to make informed decisions and extract valuable insights from information.",
    category: "Technical Skills",
    link: "/resources/data-analysis",
    icon: <LightbulbIcon className="h-5 w-5 text-career-blue" />,
  },
  {
    title: "Public Speaking Workshop",
    description: "Overcome stage fright and develop clear, confident public speaking skills for presentations and meetings.",
    category: "Communication Skills",
    link: "/resources/public-speaking",
    icon: <Users className="h-5 w-5 text-career-blue" />,
  },
];

const INDUSTRY_INSIGHTS: ResourceCardProps[] = [
  {
    title: "Future of Tech: Emerging Trends",
    description: "Stay up-to-date with the latest technological trends that are shaping the future of the industry and career opportunities.",
    category: "Tech Industry",
    link: "/resources/tech-trends",
    icon: <LightbulbIcon className="h-5 w-5 text-career-magenta" />,
  },
  {
    title: "Healthcare Sector Growth Areas",
    description: "Explore the fastest-growing career paths in healthcare and understand the qualifications and skills needed.",
    category: "Healthcare Industry",
    link: "/resources/healthcare-careers",
    icon: <BookMarked className="h-5 w-5 text-career-magenta" />,
  },
  {
    title: "Sustainability in Business",
    description: "Learn how sustainability initiatives are creating new career opportunities across industries and how you can prepare for them.",
    category: "Green Economy",
    link: "/resources/sustainability-careers",
    icon: <Compass className="h-5 w-5 text-career-magenta" />,
  },
];

const MENTORSHIP_MATERIALS: ResourceCardProps[] = [
  {
    title: "Finding the Right Mentor",
    description: "Strategies for identifying and connecting with mentors who can provide valuable guidance for your career path.",
    category: "Mentorship",
    link: "/resources/finding-mentors",
    icon: <Users className="h-5 w-5 text-green-600" />,
  },
  {
    title: "Making the Most of Mentorship",
    description: "Best practices for establishing productive mentor-mentee relationships and maximizing the benefits of mentorship.",
    category: "Mentorship",
    link: "/resources/effective-mentorship",
    icon: <Compass className="h-5 w-5 text-green-600" />,
  },
  {
    title: "Becoming a Mentor",
    description: "Learn how to give back by becoming a mentor yourself, and develop leadership skills in the process.",
    category: "Professional Growth",
    link: "/resources/becoming-mentor",
    icon: <LightbulbIcon className="h-5 w-5 text-green-600" />,
  },
];

const Resources = () => {
  const [showMentorshipDialog, setShowMentorshipDialog] = useState(false);
  const [mentorshipFormData, setMentorshipFormData] = useState({
    name: "",
    email: "",
    interests: "",
    experience: ""
  });

  const handleMentorshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the form data
    toast.success("Application submitted successfully!");
    setShowMentorshipDialog(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-r from-career-magenta to-career-purple py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white">Career Resources</h1>
          <p className="mt-2 text-white/90">
            Access guides, tips, and tools to help you succeed in your career journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="guides" className="data-[state=active]:bg-career-purple data-[state=active]:text-white">
                Career Guides
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-career-blue data-[state=active]:text-white">
                Skill Development
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-career-magenta data-[state=active]:text-white">
                Industry Insights
              </TabsTrigger>
              <TabsTrigger value="mentorship" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Mentorship
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-career-darkText">Career Development Guides</h2>
                <p className="text-gray-600 mt-1">Resources to help you navigate your career path and professional growth</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CAREER_GUIDES.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
              
              <div className="mt-8 bg-career-purple/5 border border-career-purple/20 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <VideoIcon className="h-8 w-8 text-career-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-career-darkText">Featured Webinar</h3>
                    <p className="text-gray-600 mt-1">
                      "From Graduate to Professional: Navigating Your First Five Years"
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Join career expert Sarah Johnson as she shares strategies for establishing yourself in your industry and making impactful career moves early on.
                    </p>
                    <a href="#" className="inline-flex items-center mt-3 text-career-purple hover:underline">
                      Watch the Webinar <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="skills">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-career-darkText">Skill Development Resources</h2>
                <p className="text-gray-600 mt-1">Enhance your professional capabilities with these skill-building resources</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SKILL_DEVELOPMENT.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-career-blue/5 border border-career-blue/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-career-darkText flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-career-blue" /> 
                    Free Online Courses
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Access our curated collection of free online courses to develop in-demand skills.
                  </p>
                  <a href="#" className="inline-flex items-center mt-3 text-career-blue hover:underline">
                    Browse Courses <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
                
                <div className="bg-career-blue/5 border border-career-blue/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-career-darkText flex items-center">
                    <Users className="h-5 w-5 mr-2 text-career-blue" /> 
                    Skill Assessment Tools
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Evaluate your current skills and identify areas for improvement with our assessment tools.
                  </p>
                  <a href="#" className="inline-flex items-center mt-3 text-career-blue hover:underline">
                    Take an Assessment <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="insights">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-career-darkText">Industry Insights</h2>
                <p className="text-gray-600 mt-1">Stay informed about trends and opportunities across various industries</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INDUSTRY_INSIGHTS.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
              
              <div className="mt-8 bg-career-magenta/5 border border-career-magenta/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-career-darkText">Industry Reports</h3>
                <p className="text-gray-600 mt-2">
                  Access our latest industry reports and analyses to understand emerging trends and opportunities.
                </p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                    <FileText className="h-5 w-5 mr-3 text-career-magenta" />
                    <div>
                      <p className="font-medium text-career-darkText">Tech Industry Outlook 2023</p>
                      <p className="text-xs text-gray-500">Published: March 2023</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50">
                    <FileText className="h-5 w-5 mr-3 text-career-magenta" />
                    <div>
                      <p className="font-medium text-career-darkText">Healthcare Innovations Report</p>
                      <p className="text-xs text-gray-500">Published: April 2023</p>
                    </div>
                  </a>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mentorship">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-career-darkText">Mentorship Resources</h2>
                <p className="text-gray-600 mt-1">Guidance on finding mentors and making the most of mentorship opportunities</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MENTORSHIP_MATERIALS.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
              
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-career-darkText">Connect with a Mentor</h3>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                  Our mentorship program connects you with experienced professionals who can provide guidance, feedback, and insights to help you navigate your career path.
                </p>
                <button 
                  onClick={() => setShowMentorshipDialog(true)}
                  className="mt-4 text-green-600 hover:text-green-700 border border-green-600 hover:bg-green-50 py-2 px-6 rounded-md"
                >
                  Join Mentorship Program
                </button>
              </div>

              <Dialog open={showMentorshipDialog} onOpenChange={setShowMentorshipDialog}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Join Mentorship Program</DialogTitle>
                    <DialogDescription>
                      Please provide some information to help us match you with the right mentor.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleMentorshipSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <Input
                        required
                        value={mentorshipFormData.name}
                        onChange={(e) => setMentorshipFormData({...mentorshipFormData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <Input
                        type="email"
                        required
                        value={mentorshipFormData.email}
                        onChange={(e) => setMentorshipFormData({...mentorshipFormData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Areas of Interest</label>
                      <Input
                        required
                        value={mentorshipFormData.interests}
                        onChange={(e) => setMentorshipFormData({...mentorshipFormData, interests: e.target.value})}
                        placeholder="e.g., Software Development, Marketing, Finance"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                      <Input
                        required
                        value={mentorshipFormData.experience}
                        onChange={(e) => setMentorshipFormData({...mentorshipFormData, experience: e.target.value})}
                        placeholder="e.g., 2 years"
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit">Submit Application</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
