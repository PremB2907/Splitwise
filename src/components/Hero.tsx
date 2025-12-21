import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calculator, Smartphone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-paisley">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative Pixel Border */}
      <div className="absolute inset-4 border-4 border-dashed border-foreground/20 pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-foreground/10 backdrop-blur-sm border-2 border-foreground/30 text-foreground mb-6 font-retro text-lg">
              <Users className="w-5 h-5 mr-2" />
              <span>★ PERFECT FOR COLLEGE GROUPS ★</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-foreground mb-8 leading-relaxed tracking-wide">
              SPLIT EXPENSES,
              <br />
              <span className="text-warning drop-shadow-[3px_3px_0_hsl(var(--foreground))]">STAY FRIENDS</span>
            </h1>
            
            <p className="text-xl font-retro text-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              NO MORE AWKWARD MONEY CONVERSATIONS! TRACK GROUP EXPENSES, SPLIT BILLS INSTANTLY, 
              AND SETTLE UP WITH UPI. BUILT FOR COLLEGE SQUADS WHO DO EVERYTHING TOGETHER.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary hover-lift text-base px-8 py-6 border-3 border-foreground font-retro tracking-wider">
                START SPLITTING NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-background/20 text-foreground border-3 border-foreground hover:bg-background/40 backdrop-blur-sm text-base px-8 py-6 font-retro tracking-wider"
              >
                SEE HOW IT WORKS
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-12 text-foreground/90 font-retro text-lg">
              <div className="flex items-center gap-2 bg-success/20 px-4 py-2 border-2 border-foreground/30">
                <Calculator className="w-5 h-5" />
                <span>SMART SPLITTING</span>
              </div>
              <div className="flex items-center gap-2 bg-warning/20 px-4 py-2 border-2 border-foreground/30">
                <Smartphone className="w-5 h-5" />
                <span>UPI INTEGRATION</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/20 px-4 py-2 border-2 border-foreground/30">
                <Users className="w-5 h-5" />
                <span>GROUP FRIENDLY</span>
              </div>
            </div>
          </div>
          
          {/* Right - Decorative Pixel Art Card */}
          <div className="relative lg:block hidden">
            <div className="relative bg-card border-4 border-foreground shadow-elevated p-8">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary border-2 border-foreground" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary border-2 border-foreground" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-success border-2 border-foreground" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-warning border-2 border-foreground" />
              
              <div className="space-y-6 font-retro text-xl">
                <div className="flex items-center justify-between p-4 bg-primary/20 border-2 border-foreground">
                  <span>🎬 MOVIE NIGHT</span>
                  <span className="text-primary font-bold">₹1200</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-success/20 border-2 border-foreground">
                  <span>🍕 DINNER</span>
                  <span className="text-success font-bold">₹800</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-warning/20 border-2 border-foreground">
                  <span>🚗 UBER</span>
                  <span className="text-warning font-bold">₹300</span>
                </div>
                <div className="p-4 bg-secondary/20 border-2 border-foreground text-center">
                  <span className="text-secondary">TOTAL: ₹2300</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Floating Pixel Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-16 h-16 bg-success border-4 border-foreground shadow-card flex items-center justify-center">
          <span className="text-success-foreground font-pixel text-xl">₹</span>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="w-20 h-20 bg-warning border-4 border-foreground shadow-card flex items-center justify-center">
          <Users className="w-8 h-8 text-warning-foreground" />
        </div>
      </div>

      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-secondary border-4 border-foreground shadow-card flex items-center justify-center">
          <span className="text-secondary-foreground font-pixel text-sm">★</span>
        </div>
      </div>
    </section>
  );
};
