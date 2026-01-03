import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Package, Truck, Clock, Plus, ArrowRight, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const myDonations = [
  { id: 1, item: "Winter Jackets (5)", status: "delivered", date: "Dec 28, 2024", recipient: "Family in Need" },
  { id: 2, item: "Canned Food (20 items)", status: "in-transit", date: "Jan 2, 2025", recipient: "Community Shelter" },
  { id: 3, item: "School Supplies", status: "pending", date: "Jan 3, 2025", recipient: "Matching..." },
];

const statusColors = {
  "delivered": "bg-secondary text-secondary-foreground",
  "in-transit": "bg-primary text-primary-foreground",
  "pending": "bg-muted text-muted-foreground",
};

const DonorDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">GiveHope</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">John Donor</span>
              </div>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground">Thank you for being a generous donor. Here's your giving overview.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Package, label: "Total Donations", value: "28", color: "text-primary" },
            { icon: Truck, label: "In Transit", value: "3", color: "text-secondary" },
            { icon: Heart, label: "Lives Impacted", value: "15", color: "text-accent" },
            { icon: Clock, label: "Pending", value: "2", color: "text-muted-foreground" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3`} />
              <div className="font-display text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <Link to="/donate">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-hero text-primary-foreground rounded-xl p-6 cursor-pointer hover:shadow-medium transition-shadow"
            >
              <Plus className="w-8 h-8 mb-3" />
              <h3 className="font-display text-xl font-semibold mb-1">Donate Items</h3>
              <p className="text-primary-foreground/80 text-sm">List new items for donation</p>
            </motion.div>
          </Link>
          <Link to="/drives">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card border-2 border-primary/20 rounded-xl p-6 cursor-pointer hover:border-primary transition-colors"
            >
              <Heart className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-xl font-semibold mb-1">Join a Drive</h3>
              <p className="text-muted-foreground text-sm">Participate in active campaigns</p>
            </motion.div>
          </Link>
        </div>

        {/* Recent Donations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-card rounded-xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold">Recent Donations</h2>
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {myDonations.map((donation) => (
              <div key={donation.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{donation.item}</h4>
                  <p className="text-sm text-muted-foreground">{donation.recipient} • {donation.date}</p>
                </div>
                <Badge className={statusColors[donation.status as keyof typeof statusColors]}>
                  {donation.status.replace("-", " ")}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DonorDashboard;
