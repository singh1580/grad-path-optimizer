
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard = () => {
  // Just a very basic overview layout for now
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Users Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for counts */}
            <span className="text-3xl font-bold">--</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jobs Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">--</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Applications Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">--</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
