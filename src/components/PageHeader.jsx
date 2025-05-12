
import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-book-accent/20 to-book-accent/5 dark:from-book-accent/10 dark:to-book-accent/5 py-20 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block"
        >
          {title}
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-book-accent rounded-full"></span>
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mt-8"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
