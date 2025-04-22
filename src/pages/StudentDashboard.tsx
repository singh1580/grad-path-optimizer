
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { Input } from "@/components/ui/input";
// Demo cards only; plug in hooks/integration as needed

const StudentDashboard = () => {
  const { user } = useAuth();
  const [resume, setResume] = useState<File | null>(null);

  // Placeholder lists (replace with API data)
  const skills = ["Javascript", "React", "SQL"];
  const appliedJobs = [
    { title: "Frontend Developer", company: "Company A", status: "Pending" },
    { title: "Backend Engineer", company: "Company B", status: "Interview" },
  ];
  const internships = [
    { title: "Data Analyst Intern", company: "Startup X" },
    { title: "Marketing Intern", company: "Brand Y" },
  ];
  const notifications = [
    { text: "You've been shortlisted for Backend Engineer!", date: "Today" },
    { text: "Interview for Frontend Developer scheduled.", date: "Yesterday" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Welcome, {user?.user_metadata?.full_name || user?.email}</h1>
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="jobs">Jobs & Internships</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {skills.map(skill => (
                    <li key={skill} className="inline-block bg-gray-100 rounded px-3 py-1 mr-2 mb-2">{skill}</li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-3">Add/Update Skills</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Applied Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {appliedJobs.map(job => (
                    <li key={job.title} className="mb-2">
                      <span className="font-medium">{job.title}</span> at {job.company} <span className="text-xs bg-gray-200 rounded px-2">{job.status}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recommended Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {internships.map(intern => (
                    <li key={intern.title} className="mb-2">
                      <span className="font-medium">{intern.title}</span> at {intern.company}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="jobs">
          <div className="flex flex-col md:flex-row gap-8">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Search & Filter Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Filter by skill, qualification or location" className="mb-3" />
                <Button>Search</Button>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Search & Filter Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Filter by skill, qualification or location" className="mb-3" />
                <Button>Search</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Update Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Full Name" className="max-w-xs" defaultValue={user?.user_metadata?.full_name || ""} />
              <Input placeholder="Add new skill" className="max-w-xs" />
              <Button>Update Skills</Button>
              <div>
                <label className="block mb-1">Upload Resume</label>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={e => setResume(e.target.files?.[0] || null)}
                />
                {resume && <span className="block mt-1">{resume.name}</span>}
                <Button className="mt-2">Upload</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {notifications.map(note => (
                  <li key={note.text} className="mb-3">
                    <span className="font-medium">{note.text}</span>
                    <span className="ml-3 text-xs text-gray-500">{note.date}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
