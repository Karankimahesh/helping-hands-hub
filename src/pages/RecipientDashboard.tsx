import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Package, Clock, CheckCircle, Plus, ArrowRight, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const myRequests = [
  { id: 1, item: "Winter Clothing (Family of 4)", status: "fulfilled", date: "Dec 25, 2024", donor: "Anonymous" },
  { id: 2, item: "Non-perishable Food", status: "matched", date: "Jan 1, 2025", donor: "Local Church" },
  { id: 3, item: "School Supplies for 2 children", status: "pending", date: "Jan 3, 2025", donor: "Searching..." },
];

const statusColors = {
  "fulfilled": "bg-secondary text-secondary-foreground",
  "matched": "bg-primary text-primary-foreground",
  "pending": "bg-muted text-muted-foreground",
};

const RecipientDashboard = () => {
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
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Sarah</span>
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
          <h1 className="font-display text-3xl font-bold mb-2">Hello, Sarah! 💜</h1>
          <p className="text-muted-foreground">We're here to help. Track your requests and incoming donations below.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: CheckCircle, label: "Requests Fulfilled", value: "8", color: "text-secondary" },
            { icon: Package, label: "In Progress", value: "2", color: "text-primary" },
            { icon: Clock, label: "Pending", value: "1", color: "text-muted-foreground" },
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

        {/* Quick Action */}
        <Link to="/request-help">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-xl p-6 cursor-pointer hover:shadow-medium transition-shadow mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <Plus className="w-8 h-8 mb-3" />
                <h3 className="font-display text-xl font-semibold mb-1">Request Assistance</h3>
                <p className="text-secondary-foreground/80 text-sm">Tell us what you need and we'll find donors to help</p>
              </div>
              <ArrowRight className="w-8 h-8" />
            </div>
          </motion.div>
        </Link>

        {/* My Requests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold">My Requests</h2>
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {myRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{request.item}</h4>
                  <p className="text-sm text-muted-foreground">From: {request.donor} • {request.date}</p>
                </div>
                <Badge className={statusColors[request.status as keyof typeof statusColors]}>
                  {request.status}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipientDashboard;
