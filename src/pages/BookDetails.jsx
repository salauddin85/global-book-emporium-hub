
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBookById, getRelatedBooks } from '../data/books';
import BookCard from '../components/BookCard';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { Star, ChevronRight, ShoppingCart, Calendar, Bookmark, Users } from 'lucide-react';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch book details
    const fetchedBook = getBookById(parseInt(id));
    
    if (fetchedBook) {
      setBook(fetchedBook);
      // Get related books with same category
      setRelatedBooks(getRelatedBooks(fetchedBook.category, fetchedBook.id));
    }
    
    setLoading(false);
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (!book) return;
    
    // Get current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if book is already in cart
    const existingBookIndex = currentCart.findIndex(item => item.id === book.id);
    
    if (existingBookIndex >= 0) {
      // Update quantity if book exists
      currentCart[existingBookIndex].quantity += quantity;
    } else {
      // Add new book to cart
      currentCart.push({ ...book, quantity });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    toast.success(`"${book.title}" added to your cart`);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading book details...</div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Book Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the book you're looking for.</p>
          <Link to="/books">
            <Button>Browse All Books</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-8 text-book-gray">
        <Link to="/" className="hover:text-book-accent">Home</Link>
        <ChevronRight size={12} className="mx-2" />
        <Link to="/books" className="hover:text-book-accent">Books</Link>
        <ChevronRight size={12} className="mx-2" />
        <Link to={`/books?category=${book.category}`} className="hover:text-book-accent">{book.category}</Link>
        <ChevronRight size={12} className="mx-2" />
        <span className="text-book-accent">{book.title}</span>
      </nav>

      {/* Book Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Book Image */}
        <div className="md:col-span-1">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="max-h-[500px] w-auto shadow-lg rounded-md"
            />
          </div>
        </div>

        {/* Book Info */}
        <div className="md:col-span-2">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-book-gray mb-4">by {book.author}</p>

          <div className="flex items-center mb-6">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  className={`${i < Math.floor(book.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="font-medium">{book.rating}</span>
            <span className="mx-2">•</span>
            <span className="text-book-gray">{book.reviews.length} reviews</span>
          </div>

          <div className="mb-6">
            <p className="text-3xl font-bold text-book-accent mb-2">${book.price.toFixed(2)}</p>
            <p className="text-green-600 dark:text-green-400">In Stock</p>
          </div>

          <div className="mb-8">
            <h2 className="font-bold text-lg mb-3">Description:</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{book.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={18} className="text-book-accent" />
              <div>
                <p className="text-sm text-book-gray">Published</p>
                <p className="font-medium">{new Date(book.publishedDate).getFullYear()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Bookmark size={18} className="text-book-accent" />
              <div>
                <p className="text-sm text-book-gray">Pages</p>
                <p className="font-medium">{book.pages}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={18} className="text-book-accent" />
              <div>
                <p className="text-sm text-book-gray">Publisher</p>
                <p className="font-medium">{book.publisher}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button 
                onClick={() => handleQuantityChange(-1)} 
                className="px-3 py-2 border-r hover:bg-gray-100 dark:hover:bg-gray-800"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)} 
                className="px-3 py-2 border-l hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                +
              </button>
            </div>
            <Button 
              onClick={handleAddToCart}
              className="flex-grow bg-book-accent hover:bg-book-accent/90 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-16">
        <h2 className="section-heading mb-8">Customer Reviews</h2>
        
        {book.reviews.length > 0 ? (
          <div className="space-y-6">
            {book.reviews.map(review => (
              <div key={review.id} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold">{review.user}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{review.review}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* Related Books */}
      {relatedBooks.length > 0 && (
        <div>
          <h2 className="section-heading mb-8">Related Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
