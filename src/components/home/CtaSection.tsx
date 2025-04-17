
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-career-darkText">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Advance Your Career?</h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Create your profile today to get personalized job recommendations and access career resources.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/auth">
            <Button className="bg-career-purple hover:bg-career-purple/90 text-white px-6 py-6 rounded-md">
              Create Free Account
            </Button>
          </Link>
          <Link to="/resources">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 rounded-md">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
