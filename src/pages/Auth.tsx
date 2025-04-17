
import { useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { GraduationCap, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Auth = () => {
  const { user, signIn, signUp, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or default to "/"
  const from = location.state?.from?.pathname || "/";
  
  // If user is already logged in, redirect to the intended page
  if (user) {
    return <Navigate to={from} replace />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="text-center mb-6">
              <GraduationCap className="h-12 w-12 mx-auto text-career-purple" />
              <h1 className="text-2xl font-bold text-career-darkText mt-2">Welcome to GradPath</h1>
              <p className="text-gray-600 mt-1">Sign in to access your career opportunities</p>
            </div>
            
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <SignInForm signIn={signIn} isLoading={isLoading} />
              </TabsContent>
              
              <TabsContent value="signup">
                <SignUpForm signUp={signUp} isLoading={isLoading} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const SignInForm = ({ signIn, isLoading }: { signIn: any; isLoading: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        toast.error(error.message || "Failed to sign in");
        return;
      }
      
      toast.success("Signed in successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="your@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-career-purple hover:bg-career-purple/90" 
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};

const SignUpForm = ({ signUp, isLoading }: { signUp: any; isLoading: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    
    try {
      const { error } = await signUp(email, password, fullName, userType);
      
      if (error) {
        toast.error(error.message || "Failed to sign up");
        return;
      }
      
      toast.success("Account created successfully! Please check your email to confirm your account.");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input 
          id="fullName" 
          type="text" 
          placeholder="John Doe" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="signup-email">Email</Label>
        <Input 
          id="signup-email" 
          type="email" 
          placeholder="your@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="signup-password">Password</Label>
        <Input 
          id="signup-password" 
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="text-xs text-gray-500">Password must be at least 6 characters</p>
      </div>
      
      <div className="space-y-2">
        <Label>I am a:</Label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div
            className={`border rounded-md p-4 cursor-pointer flex items-center justify-center ${
              userType === "student" ? "border-career-purple bg-career-purple/5" : "border-gray-200"
            }`}
            onClick={() => setUserType("student")}
          >
            <GraduationCap className="h-5 w-5 mr-2" />
            <span>Student/Graduate</span>
          </div>
          <div
            className={`border rounded-md p-4 cursor-pointer flex items-center justify-center ${
              userType === "employer" ? "border-career-purple bg-career-purple/5" : "border-gray-200"
            }`}
            onClick={() => setUserType("employer")}
          >
            <Building2 className="h-5 w-5 mr-2" />
            <span>Employer</span>
          </div>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-career-purple hover:bg-career-purple/90" 
        disabled={isLoading}
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default Auth;
