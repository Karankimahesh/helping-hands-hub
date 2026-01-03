import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Package, Truck, AlertTriangle, BarChart3, Settings, LogOut, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recentActivity = [
  { id: 1, type: "donation", message: "New donation listed: Winter Jackets (10)", time: "5 min ago" },
  { id: 2, type: "request", message: "Urgent request: Emergency food supplies", time: "12 min ago" },
  { id: 3, type: "drive", message: "New drive created: Spring Clothing Drive", time: "1 hour ago" },
  { id: 4, type: "user", message: "New logistics coordinator registered", time: "2 hours ago" },
];

const AdminDashboard = () => {
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
              <Badge variant="secondary" className="ml-2">Admin</Badge>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Admin</span>
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
          <h1 className="font-display text-3xl font-bold mb-2">Admin Dashboard 🛡️</h1>
          <p className="text-muted-foreground">Monitor platform operations and manage donation activities.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Users", value: "2,456", change: "+12%", color: "text-primary" },
            { icon: Package, label: "Active Donations", value: "342", change: "+8%", color: "text-secondary" },
            { icon: Truck, label: "Active Drives", value: "28", change: "+3", color: "text-accent" },
            { icon: AlertTriangle, label: "Urgent Requests", value: "15", change: "-2", color: "text-destructive" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-start justify-between mb-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{stat.change}</span>
              </div>
              <div className="font-display text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-xl p-6 shadow-soft"
          >
            <h2 className="font-display text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="w-4 h-4 mr-2" />
                Review Donations
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Truck className="w-4 h-4 mr-2" />
                Manage Drives
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Reports
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Urgent Requests (15)
              </Button>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 bg-card rounded-xl p-6 shadow-soft"
          >
            <h2 className="font-display text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'donation' ? 'bg-primary' :
                    activity.type === 'request' ? 'bg-destructive' :
                    activity.type === 'drive' ? 'bg-secondary' : 'bg-accent'
                  }`} />
                  <div className="flex-1">
                    <p className="font-medium">{activity.message}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
