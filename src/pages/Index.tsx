
import { Button } from "@/components/ui/button";
import { Sparkles, Globe, Mic, MessageSquare, Brain, Zap, Users, Target, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-primary">LangPod</div>
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-white transition-all duration-300"
            >
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-8 text-center animate-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary animate-float">
              <Sparkles size={16} />
              <span className="text-sm font-medium">AI-Powered Language Learning</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Master Any Language with
              <span className="text-primary"> AI Conversations</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience personalized, scenario-based lessons using advanced voice technology. Learn naturally through dynamic conversations.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8 animate-float">
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 hover:bg-primary hover:text-white transition-all duration-300"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Master a New Language
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge AI technology with proven learning methods
            </p>
          </div>
          
          <div className="feature-grid">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-primary" />,
                title: "AI-Powered Learning",
                description: "Personalized lessons that adapt to your learning style and pace",
              },
              {
                icon: <Globe className="w-6 h-6 text-primary" />,
                title: "Multiple Languages",
                description: "Learn any language with natural, context-based scenarios",
              },
              {
                icon: <Mic className="w-6 h-6 text-primary" />,
                title: "Voice Technology",
                description: "Practice speaking with advanced voice recognition and feedback",
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-primary" />,
                title: "Interactive Dialogues",
                description: "Engage in realistic conversations with AI language partners",
              },
              {
                icon: <Brain className="w-6 h-6 text-primary" />,
                title: "Smart Progress Tracking",
                description: "Monitor your improvement with detailed analytics and insights",
              },
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "Rapid Learning",
                description: "Accelerate your progress with our efficient learning methods",
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Community Learning",
                description: "Connect with fellow learners and practice together",
              },
              {
                icon: <Target className="w-6 h-6 text-primary" />,
                title: "Goal-Oriented",
                description: "Set and achieve your language learning objectives",
              },
              {
                icon: <Trophy className="w-6 h-6 text-primary" />,
                title: "Achievement System",
                description: "Stay motivated with rewards and milestones",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass p-6 space-y-4 hover:scale-105 transition-transform duration-300 animate-in"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: "translateY(0)",
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
    </div>
  );
};

export default Index;
