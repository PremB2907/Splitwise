import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Plus, 
  Users, 
  Calculator, 
  IndianRupee, 
  Coffee, 
  Car, 
  Popcorn,
  Trophy,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

// Mock data for demonstration
const mockGroup = {
  name: "COLLEGE SQUAD",
  members: [
    { id: 1, name: "Rahul", balance: 150 },
    { id: 2, name: "Priya", balance: -75 },
    { id: 3, name: "Amit", balance: -25 },
    { id: 4, name: "Sneha", balance: 50 },
    { id: 5, name: "Karan", balance: -100 }
  ]
};

const mockActivities = [
  {
    id: 1,
    title: "MOVIE NIGHT",
    amount: 1200,
    paidBy: "Rahul",
    participants: ["Rahul", "Priya", "Amit", "Sneha"],
    type: "entertainment",
    date: "TODAY",
    icon: Popcorn,
    emoji: "🎬"
  },
  {
    id: 2,
    title: "DINNER",
    amount: 800,
    paidBy: "Sneha",
    participants: ["Rahul", "Priya", "Sneha", "Karan"],
    type: "food",
    date: "YESTERDAY",
    icon: Coffee,
    emoji: "🍕"
  },
  {
    id: 3,
    title: "UBER RIDE",
    amount: 300,
    paidBy: "Priya",
    participants: ["Priya", "Amit", "Karan"],
    type: "travel",
    date: "2 DAYS AGO",
    icon: Car,
    emoji: "🚗"
  }
];

