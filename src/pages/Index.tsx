
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConversationsSection from "@/components/ConversationsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 relative">
      {/* Animated Gradient Background */}
      <div className="animated-gradient" />
      
      {/* Grid Background */}
      <div className="grid-background opacity-30" />
      
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ConversationsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
