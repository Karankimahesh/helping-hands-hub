import { motion } from "framer-motion";
import { Heart, Users, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Making a difference together
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Give Hope,{" "}
            <span className="text-gradient">Change Lives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-body"
          >
            Connect with those in need during emergencies and everyday moments. 
            Donate essentials, organize drives, and make a real impact in your community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="xl">
              <Heart className="w-5 h-5" />
              Start Donating
            </Button>
            <Button variant="hero-outline" size="xl">
              Request Help
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Heart, value: "50K+", label: "Items Donated" },
              { icon: Users, value: "12K+", label: "Lives Touched" },
              { icon: Truck, value: "200+", label: "Active Drives" },
              { icon: Shield, value: "99%", label: "Delivery Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm p-4 rounded-xl shadow-soft"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
