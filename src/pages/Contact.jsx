
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast.success('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team" 
      />
      
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="section-heading mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'border-red-500' : ''}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-book-accent hover:bg-book-accent/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="section-heading mb-8">Our Information</h2>
            
            <div className="bg-white dark:bg-book-primary/40 rounded-lg shadow-md overflow-hidden">
              {/* Map */}
              <div className="h-64 bg-gray-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215175187672!2d-73.98881382363114!3d40.75828937137293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xca0769f31fb5aeff!2sNew%20York%20Public%20Library%20-%20Stephen%20A.%20Schwarzman%20Building!5e0!3m2!1sen!2sus!4v1659447399366!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boighor Global Location"
                ></iframe>
              </div>
              
              {/* Contact Details */}
              <div className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-book-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Book Street, Library District<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-book-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Customer Service: +1 (555) 123-4567<br />
                      Orders & Shipping: +1 (555) 765-4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-book-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      General Inquiries: <a href="mailto:info@boighorglobal.com" className="text-book-accent hover:underline">info@boighorglobal.com</a><br />
                      Customer Support: <a href="mailto:support@boighorglobal.com" className="text-book-accent hover:underline">support@boighorglobal.com</a><br />
                      Business Partnerships: <a href="mailto:partners@boighorglobal.com" className="text-book-accent hover:underline">partners@boighorglobal.com</a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="px-6 pb-6">
                <h3 className="font-bold mb-3">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM (EST)</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-gray-600 dark:text-gray-300">10:00 AM - 4:00 PM (EST)</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-gray-600 dark:text-gray-300">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-book-primary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">What are your shipping times?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Domestic shipping (within the US) typically takes 3-5 business days. International shipping varies by location but generally takes 7-14 business days. Express shipping options are available at checkout.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Do you ship internationally?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can view specific details during the checkout process.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">What is your return policy?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We accept returns within 30 days of delivery for books in original condition. Please contact our customer service team to initiate a return. Return shipping costs may apply.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Do you offer e-books?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer e-books for many of our titles. You can filter for e-book availability while browsing our catalog. Once purchased, e-books can be downloaded immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
