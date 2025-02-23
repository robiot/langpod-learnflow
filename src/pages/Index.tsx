
import { Button } from "@/components/ui/button";
import { Sparkles, Globe, Mic, MessageSquare, Brain, Zap, Target, ChartLine } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 relative">
      {/* Enhanced Grid Background */}
      <div className="grid-background fixed inset-0 opacity-30" />
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              LangPod
            </div>
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300 glow-on-hover"
              >
                Sign in
              </Button>
              <Button
                className="modern-button text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 smooth-enter">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover-lift-lg">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-sm font-medium">AI-Powered Language Learning</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-text">
              Master Any Language with
              <br />
              AI Conversations
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience personalized, scenario-based lessons using advanced voice technology. 
              Learn naturally through dynamic conversations.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Button size="lg" className="modern-button text-lg px-10 py-6 hover-lift-lg">
                Start Learning
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 hover:bg-primary hover:text-white hover-lift-lg glow-on-hover"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16 smooth-enter">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Master Any Language with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of language learning with our comprehensive platform
            </p>
          </div>
          
          <div className="feature-grid">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary" />,
                title: "Personalized Learning Paths",
                description: "Get a customized learning experience tailored to your goals, interests, and proficiency level.",
              },
              {
                icon: <Mic className="w-8 h-8 text-primary" />,
                title: "Dynamic Voice Conversations",
                description: "Practice with AI-powered voice interactions for natural language learning.",
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-primary" />,
                title: "Scenario-based Lessons",
                description: "Learn through real-world scenarios and practical conversations.",
              },
              {
                icon: <ChartLine className="w-8 h-8 text-primary" />,
                title: "Progress Tracking",
                description: "Monitor your improvement with detailed progress analytics and insights.",
              },
              {
                icon: <Brain className="w-8 h-8 text-primary" />,
                title: "Adaptive Difficulty",
                description: "Experience dynamic difficulty adjustment based on your performance.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-primary" />,
                title: "Achievement System",
                description: "Stay motivated with rewards and milestones as you progress.",
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-morphism p-8 rounded-2xl space-y-4 hover-card smooth-enter"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-4 w-fit rounded-xl gradient-primary text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold gradient-text">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Image Sections */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 smooth-enter">
              <h2 className="text-4xl font-bold gradient-text">
                Learn Through Natural Conversations
              </h2>
              <p className="text-xl text-gray-600">
                Practice with AI language partners that adapt to your level and learning style. 
                Get instant feedback and improve your speaking skills naturally.
              </p>
              <ul className="space-y-6">
                {[
                  "Realistic conversation scenarios",
                  "Natural language processing",
                  "Adaptive difficulty levels",
                  "Real-time pronunciation feedback",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 smooth-enter" 
                      style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="p-2 rounded-lg gradient-primary">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative smooth-enter hover-lift-lg">
              <img 
                src="/photo-1649972904349-6e44c42644a7"
                alt="Natural Language Learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 smooth-enter">
              <h2 className="text-4xl font-bold gradient-text">
                Learn Faster with AI-Powered Feedback
              </h2>
              <p className="text-xl text-gray-600">
                Our advanced AI provides real-time corrections and suggestions to help you 
                improve your pronunciation and grammar quickly.
              </p>
              <ul className="space-y-6">
                {[
                  "Real-time pronunciation feedback",
                  "Grammar correction and explanations",
                  "Vocabulary suggestions based on context",
                  "Personalized learning path",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4 smooth-enter"
                      style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="p-2 rounded-lg gradient-primary">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative smooth-enter hover-lift-lg">
              <img 
                src="/photo-1486312338219-ce68d2c6f44d"
                alt="AI Language Learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 border-t border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="text-3xl font-bold gradient-text">
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
              <div key={index} className="space-y-6 smooth-enter" 
                   style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="font-semibold text-xl gradient-text">{section.title}</h3>
                <ul className="space-y-4">
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
          
          <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
            &copy; {new Date().getFullYear()} LangPod. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

