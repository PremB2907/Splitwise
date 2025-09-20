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
    <section className="py-20 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <Card className="gradient-card shadow-elevated border-0 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Join 1000+ Groups Already Splitting Smart</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to End Money Drama
              <br />
              <span className="text-primary">In Your Squad?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of college groups who've ditched awkward money conversations. 
              Start tracking, splitting, and settling expenses like a pro.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="gradient-primary hover-lift text-lg px-8 py-6">
                <Users className="w-5 h-5 mr-2" />
                Create Your First Group
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-foreground border-border hover:bg-muted/50 text-lg px-8 py-6"
              >
                See Demo First
              </Button>
            </div>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Instant Setup</h3>
                <p className="text-sm text-muted-foreground">Get started in under 2 minutes</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">UPI Ready</h3>
                <p className="text-sm text-muted-foreground">Direct payment integration</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">100% Secure</h3>
                <p className="text-sm text-muted-foreground">Bank-grade security</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Always Free</h3>
                <p className="text-sm text-muted-foreground">No hidden charges ever</p>
              </div>
            </div>
            
          </CardContent>
        </Card>
        
        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">Trusted by students from</p>
          <div className="flex flex-wrap justify-center gap-6 text-white/60">
            <Badge variant="outline" className="border-white/30 text-white/70">IIT Delhi</Badge>
            <Badge variant="outline" className="border-white/30 text-white/70">DU</Badge>
            <Badge variant="outline" className="border-white/30 text-white/70">BIT Pilani</Badge>
            <Badge variant="outline" className="border-white/30 text-white/70">NIT Trichy</Badge>
            <Badge variant="outline" className="border-white/30 text-white/70">BITS Goa</Badge>
          </div>
        </div>
        
      </div>
    </section>
  );
};