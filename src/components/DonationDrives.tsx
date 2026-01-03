import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const drives = [
  {
    id: 1,
    title: "Winter Clothing Drive",
    description: "Help families stay warm this winter with essential clothing donations.",
    location: "New York, NY",
    date: "Jan 15 - Feb 28",
    participants: 234,
    category: "Clothing",
    urgent: true,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Emergency Food Relief",
    description: "Support disaster-affected communities with non-perishable food items.",
    location: "Los Angeles, CA",
    date: "Ongoing",
    participants: 456,
    category: "Food",
    urgent: true,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Back to School Supplies",
    description: "Provide essential school supplies to underprivileged students.",
    location: "Chicago, IL",
    date: "Aug 1 - Sep 15",
    participants: 189,
    category: "Education",
    urgent: false,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
  },
];

const DonationDrives = () => {
  return (
    <section id="drives" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Active Campaigns
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Donation Drives
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our active donation campaigns and make an immediate impact in communities that need it most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {drives.map((drive, index) => (
            <motion.div
              key={drive.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={drive.image}
                  alt={drive.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary">{drive.category}</Badge>
                  {drive.urgent && (
                    <Badge className="bg-destructive text-destructive-foreground">Urgent</Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {drive.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{drive.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{drive.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{drive.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{drive.participants} participants</span>
                  </div>
                </div>

                <Link to={`/drives/${drive.id}`}>
                  <Button variant="default" className="w-full group/btn">
                    Join Drive
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/drives">
            <Button variant="outline" size="lg">
              View All Drives
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationDrives;
