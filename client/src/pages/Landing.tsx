import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rainbow, Heart, Users, Sparkles } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rainbow className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rainbow Rise
            </span>
          </div>
          <Button 
            onClick={() => window.location.href = '/api/login'}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Log In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Empowering LGBTQ+ Spaces Across the Universe
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join Rainbow Rise, the transformative crowdfunding platform where the LGBTQ+ community creates and funds safe, vibrant venues in Austin and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = '/api/login'}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 text-lg px-8 py-3"
                onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Rainbow Rise?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Community-Driven</h3>
                <p className="text-gray-600">
                  Built by and for the LGBTQ+ community, ensuring authentic representation and support for our diverse needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Safe Spaces</h3>
                <p className="text-gray-600">
                  Creating inclusive venues where everyone can be their authentic selves without fear or judgment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
                <p className="text-gray-600">
                  Cutting-edge AI-powered storytelling and imagery to bring your campaign visions to life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of supporters who are building a more inclusive future, one venue at a time.
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.href = '/api/login'}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rainbow className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold">Rainbow Rise</span>
          </div>
          <p className="text-gray-400">
            Empowering LGBTQ+ communities across the universe. 🌈
          </p>
        </div>
      </footer>
    </div>
  );
}