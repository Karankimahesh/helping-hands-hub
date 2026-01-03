import { motion } from "framer-motion";
import { Users, ShieldCheck, Truck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  {
    icon: ShieldCheck,
    title: "Admin",
    description: "Oversee platform operations, manage donation drives, and ensure transparency across all activities.",
    features: ["Manage users & drives", "Approve donations", "Generate reports"],
    color: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Donor",
    description: "List items for donation, track your contributions, and participate in emergency relief drives.",
    features: ["List donations", "Track delivery", "Join drives"],
    color: "border-secondary/30 hover:border-secondary",
    iconBg: "bg-secondary/10 text-secondary",
  },
  {
    icon: Users,
    title: "Recipient",
    description: "Request necessary items, track incoming deliveries, and provide feedback on received donations.",
    features: ["Request items", "Track status", "Rate donations"],
    color: "border-accent/30 hover:border-accent",
    iconBg: "bg-accent/10 text-accent",
  },
  {
    icon: Truck,
    title: "Logistics Coordinator",
    description: "Organize transportation, manage inventory, and ensure timely delivery to those in need.",
    features: ["Plan routes", "Manage inventory", "Update status"],
    color: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/10 text-primary",
  },
];

const UserRoles = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            For Everyone
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Find Your Role
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're giving or receiving, there's a place for you in our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card rounded-2xl p-8 border-2 ${role.color} transition-all duration-300 shadow-soft hover:shadow-medium`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 ${role.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <role.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  <ul className="space-y-2 mb-6">
                    {role.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
