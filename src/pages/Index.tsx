
import { Button } from "@/components/ui/button";
import { Sparkles, Globe, Mic, MessageSquare, Brain, Zap, Target, ChartLine } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 relative">
      {/* Animated Gradient Background */}
      <div className="animated-gradient" />
      
      {/* Grid Background */}
      <div className="grid-background opacity-30" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              LangPod
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                Sign in
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - First */}
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
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 hover:bg-primary hover:text-white hover-lift"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Second */}
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
            {[
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
            ].map((feature, index) => (
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

      {/* Image Sections - Third */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Learn Through
                <span className="text-gradient"> Natural Conversations</span>
              </h2>
              <p className="text-lg text-gray-600">
                Practice with AI language partners that adapt to your level and learning style. Get instant feedback and improve your speaking skills naturally.
              </p>
              <ul className="space-y-4">
                {[
                  "Realistic conversation scenarios",
                  "Natural language processing",
                  "Adaptive difficulty levels",
                  "Real-time pronunciation feedback",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="p-1 rounded-full bg-primary/10">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-in" style={{ animationDelay: "200ms" }}>
              <img 
                src="/photo-1649972904349-6e44c42644a7"
                alt="Natural Language Learning"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Learn Faster with 
                <span className="text-gradient"> AI-Powered Feedback</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our advanced AI provides real-time corrections and suggestions to help you improve your pronunciation and grammar quickly.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time pronunciation feedback",
                  "Grammar correction and explanations",
                  "Vocabulary suggestions based on context",
                  "Personalized learning path",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="p-1 rounded-full bg-primary/10">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-in" style={{ animationDelay: "200ms" }}>
              <img 
                src="/photo-1486312338219-ce68d2c6f44d"
                alt="AI Language Learning"
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 animate-in">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gradient">
                LangPod
              </div>
              <p className="text-gray-600">
                Master any language with AI-powered conversations and personalized learning.
              </p>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Languages", "Enterprise"],
              },
              {
                title: "Resources",
                links: ["Blog", "Documentation", "Guides", "API"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Press"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} LangPod. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
