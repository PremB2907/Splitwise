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
  name: "College Squad",
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
    title: "Movie Night",
    amount: 1200,
    paidBy: "Rahul",
    participants: ["Rahul", "Priya", "Amit", "Sneha"],
    type: "entertainment",
    date: "Today",
    icon: Popcorn
  },
  {
    id: 2,
    title: "Dinner at Food Court",
    amount: 800,
    paidBy: "Sneha",
    participants: ["Rahul", "Priya", "Sneha", "Karan"],
    type: "food",
    date: "Yesterday",
    icon: Coffee
  },
  {
    id: 3,
    title: "Uber to Mall",
    amount: 300,
    paidBy: "Priya",
    participants: ["Priya", "Amit", "Karan"],
    type: "travel",
    date: "2 days ago",
    icon: Car
  }
];

export const ExpenseTracker = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See It In <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how simple group expense tracking can be. Here's what your dashboard will look like.
          </p>
        </div>
        
        {/* Interactive Demo */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="add-expense" className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Expense
              </TabsTrigger>
              <TabsTrigger value="settlements" className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Settlements
              </TabsTrigger>
            </TabsList>
            
            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              
              {/* Group Overview */}
              <Card className="gradient-card shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        {mockGroup.name}
                      </CardTitle>
                      <CardDescription>5 members • 3 recent activities</CardDescription>
                    </div>
                    <Badge className="badge-success">
                      <Trophy className="w-3 h-3 mr-1" />
                      Active Group
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
              
              {/* Balances */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Group Balances</CardTitle>
                    <CardDescription>Who owes what to whom</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockGroup.members.map(member => (
                      <div key={member.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>{member.name[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{member.name}</span>
                        </div>
                        <div className={`flex items-center font-semibold ${
                          member.balance > 0 ? 'text-success' : 
                          member.balance < 0 ? 'text-destructive' : 'text-muted-foreground'
                        }`}>
                          <IndianRupee className="w-3 h-3 mr-1" />
                          {Math.abs(member.balance)}
                          {member.balance > 0 && <span className="ml-1 text-xs">gets back</span>}
                          {member.balance < 0 && <span className="ml-1 text-xs">owes</span>}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                {/* Recent Activities */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activities</CardTitle>
                    <CardDescription>Latest group expenses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockActivities.map(activity => (
                      <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <activity.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{activity.title}</div>
                          <div className="text-sm text-muted-foreground">
                            Paid by {activity.paidBy} • {activity.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold flex items-center">
                            <IndianRupee className="w-3 h-3 mr-1" />
                            {activity.amount}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {activity.participants.length} people
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
              <Card className="shadow-card max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5 text-primary" />
                    Add New Expense
                  </CardTitle>
                  <CardDescription>
                    Record a new group expense and split it automatically
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expense-title">What was it for?</Label>
                      <Input 
                        id="expense-title"
                        placeholder="e.g., Lunch at KFC"
                        className="bg-muted/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expense-amount">Amount</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="expense-amount"
                          placeholder="0.00"
                          className="pl-10 bg-muted/30"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Who participated?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {mockGroup.members.map(member => (
                        <div key={member.id} className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            id={`member-${member.id}`}
                            className="rounded border-muted-foreground"
                            defaultChecked={member.id <= 3}
                          />
                          <label htmlFor={`member-${member.id}`} className="text-sm font-medium">
                            {member.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary hover-lift">
                    <Calculator className="w-4 h-4 mr-2" />
                    Split & Add Expense
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Settlements Tab */}
            <TabsContent value="settlements" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Pending Settlements */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-warning">
                      <AlertCircle className="w-5 h-5" />
                      Pending Settlements
                    </CardTitle>
                    <CardDescription>Outstanding payments in your group</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-warning-light rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Priya → Rahul</span>
                        <span className="font-semibold flex items-center">
                          <IndianRupee className="w-3 h-3 mr-1" />
                          75
                        </span>
                      </div>
                      <Button size="sm" className="w-full gradient-success">
                        Pay via UPI
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-warning-light rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Karan → Rahul</span>
                        <span className="font-semibold flex items-center">
                          <IndianRupee className="w-3 h-3 mr-1" />
                          100
                        </span>
                      </div>
                      <Button size="sm" className="w-full gradient-success">
                        Pay via UPI
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Settlement History */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-success">
                      <CheckCircle2 className="w-5 h-5" />
                      Recent Settlements
                    </CardTitle>
                    <CardDescription>Completed payments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
                      <div>
                        <div className="font-medium">Amit → Sneha</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          2 hours ago
                        </div>
                      </div>
                      <div className="font-semibold text-success flex items-center">
                        <IndianRupee className="w-3 h-3 mr-1" />
                        25
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
                      <div>
                        <div className="font-medium">Sneha → Priya</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Yesterday
                        </div>
                      </div>
                      <div className="font-semibold text-success flex items-center">
                        <IndianRupee className="w-3 h-3 mr-1" />
                        150
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