import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Donation Drives", href: "/drives" },
      { name: "Success Stories", href: "/about" },
      { name: "FAQ", href: "/contact" },
    ],
    Community: [
      { name: "For Donors", href: "/donate" },
      { name: "For Recipients", href: "/request-help" },
      { name: "For Volunteers", href: "/sign-up" },
      { name: "Partners", href: "/contact" },
    ],
    Resources: [
      { name: "Help Center", href: "/contact" },
      { name: "Safety Guidelines", href: "/about" },
      { name: "Privacy Policy", href: "/about" },
      { name: "Terms of Service", href: "/about" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">GiveHope</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Connecting hearts, changing lives. Join our community of givers and make a real difference in the world.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("#") ? (
                      <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.href} className="text-background/70 hover:text-background transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl font-semibold mb-3">Stay Updated</h3>
            <p className="text-background/70 mb-6">
              Get the latest news on donation drives and community impact stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@givehope.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1-800-GIVE-HOPE</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Worldwide</span>
            </div>
          </div>
          <p className="text-sm text-background/50">
            © 2025 GiveHope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
