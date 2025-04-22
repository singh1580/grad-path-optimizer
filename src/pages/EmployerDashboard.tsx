
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, BarChart } from "lucide-react";
import { useState } from "react";

const EmployerDashboard = () => {
  const { user } = useAuth();

  // Dummy data for jobs and applicants
  const jobs = [
    { title: "Frontend Developer", status: "Active", applications: 8 },
    { title: "Data Analyst", status: "Closed", applications: 15 }
  ];
  const applicants = [
    {
      name: "Alice",
      skills: "React, JS",
      match: 92,
      resume: "#",
      status: "Shortlisted"
    },
    {
      name: "Bob",
      skills: "Python, SQL",
      match: 85,
      resume: "#",
      status: "Pending"
    }
  ];
  const [tab, setTab] = useState("jobs");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Employer Center: {user?.user_metadata?.full_name || user?.email}</h1>
      <Tabs defaultValue={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Jobs Posted</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-bold">{jobs.length}</span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-bold">{jobs.filter(j => j.status === "Active").length}</span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Closed Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-bold">{jobs.filter(j => j.status === "Closed").length}</span>
              </CardContent>
            </Card>
          </div>
          <Button className="mb-6 bg-career-purple hover:bg-career-purple/90">Post New Job</Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job</TableHead>
                <TableHead>Status</TableHead>
                <TableHead># Applications</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map(job => (
                <TableRow key={job.title}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>{job.applications}</TableCell>
                  <TableCell><Button variant="outline">View Applicants</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Applicants</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead>Match %</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applicants.map(app => (
                    <TableRow key={app.name}>
                      <TableCell>{app.name}</TableCell>
                      <TableCell>{app.skills}</TableCell>
                      <TableCell>{app.match}%</TableCell>
                      <TableCell><a href={app.resume} className="text-career-purple underline">Download</a></TableCell>
                      <TableCell>{app.status}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Full Profile</Button>
                        <Button variant="ghost" size="sm">Shortlist</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Job Views & Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Placeholder for chart */}
                <div className="flex flex-col items-center">
                  <PieChart className="h-20 w-20 text-career-purple" />
                  <span className="text-sm">Analytics (Demo)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Applicant Skills</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Placeholder for chart */}
                <div className="flex flex-col items-center">
                  <BarChart className="h-20 w-20 text-career-purple" />
                  <span className="text-sm">Top 3: React, SQL, Python</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li className="mb-2">New application for "Frontend Developer"</li>
                <li className="mb-2">Job post "Data Analyst" expiring tomorrow</li>
                <li className="mb-2">Message from Alice</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Company Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="block mb-1">Company Name</label>
                <input className="border rounded px-2 py-1 w-full" defaultValue="Acme Corp" />
              </div>
              <div>
                <label className="block mb-1">Industry</label>
                <input className="border rounded px-2 py-1 w-full" defaultValue="Software" />
              </div>
              <div>
                <label className="block mb-1">Company Size</label>
                <input className="border rounded px-2 py-1 w-full" defaultValue="51-200" />
              </div>
              <div>
                <label className="block mb-1">Location</label>
                <input className="border rounded px-2 py-1 w-full" defaultValue="Delhi" />
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea className="border rounded px-2 py-1 w-full" rows={3} defaultValue="Leading provider of software solutions." />
              </div>
              <div>
                <label className="block mb-1">Website</label>
                <input className="border rounded px-2 py-1 w-full" defaultValue="https://acme.com" />
              </div>
              <div>
                <label className="block mb-1">Logo</label>
                <input type="file" className="border rounded px-2 py-1 w-full" />
              </div>
              <Button className="mt-3">Update Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmployerDashboard;
