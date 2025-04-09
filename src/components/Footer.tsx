
import { Globe, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Wanderlust Unveiled</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Discover authentic travel experiences, local cuisines, and cultural treasures around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/local-experiences" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Local Experiences
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/hidden-gems" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Hidden Gems
                </Link>
              </li>
              <li>
                <Link to="/category/local-cuisine" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Local Cuisine
                </Link>
              </li>
              <li>
                <Link to="/category/traditional-crafts" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Traditional Crafts
                </Link>
              </li>
              <li>
                <Link to="/category/artisans" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Meet the Artisans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground text-sm">hello@wanderlustunveiled.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary text-sm flex-grow"
                />
                <button className="bg-primary text-white px-3 py-2 rounded-r-md text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Wanderlust Unveiled. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
