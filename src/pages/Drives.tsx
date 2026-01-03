import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Users, ArrowRight, Search, Filter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const allDrives = [
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
  {
    id: 4,
    title: "Medical Supplies Drive",
    description: "Collect essential medical supplies for rural health clinics.",
    location: "Houston, TX",
    date: "Mar 1 - Apr 30",
    participants: 167,
    category: "Medical",
    urgent: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Blanket & Bedding Drive",
    description: "Provide warmth and comfort to homeless shelters.",
    location: "Seattle, WA",
    date: "Dec 1 - Jan 31",
    participants: 298,
    category: "Clothing",
    urgent: true,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "Children's Book Collection",
    description: "Build libraries for underserved schools and community centers.",
    location: "Miami, FL",
    date: "Ongoing",
    participants: 145,
    category: "Education",
    urgent: false,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop",
  },
];

const Drives = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredDrives = allDrives.filter((drive) => {
    const matchesSearch = drive.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drive.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || drive.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-muted/30">
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
            <div className="flex items-center gap-3">
              <Link to="/">
                <Button variant="ghost">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <Link to="/organize-drive">
                <Button variant="default">Organize a Drive</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Donation Drives</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join active campaigns and make an immediate impact in communities that need it most.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Clothing">Clothing</SelectItem>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Medical">Medical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Drives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDrives.map((drive, index) => (
              <motion.div
                key={drive.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

          {filteredDrives.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No drives found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Drives;
