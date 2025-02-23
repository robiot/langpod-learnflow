
import { Button } from "@/components/ui/button";
import { Sparkles, Globe, Mic } from "lucide-react";

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
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

            <div className="flex justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-primary" />,
                title: "AI-Powered Learning",
                description:
                  "Personalized lessons that adapt to your learning style and pace",
              },
              {
                icon: <Globe className="w-6 h-6 text-primary" />,
                title: "Multiple Languages",
                description:
                  "Learn any language with natural, context-based scenarios",
              },
              {
                icon: <Mic className="w-6 h-6 text-primary" />,
                title: "Voice Technology",
                description:
                  "Practice speaking with advanced voice recognition and feedback",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass p-6 space-y-4 animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 w-fit rounded-lg bg-primary/10">
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
