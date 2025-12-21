import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Smartphone, 
  Shield, 
  Zap, 
  Users,
  Star,
  Trophy
} from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 gradient-hero pattern-paisley relative overflow-hidden">
      {/* Decorative border */}
      <div className="absolute inset-8 border-4 border-dashed border-foreground/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <Card className="bg-card border-4 border-foreground shadow-elevated max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-primary/20 border-2 border-foreground text-foreground mb-8">
              <Trophy className="w-5 h-5 mr-2 text-primary" />
              <span className="font-retro text-lg">★ JOIN 1000+ GROUPS ★</span>
              <Trophy className="w-5 h-5 ml-2 text-primary" />
            </div>
            
            {/* Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-pixel text-foreground mb-8 leading-relaxed">
              READY TO END
              <br />
              <span className="text-primary drop-shadow-[3px_3px_0_hsl(var(--foreground)/0.3)]">MONEY DRAMA?</span>
            </h2>
            
            <p className="text-xl font-retro text-muted-foreground mb-10 max-w-2xl mx-auto">
              JOIN THOUSANDS OF COLLEGE GROUPS WHO'VE DITCHED AWKWARD MONEY TALKS. 
              START TRACKING, SPLITTING, AND SETTLING LIKE A PRO.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="gradient-primary border-4 border-foreground shadow-card hover-lift font-retro text-lg px-8 py-6">
                <Users className="w-5 h-5 mr-2" />
                CREATE FIRST GROUP
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-background text-foreground border-4 border-foreground hover:bg-muted shadow-card hover-lift font-retro text-lg px-8 py-6"
              >
                SEE DEMO FIRST
              </Button>
            </div>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-primary/10 border-2 border-foreground">
                <div className="w-12 h-12 bg-primary border-2 border-foreground flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-retro text-lg text-foreground mb-1">INSTANT</h3>
                <p className="font-retro text-sm text-muted-foreground">2 MIN SETUP</p>
              </div>
              
              <div className="p-4 bg-success/10 border-2 border-foreground">
                <div className="w-12 h-12 bg-success border-2 border-foreground flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-success-foreground" />
                </div>
                <h3 className="font-retro text-lg text-foreground mb-1">UPI READY</h3>
                <p className="font-retro text-sm text-muted-foreground">DIRECT PAY</p>
              </div>
              
              <div className="p-4 bg-warning/10 border-2 border-foreground">
                <div className="w-12 h-12 bg-warning border-2 border-foreground flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-warning-foreground" />
                </div>
                <h3 className="font-retro text-lg text-foreground mb-1">100% SAFE</h3>
                <p className="font-retro text-sm text-muted-foreground">BANK GRADE</p>
              </div>
              
              <div className="p-4 bg-secondary/10 border-2 border-foreground">
                <div className="w-12 h-12 bg-secondary border-2 border-foreground flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-retro text-lg text-foreground mb-1">FREE</h3>
                <p className="font-retro text-sm text-muted-foreground">NO CHARGES</p>
              </div>
            </div>
            
          </CardContent>
        </Card>
        
        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="font-retro text-foreground/80 mb-4 text-lg">★ TRUSTED BY STUDENTS FROM ★</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-card border-2 border-foreground text-foreground font-retro text-sm px-4 py-2">IIT DELHI</Badge>
            <Badge className="bg-card border-2 border-foreground text-foreground font-retro text-sm px-4 py-2">DU</Badge>
            <Badge className="bg-card border-2 border-foreground text-foreground font-retro text-sm px-4 py-2">BITS PILANI</Badge>
            <Badge className="bg-card border-2 border-foreground text-foreground font-retro text-sm px-4 py-2">NIT TRICHY</Badge>
            <Badge className="bg-card border-2 border-foreground text-foreground font-retro text-sm px-4 py-2">BITS GOA</Badge>
          </div>
        </div>
        
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-primary border-2 border-foreground" />
      <div className="absolute top-4 right-4 w-8 h-8 bg-secondary border-2 border-foreground" />
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-success border-2 border-foreground" />
      <div className="absolute bottom-4 right-4 w-8 h-8 bg-warning border-2 border-foreground" />
    </section>
  );
};
