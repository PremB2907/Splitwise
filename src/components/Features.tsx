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
    title: "Smart Group Management",
    description: "Create groups, add friends, and track who's in for each activity. No more confusion about who owes what.",
    badge: "Core Feature",
    badgeVariant: "badge-primary" as const
  },
  {
    icon: Calculator,
    title: "Activity-Based Splitting",
    description: "Movies, food, travel - split expenses by activity and only include the friends who participated.",
    badge: "Smart Split",
    badgeVariant: "badge-success" as const
  },
  {
    icon: Smartphone,
    title: "UPI Quick Settlement",
    description: "Generate UPI payment links instantly. No more cash hassles or forgotten IOUs between friends.",
    badge: "Coming Soon",
    badgeVariant: "badge-warning" as const
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description: "See all your balances at a glance. Know exactly who owes you and what you need to pay back.",
    badge: "Live Updates",
    badgeVariant: "badge-success" as const
  },
  {
    icon: Trophy,
    title: "Gamification & Badges",
    description: "Earn badges like 'Bhai of the Group' for always paying on time. Make settling up fun!",
    badge: "Fun Feature",
    badgeVariant: "badge-primary" as const
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Gentle nudges for pending payments. No more awkward conversations about money.",
    badge: "Auto Reminder",
    badgeVariant: "badge-warning" as const
  },
  {
    icon: Zap,
    title: "Settlement Optimizer",
    description: "Minimize transactions with smart settlement suggestions. Pay less, settle faster.",
    badge: "AI Powered",
    badgeVariant: "badge-primary" as const
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your financial data stays safe with bank-grade security. Only your group can see your expenses.",
    badge: "Secure",
    badgeVariant: "badge-success" as const
  },
  {
    icon: Clock,
    title: "Expense History",
    description: "Track all your past activities and settlements. Perfect for those 'remember when we went to...' moments.",
    badge: "Memory Lane",
    badgeVariant: "badge-primary" as const
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for 
            <span className="text-primary"> Group Expenses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From splitting movie tickets to managing semester trips, we've got all the features 
            college groups need to handle money without the drama.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card hover-lift border-0 shadow-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={feature.badgeVariant}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Trophy className="w-5 h-5 text-success" />
            <span>Trusted by 1000+ college groups across India</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};