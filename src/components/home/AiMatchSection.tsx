
import { Brain, Zap, Check, BarChart3 } from "lucide-react";

const AiMatchSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-career-purple/5 to-career-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-career-darkText">AI-Powered Career Matching</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our advanced algorithms analyze your skills, preferences, and qualifications to match you with the perfect opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-career-purple/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 text-career-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-career-darkText">Skill Analysis</h3>
                  <p className="mt-2 text-gray-600">
                    Our AI analyzes your skills, experiences and educational background to find the perfect match.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-career-blue/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-career-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-career-darkText">Preference Matching</h3>
                  <p className="mt-2 text-gray-600">
                    Set your preferences for job type, location, salary, and work environment for personalized recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-career-magenta/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-career-magenta" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-career-darkText">Growth Potential</h3>
                  <p className="mt-2 text-gray-600">
                    We highlight opportunities that align with your career growth trajectory and long-term goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-career-purple p-8 rounded-xl shadow-md text-white">
            <h3 className="text-xl font-bold mb-6">Your Match Score Includes:</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Skills and qualifications alignment</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Industry and role relevance</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Location and work arrangement preferences</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Compensation and benefits expectations</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Company culture fit and values alignment</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1">
                  <Check className="h-4 w-4" />
                </div>
                <p>Career growth potential and learning opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiMatchSection;
