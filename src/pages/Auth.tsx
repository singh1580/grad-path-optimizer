
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signUp, user, isLoading } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("student");
  const [processingAuth, setProcessingAuth] = useState(false);

  // Redirect if user is already logged in
  useEffect(() => {
    if (user && !isLoading) {
      const userRole = user.user_metadata?.role;
      if (userRole === "student") {
        navigate("/student-dashboard");
      } else if (userRole === "employer") {
        navigate("/employer-dashboard");
      } else {
        navigate(location.state?.from?.pathname || "/");
      }
    }
  }, [user, isLoading, navigate, location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingAuth(true);
    try {
      if (isSignUp) {
        const { error, data } = await signUp(email, password, fullName, role, role);
        if (error) throw error;
        toast.success("Account created successfully! Please check your email to verify your account.");
        if (data?.user) {
          if (role === "student") navigate("/student-dashboard");
          else if (role === "employer") navigate("/employer-dashboard");
          else navigate("/");
        }
      } else {
        const { error, data } = await signIn(email, password);
        if (error) throw error;
        
        if (data?.user) {
          const userRole = data.user.user_metadata?.role;
          console.log("User role after sign in:", userRole);
          
          if (userRole === "student") navigate("/student-dashboard");
          else if (userRole === "employer") navigate("/employer-dashboard");
          else navigate(location.state?.from?.pathname || "/");
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setProcessingAuth(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-career-purple" />
          <span className="ml-2">Loading...</span>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {isSignUp ? "Create your account" : "Sign in to your account"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sign up as
                  </label>
                  <RadioGroup value={role} onValueChange={setRole} className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="role-student" />
                      <label htmlFor="role-student" className="text-sm">Student</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="employer" id="role-employer" />
                      <label htmlFor="role-employer" className="text-sm">Employer</label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Button 
                type="submit" 
                className="w-full bg-career-purple hover:bg-career-purple/90"
                disabled={processingAuth}
              >
                {processingAuth ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isSignUp ? "Signing up..." : "Signing in..."}
                  </>
                ) : (
                  isSignUp ? "Sign up" : "Sign in"
                )}
              </Button>
            </div>
          </form>
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-career-purple hover:text-career-purple/90"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
