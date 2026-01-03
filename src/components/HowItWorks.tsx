import { motion } from "framer-motion";
import { Gift, Package, HandHeart, Truck } from "lucide-react";

const steps = [
  {
    icon: Gift,
    title: "List Your Donation",
    description: "Easily add items you want to donate - food, clothing, or essential supplies.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Package,
    title: "Match with Recipients",
    description: "Our platform connects your donations with verified individuals and families in need.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Truck,
    title: "Coordinate Delivery",
    description: "Work with our logistics team or choose self-delivery for a personal touch.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: HandHeart,
    title: "Make an Impact",
    description: "Track your contribution and see the real difference you're making in lives.",
    color: "bg-primary/10 text-primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Making a difference has never been easier. Follow these simple steps to start your giving journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow">
                  {index + 1}
                </div>
                
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
