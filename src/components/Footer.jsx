
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-book-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen size={24} className="text-book-accent" />
              <span className="font-playfair font-bold text-xl">Boighor Global</span>
            </div>
            <p className="text-gray-300 text-sm">
              Boighor Global is your premier destination for books from around the world. 
              We deliver quality reading material right to your doorstep.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-book-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-book-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-book-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-book-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/books" className="text-gray-300 hover:text-book-accent transition-colors">Books</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-book-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-book-accent transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-book-accent transition-colors">Login</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/books?category=Fiction" className="text-gray-300 hover:text-book-accent transition-colors">Fiction</Link>
              </li>
              <li>
                <Link to="/books?category=Science Fiction" className="text-gray-300 hover:text-book-accent transition-colors">Science Fiction</Link>
              </li>
              <li>
                <Link to="/books?category=Fantasy" className="text-gray-300 hover:text-book-accent transition-colors">Fantasy</Link>
              </li>
              <li>
                <Link to="/books?category=Biography" className="text-gray-300 hover:text-book-accent transition-colors">Biography</Link>
              </li>
              <li>
                <Link to="/books?category=Non-Fiction" className="text-gray-300 hover:text-book-accent transition-colors">Non-Fiction</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-book-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Book Street, Library District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-book-accent flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-book-accent flex-shrink-0" />
                <a href="mailto:info@boighorglobal.com" className="text-gray-300 hover:text-book-accent transition-colors">
                  info@boighorglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="max-w-md mx-auto">
            <h3 className="font-playfair text-lg font-bold mb-4 text-center">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow p-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-book-accent"
                required
              />
              <button 
                type="submit" 
                className="bg-book-accent hover:bg-opacity-90 px-4 py-2 rounded-r-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8 pt-6 border-t border-gray-800">
          <p>&copy; {currentYear} Boighor Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
