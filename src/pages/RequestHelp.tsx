import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Package, Shirt, UtensilsCrossed, BookOpen, ArrowLeft, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = [
  { id: "clothing", name: "Clothing", icon: Shirt },
  { id: "food", name: "Food", icon: UtensilsCrossed },
  { id: "education", name: "Education", icon: BookOpen },
  { id: "other", name: "Other", icon: Package },
];

const RequestHelp = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemNeeded, setItemNeeded] = useState("");
  const [quantity, setQuantity] = useState("");
  const [urgency, setUrgency] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit request
    alert("Your request has been submitted. We'll work to find donors in your area.");
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
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

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              We're Here to Help
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Request Assistance</h1>
            <p className="text-muted-foreground text-lg">
              Tell us what you need and we'll connect you with generous donors in your community.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-medium">
            {/* Category Selection */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">What do you need?</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "border-secondary bg-secondary/10"
                        : "border-border hover:border-secondary/50"
                    }`}
                  >
                    <category.icon className={`w-8 h-8 mx-auto mb-2 ${
                      selectedCategory === category.id ? "text-secondary" : "text-muted-foreground"
                    }`} />
                    <span className={`text-sm font-medium ${
                      selectedCategory === category.id ? "text-secondary" : "text-foreground"
                    }`}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="itemNeeded">Item Needed</Label>
                  <Input
                    id="itemNeeded"
                    placeholder="e.g., Winter Clothes for Family"
                    value={itemNeeded}
                    onChange={(e) => setItemNeeded(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="1"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical - Need immediately</SelectItem>
                      <SelectItem value="high">High - Within 1-2 days</SelectItem>
                      <SelectItem value="medium">Medium - Within a week</SelectItem>
                      <SelectItem value="low">Low - Whenever available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, State"
                      className="pl-10"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Tell us more about your situation</Label>
                <Textarea
                  id="description"
                  placeholder="Please share any details that might help us understand your needs better..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground">
                <p>
                  <strong>Privacy Note:</strong> Your personal information will only be shared with verified donors and logistics coordinators to fulfill your request.
                </p>
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                <Send className="w-5 h-5" />
                Submit Request
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RequestHelp;
