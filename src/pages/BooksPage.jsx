
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounceValue } from '@/hooks/use-debounce';
import { books, categories, getBooksByCategory, searchBooks } from '../data/books';
import BookCard from '../components/BookCard';
import PageHeader from '../components/PageHeader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

const BooksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch] = useDebounceValue(searchQuery, 300);
  
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  
  // Apply filters when category or search query changes
  useEffect(() => {
    let filteredBooks = [];
    
    if (debouncedSearch) {
      filteredBooks = searchBooks(debouncedSearch);
      if (selectedCategory !== 'All') {
        filteredBooks = filteredBooks.filter(book => book.category === selectedCategory);
      }
    } else {
      filteredBooks = getBooksByCategory(selectedCategory);
    }
    
    setDisplayedBooks(filteredBooks);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategory !== 'All') {
      params.set('category', selectedCategory);
    }
    if (debouncedSearch) {
      params.set('search', debouncedSearch);
    }
    setSearchParams(params);
  }, [selectedCategory, debouncedSearch, setSearchParams]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilterMenuOpen(false);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <>
      <PageHeader 
        title="Explore Our Books" 
        subtitle="Discover your next favorite read from our extensive collection" 
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by title, author or category..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 h-12"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline"
                className="lg:hidden flex items-center gap-2"
                onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              >
                <Filter size={16} />
                <span>Filter</span>
              </Button>
              
              {(selectedCategory !== 'All' || searchQuery) && (
                <Button 
                  variant="ghost"
                  onClick={clearFilters}
                  className="flex items-center gap-2"
                >
                  <X size={16} />
                  <span>Clear</span>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <h2 className="font-bold text-xl mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-book-accent text-white font-medium'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Categories Menu - Mobile */}
          {filterMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40 flex justify-end">
              <div className="w-64 bg-white dark:bg-book-primary p-4 h-full overflow-y-auto animate-slide-in">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold text-xl">Categories</h2>
                  <button onClick={() => setFilterMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-book-accent text-white font-medium'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Books Grid */}
          <div className="flex-grow">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-book-gray">
                {displayedBooks.length} {displayedBooks.length === 1 ? 'book' : 'books'} found
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            
            {displayedBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {displayedBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-2">No Books Found</h3>
                <p className="text-book-gray mb-6">
                  We couldn't find any books matching your criteria.
                </p>
                <Button onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksPage;

// Add this hook - since it's not already available
