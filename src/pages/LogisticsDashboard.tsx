import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Truck, Package, MapPin, Clock, CheckCircle, LogOut, User, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const deliveries = [
  { id: 1, item: "Winter Jackets (5)", from: "123 Main St", to: "456 Oak Ave", status: "in-transit", priority: "high" },
  { id: 2, item: "Food Supplies (Box)", from: "Community Center", to: "Shelter Home", status: "pending", priority: "urgent" },
  { id: 3, item: "School Supplies", from: "Warehouse A", to: "Lincoln Elementary", status: "scheduled", priority: "normal" },
  { id: 4, item: "Medical Supplies", from: "Hospital Donation", to: "Rural Clinic", status: "pending", priority: "high" },
];

const statusColors = {
  "in-transit": "bg-primary text-primary-foreground",
  "pending": "bg-muted text-muted-foreground",
  "scheduled": "bg-secondary text-secondary-foreground",
  "delivered": "bg-accent text-accent-foreground",
};

const priorityColors = {
  "urgent": "bg-destructive text-destructive-foreground",
  "high": "bg-primary text-primary-foreground",
  "normal": "bg-muted text-foreground",
};

const LogisticsDashboard = () => {
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
              <Badge variant="outline" className="ml-2">Logistics</Badge>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Driver Mike</span>
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
          <h1 className="font-display text-3xl font-bold mb-2">Logistics Dashboard 🚚</h1>
          <p className="text-muted-foreground">Manage deliveries and ensure timely distribution of donations.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Truck, label: "Today's Deliveries", value: "8", color: "text-primary" },
            { icon: Package, label: "Pending Pickup", value: "12", color: "text-secondary" },
            { icon: CheckCircle, label: "Completed Today", value: "5", color: "text-accent" },
            { icon: Clock, label: "Avg Delivery Time", value: "2.5h", color: "text-muted-foreground" },
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

        {/* Deliveries List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold">Active Deliveries</h2>
            <Button variant="default" size="sm">
              <Navigation className="w-4 h-4 mr-2" />
              Open Route Planner
            </Button>
          </div>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{delivery.item}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        From: {delivery.from}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        To: {delivery.to}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={priorityColors[delivery.priority as keyof typeof priorityColors]}>
                      {delivery.priority}
                    </Badge>
                    <Badge className={statusColors[delivery.status as keyof typeof statusColors]}>
                      {delivery.status.replace("-", " ")}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  <Button size="sm" variant="default">
                    <Navigation className="w-4 h-4 mr-1" />
                    Navigate
                  </Button>
                  <Button size="sm" variant="secondary">Mark Delivered</Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
