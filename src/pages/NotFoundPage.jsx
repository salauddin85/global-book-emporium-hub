
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-book-primary/20 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center">
          <BookOpen size={64} className="text-book-accent mb-6" />
        </div>
        <h1 className="font-playfair text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Oops! We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps never existed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-book-accent hover:bg-book-accent/90 w-full sm:w-auto">
              Back to Home
            </Button>
          </Link>
          <Link to="/books">
            <Button variant="outline" className="w-full sm:w-auto">
              Browse Books
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
