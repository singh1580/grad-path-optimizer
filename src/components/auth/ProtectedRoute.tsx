
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-career-purple" />
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  if (!user) {
    // Redirect to the login page, but save the current location
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Check if a specific role is required
  if (requiredRole && user.user_metadata?.role !== requiredRole) {
    // If user doesn't have the required role, redirect to the appropriate dashboard
    const userRole = user.user_metadata?.role;
    if (userRole === "student") {
      return <Navigate to="/student-dashboard" replace />;
    } else if (userRole === "employer") {
      return <Navigate to="/employer-dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
