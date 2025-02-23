
import { Target, Mic, MessageSquare, ChartLine, Brain, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Personalized Learning Paths",
    description: "Get a customized learning experience tailored to your goals, interests, and proficiency level.",
  },
  {
    icon: <Mic className="w-6 h-6 text-primary" />,
    title: "Dynamic Voice Conversations",
    description: "Practice with AI-powered voice interactions for natural language learning.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Scenario-based Lessons",
    description: "Learn through real-world scenarios and practical conversations.",
  },
  {
    icon: <ChartLine className="w-6 h-6 text-primary" />,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed progress analytics and insights.",
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Adaptive Difficulty",
    description: "Experience dynamic difficulty adjustment based on your performance.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Achievement System",
    description: "Stay motivated with rewards and milestones as you progress.",
  }
];

const FeaturesSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Master Any Language with <span className="text-gradient">AI-Powered Learning</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of language learning with our comprehensive platform
          </p>
        </div>
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 space-y-4 hover-lift animate-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-3 w-fit rounded-lg bg-primary/10 animate-pulse-slow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
