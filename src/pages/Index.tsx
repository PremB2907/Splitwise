import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ExpenseTracker } from "@/components/ExpenseTracker";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ExpenseTracker />
      <CallToAction />
    </div>
  );
};

export default Index;