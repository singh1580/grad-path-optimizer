
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import AiMatchSection from "@/components/home/AiMatchSection";
import FeaturedJobsSection from "@/components/home/FeaturedJobsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <AiMatchSection />
      <FeaturedJobsSection />
      <ResourcesSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
