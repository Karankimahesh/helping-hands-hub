import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Target, Users, Globe, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every action we take is driven by genuine care for those in need.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "We ensure every donation reaches its intended recipient with full accountability.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of people coming together to create lasting change.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making it easy for anyone, anywhere to give or receive help when needed.",
  },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Started with a mission to connect donors with those in need" },
  { year: "2021", title: "10K Donations", description: "Reached our first major milestone" },
  { year: "2022", title: "Nationwide", description: "Expanded to all 50 states" },
  { year: "2023", title: "50K Lives", description: "Impacted over 50,000 lives through donations" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">GiveHope</span>
            </Link>
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Connecting Hearts, <span className="text-gradient">Changing Lives</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              GiveHope was born from a simple belief: everyone deserves access to life's essentials. 
              We're building bridges between generous donors and those facing difficult times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We're on a mission to create a world where no one has to struggle alone. 
                Through technology and community, we make it effortless to donate essential items 
                to those who need them most—especially during emergencies and natural disasters.
              </p>
              <p className="text-muted-foreground text-lg">
                Our platform connects donors, recipients, and logistics coordinators to ensure 
                that help arrives quickly and efficiently, creating a seamless giving experience 
                that benefits everyone involved.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "50K+", label: "Items Donated" },
                { value: "12K+", label: "Lives Touched" },
                { value: "200+", label: "Active Drives" },
                { value: "99%", label: "Delivery Rate" },
              ].map((stat, index) => (
                <div key={stat.label} className="bg-card rounded-xl p-6 text-center shadow-soft">
                  <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at GiveHope.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-soft"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">From a small idea to nationwide impact.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                  <span className="font-display text-lg font-bold text-primary-foreground">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-xl font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of givers and recipients. Together, we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sign-up">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Join GiveHope
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
