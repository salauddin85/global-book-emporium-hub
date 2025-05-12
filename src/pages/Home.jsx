
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import Newsletter from '../components/Newsletter';
import Testimonial from '../components/Testimonial';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getFeaturedBooks, getNewArrivals, getBestSellers, categories } from '../data/books';
import { ArrowRight, BookOpen, TrendingUp, Award } from 'lucide-react';

const Home = () => {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Get book data
    setFeaturedBooks(getFeaturedBooks());
    setNewArrivals(getNewArrivals());
    setBestSellers(getBestSellers());
  }, []);

  // Filter out 'All' category and take only 6 categories
  const displayedCategories = categories.filter(cat => cat !== 'All').slice(0, 6);

  // Testimonial data
  const testimonials = [
    {
      name: 'Jennifer Wilson',
      role: 'Avid Reader',
      comment: 'Boighor Global has transformed my reading experience. The selection is unmatched and delivery is always prompt!',
      rating: 5,
      image: 'https://source.unsplash.com/random/100x100/?woman,portrait,1'
    },
    {
      name: 'David Chen',
      role: 'Book Collector',
      comment: 'I\'ve been collecting rare editions for years, and Boighor is the only place that consistently finds what I\'m looking for.',
      rating: 4,
      image: 'https://source.unsplash.com/random/100x100/?man,portrait,1'
    },
    {
      name: 'Sarah Miller',
      role: 'Teacher',
      comment: 'As an educator, I rely on Boighor Global for my classroom needs. Their educational selection and discounts are fantastic.',
      rating: 5,
      image: 'https://source.unsplash.com/random/100x100/?woman,portrait,2'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-book-primary to-book-primary/80 text-white h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?library,books')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Discover a World of Stories
            </h1>
            <p className="text-xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Browse our extensive collection of books from around the globe. Find your next great read today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/books">
                <Button className="bg-book-accent hover:bg-book-accent/90 text-white px-8 py-6 rounded-lg text-lg">
                  Explore Books
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="section-heading">Featured Collections</h2>
              <p className="text-book-gray mt-4 max-w-2xl">
                Explore our handpicked selections of books across various categories and interests.
              </p>
            </div>
            <Link to="/books" className="flex items-center text-book-accent hover:text-book-accent/80 font-medium mt-4 md:mt-0">
              <span>View All Books</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="featured" className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Featured</span>
              </TabsTrigger>
              <TabsTrigger value="new" className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span>New Arrivals</span>
              </TabsTrigger>
              <TabsTrigger value="bestsellers" className="flex items-center gap-2">
                <Award size={16} />
                <span>Best Sellers</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="featured" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {featuredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="new" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {newArrivals.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bestsellers" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {bestSellers.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-book-primary/30">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-12 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCategories.map((category, index) => (
              <CategoryCard 
                key={category}
                category={category}
                image={`https://source.unsplash.com/random/600x400/?books,${category.toLowerCase()}`}
                count={(index + 1) * 4}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/books">
              <Button variant="outline" className="border-book-accent text-book-accent hover:bg-book-accent hover:text-white">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">What Our Readers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-book-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">About Boighor Global</h2>
              <p className="mb-6 text-white/80">
                Founded in 2015, Boighor Global has grown from a small corner bookshop to an international book retailer serving readers in over 50 countries. Our mission is to connect readers with books that inspire, educate, and entertain.
              </p>
              <p className="mb-8 text-white/80">
                We carefully curate our collection to include titles from around the world, translated into multiple languages, ensuring that great literature knows no borders.
              </p>
              <Link to="/about">
                <Button className="bg-white text-book-primary hover:bg-white/90">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://source.unsplash.com/random/800x600/?bookstore" 
                alt="Boighor Global Bookstore" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-book-accent p-4 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">50+</p>
                <p className="text-sm">Countries Served</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-book-accent p-4 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">10k+</p>
                <p className="text-sm">Book Titles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default Home;
