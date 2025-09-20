import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calculator, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Perfect for College Groups</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Split Expenses,
              <br />
              <span className="text-primary-light">Stay Friends</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              No more awkward money conversations! Track group expenses, split bills instantly, 
              and settle up with UPI. Built for college squads who do everything together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary hover-lift text-lg px-8 py-6">
                Start Splitting Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
              >
                See How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 text-white/80">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                <span>Smart Splitting</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                <span>UPI Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Group Friendly</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated hover-glow">
              <img 
                src={heroImage} 
                alt="College students managing group expenses together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center shadow-glow">
          <span className="text-success-foreground font-bold">₹</span>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 animate-bounce delay-500">
        <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center shadow-glow">
          <Users className="w-6 h-6 text-warning-foreground" />
        </div>
      </div>
    </section>
  );
};