export const ExpenseTracker = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <section className="py-20 bg-background pattern-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-secondary border-4 border-foreground shadow-card mb-6">
            <span className="font-pixel text-secondary-foreground text-sm">★ DEMO ★</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-pixel text-foreground mb-6 leading-relaxed">
            SEE IT IN <span className="text-primary">ACTION</span>
          </h2>
          <p className="text-xl font-retro text-muted-foreground max-w-2xl mx-auto">
            EXPERIENCE HOW SIMPLE GROUP EXPENSE TRACKING CAN BE. HERE'S YOUR DASHBOARD PREVIEW.
          </p>
        </div>
        
        {/* Interactive Demo */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            
            <TabsList className="grid w-full grid-cols-3 bg-muted border-4 border-foreground p-1 gap-1">
              <TabsTrigger value="dashboard" className="flex items-center gap-2 font-retro text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border-2 border-transparent data-[state=active]:border-foreground">
                <Users className="w-4 h-4" />
                DASHBOARD
              </TabsTrigger>
              <TabsTrigger value="add-expense" className="flex items-center gap-2 font-retro text-base data-[state=active]:bg-success data-[state=active]:text-success-foreground border-2 border-transparent data-[state=active]:border-foreground">
                <Plus className="w-4 h-4" />
                ADD NEW
              </TabsTrigger>
              <TabsTrigger value="settlements" className="flex items-center gap-2 font-retro text-base data-[state=active]:bg-warning data-[state=active]:text-warning-foreground border-2 border-transparent data-[state=active]:border-foreground">
                <CheckCircle2 className="w-4 h-4" />
                SETTLE UP
              </TabsTrigger>
            </TabsList>
            
            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              
              {/* Group Overview */}
              <Card className="bg-card border-4 border-foreground shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 font-retro text-2xl">
                        <Users className="w-6 h-6 text-primary" />
                        {mockGroup.name}
                      </CardTitle>
                      <CardDescription className="font-retro text-lg">5 MEMBERS • 3 ACTIVITIES</CardDescription>
                    </div>
                    <Badge className="font-pixel text-xs bg-success text-success-foreground border-2 border-foreground px-3 py-1">
                      <Trophy className="w-3 h-3 mr-1" />
                      ACTIVE
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
              
              {/* Balances */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-4 border-foreground shadow-card">
                  <CardHeader>
                    <CardTitle className="font-retro text-xl">GROUP BALANCES</CardTitle>
                    <CardDescription className="font-retro">WHO OWES WHAT</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {mockGroup.members.map(member => (
                      <div key={member.id} className="flex items-center justify-between p-3 border-2 border-foreground bg-muted/30">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10 border-2 border-foreground">
                            <AvatarFallback className="font-pixel text-sm bg-primary text-primary-foreground">{member.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-retro text-lg">{member.name.toUpperCase()}</span>
                        </div>
                        <div className={`flex items-center font-retro text-lg ${
                          member.balance > 0 ? 'text-success' : 
                          member.balance < 0 ? 'text-destructive' : 'text-muted-foreground'
                        }`}>
                          <IndianRupee className="w-4 h-4 mr-1" />
                          {Math.abs(member.balance)}
                          {member.balance > 0 && <span className="ml-1 text-sm">↑</span>}
                          {member.balance < 0 && <span className="ml-1 text-sm">↓</span>}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                {/* Recent Activities */}
                <Card className="border-4 border-foreground shadow-card">
                  <CardHeader>
                    <CardTitle className="font-retro text-xl">RECENT ACTIVITIES</CardTitle>
                    <CardDescription className="font-retro">LATEST EXPENSES</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {mockActivities.map(activity => (
                      <div key={activity.id} className="flex items-center gap-3 p-3 border-2 border-foreground bg-muted/30">
                        <div className="w-12 h-12 bg-primary/20 border-2 border-foreground flex items-center justify-center text-2xl">
                          {activity.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="font-retro text-lg">{activity.title}</div>
                          <div className="font-retro text-sm text-muted-foreground">
                            BY {activity.paidBy.toUpperCase()} • {activity.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-retro text-lg flex items-center text-primary">
                            <IndianRupee className="w-4 h-4 mr-1" />
                            {activity.amount}
                          </div>
                          <div className="font-retro text-xs text-muted-foreground">
                            {activity.participants.length} PPL
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Add Expense Tab */}
            <TabsContent value="add-expense" className="space-y-6">
              <Card className="border-4 border-foreground shadow-card max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-retro text-2xl">
                    <Plus className="w-6 h-6 text-success" />
                    ADD NEW EXPENSE
                  </CardTitle>
                  <CardDescription className="font-retro text-lg">
                    RECORD & AUTO-SPLIT AMONG FRIENDS
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expense-title" className="font-retro text-base">WHAT FOR?</Label>
                      <Input 
                        id="expense-title"
                        placeholder="E.G., LUNCH AT KFC"
                        className="bg-muted/30 border-2 border-foreground font-retro"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expense-amount" className="font-retro text-base">AMOUNT</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="expense-amount"
                          placeholder="0.00"
                          className="pl-10 bg-muted/30 border-2 border-foreground font-retro"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="font-retro text-base">WHO PARTICIPATED?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {mockGroup.members.map(member => (
                        <div key={member.id} className="flex items-center space-x-2 p-3 border-2 border-foreground bg-muted/20 hover:bg-muted/40 cursor-pointer">
                          <input 
                            type="checkbox" 
                            id={`member-${member.id}`}
                            className="w-5 h-5 border-2 border-foreground accent-primary"
                            defaultChecked={member.id <= 3}
                          />
                          <label htmlFor={`member-${member.id}`} className="font-retro text-base cursor-pointer">
                            {member.name.toUpperCase()}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-success border-4 border-foreground shadow-card hover-lift font-retro text-lg py-6">
                    <Calculator className="w-5 h-5 mr-2" />
                    SPLIT & ADD EXPENSE
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Settlements Tab */}
            <TabsContent value="settlements" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Pending Settlements */}
                <Card className="border-4 border-foreground shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-warning font-retro text-xl">
                      <AlertCircle className="w-6 h-6" />
                      PENDING
                    </CardTitle>
                    <CardDescription className="font-retro">PAYMENTS DUE</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-warning/20 border-2 border-foreground">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-retro text-lg">PRIYA → RAHUL</span>
                        <span className="font-retro text-lg flex items-center text-warning">
                          <IndianRupee className="w-4 h-4 mr-1" />
                          75
                        </span>
                      </div>
                      <Button size="sm" className="w-full gradient-success border-2 border-foreground font-retro">
                        PAY VIA UPI
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-warning/20 border-2 border-foreground">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-retro text-lg">KARAN → RAHUL</span>
                        <span className="font-retro text-lg flex items-center text-warning">
                          <IndianRupee className="w-4 h-4 mr-1" />
                          100
                        </span>
                      </div>
                      <Button size="sm" className="w-full gradient-success border-2 border-foreground font-retro">
                        PAY VIA UPI
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Settlement History */}
                <Card className="border-4 border-foreground shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-success font-retro text-xl">
                      <CheckCircle2 className="w-6 h-6" />
                      COMPLETED
                    </CardTitle>
                    <CardDescription className="font-retro">PAID UP</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-success/20 border-2 border-foreground">
                      <div>
                        <div className="font-retro text-lg">AMIT → SNEHA</div>
                        <div className="font-retro text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          2 HOURS AGO
                        </div>
                      </div>
                      <div className="font-retro text-lg text-success flex items-center">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        25 ✓
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-success/20 border-2 border-foreground">
                      <div>
                        <div className="font-retro text-lg">SNEHA → PRIYA</div>
                        <div className="font-retro text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          YESTERDAY
                        </div>
                      </div>
                      <div className="font-retro text-lg text-success flex items-center">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        150 ✓
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
          </Tabs>
        </div>
      </div>
    </section>
  );
};
