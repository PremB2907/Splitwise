import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calculator, 
  Smartphone, 
  Trophy, 
  Bell, 
  BarChart3,
  Zap,
  Shield,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "SMART GROUPS",
    description: "Create groups, add friends, and track who's in for each activity. No more confusion!",
    badge: "CORE",
    color: "primary"
  },
  {
    icon: Calculator,
    title: "ACTIVITY SPLIT",
    description: "Movies, food, travel - split by activity and only include friends who participated.",
    badge: "SMART",
    color: "success"
  },
  {
    icon: Smartphone,
    title: "UPI SETTLEMENT",
    description: "Generate UPI payment links instantly. No more cash hassles or forgotten IOUs.",
    badge: "SOON",
    color: "warning"
  },
  {
    icon: BarChart3,
    title: "LIVE DASHBOARD",
    description: "See all balances at a glance. Know who owes you and what you need to pay.",
    badge: "LIVE",
    color: "accent"
  },
  {
    icon: Trophy,
    title: "BADGES & RANKS",
    description: "Earn badges like 'Bhai of the Group' for always paying on time. Fun!",
    badge: "FUN",
    color: "secondary"
  },
  {
    icon: Bell,
    title: "SMART NUDGES",
    description: "Gentle reminders for pending payments. No more awkward money talks.",
    badge: "AUTO",
    color: "primary"
  },
  {
    icon: Zap,
    title: "OPTIMIZE SETTLE",
    description: "Minimize transactions with smart settlement suggestions. Pay less, settle faster.",
    badge: "AI",
    color: "success"
  },
  {
    icon: Shield,
    title: "SUPER SECURE",
    description: "Bank-grade security. Only your group can see your expenses. Private always.",
    badge: "SAFE",
    color: "accent"
  },
  {
    icon: Clock,
    title: "EXPENSE LOG",
    description: "Track all past activities and settlements. Perfect for memory lane moments.",
    badge: "HISTORY",
    color: "warning"
  }
];

const colorClasses = {
  primary: "bg-primary/20 border-primary text-primary",
  secondary: "bg-secondary/20 border-secondary text-secondary",
  success: "bg-success/20 border-success text-success",
  warning: "bg-warning/20 border-warning text-warning",
  accent: "bg-accent/20 border-accent text-accent",
};

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30 pattern-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-primary border-4 border-foreground shadow-card mb-6">
            <span className="font-pixel text-primary-foreground text-sm">★ FEATURES ★</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-pixel text-foreground mb-6 leading-relaxed">
            EVERYTHING FOR
            <br />
            <span className="text-primary">GROUP EXPENSES</span>
          </h2>
          <p className="text-xl font-retro text-muted-foreground max-w-3xl mx-auto">
            FROM SPLITTING MOVIE TICKETS TO MANAGING SEMESTER TRIPS, WE'VE GOT ALL THE 
            FEATURES COLLEGE GROUPS NEED TO HANDLE MONEY WITHOUT THE DRAMA.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-4 border-foreground shadow-card hover-lift"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 border-3 border-foreground flex items-center justify-center ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <Badge className={`font-pixel text-xs border-2 border-foreground ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="font-retro text-xl tracking-wide">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="font-retro text-lg leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-success/20 px-6 py-3 border-4 border-foreground shadow-card font-retro text-lg">
            <Trophy className="w-6 h-6 text-success" />
            <span>TRUSTED BY 1000+ COLLEGE GROUPS ACROSS INDIA</span>
            <Trophy className="w-6 h-6 text-success" />
          </div>
        </div>
        
      </div>
    </section>
  );
};
