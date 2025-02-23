
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-in max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-float">
            <Sparkles size={16} />
            <span className="text-sm font-medium">AI-Powered Language Learning</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Master Any Language with
            <span className="text-primary"> AI Conversations</span>
          </h1>
          
          <p className="text-xl text-gray-600">
            Experience personalized, scenario-based lessons using advanced voice technology. Learn naturally through dynamic conversations.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 hover-lift">
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
