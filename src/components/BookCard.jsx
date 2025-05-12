
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const BookCard = ({ book }) => {
  // Add to cart function
  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Get current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if book is already in cart
    const isBookInCart = currentCart.some(item => item.id === book.id);
    
    if (isBookInCart) {
      toast.info("This book is already in your cart");
      return;
    }
    
    // Add book to cart
    const newCart = [...currentCart, { ...book, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(newCart));
    
    toast.success(`"${book.title}" added to cart`);
  };
  
  return (
    <div className="book-card group">
      <Link to={`/book/${book.id}`} className="block">
        <div className="relative overflow-hidden h-[350px]">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="book-card-image object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <button
              onClick={addToCart}
              className="bg-book-accent text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-1 mb-2">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{book.rating}</span>
          </div>
          <h3 className="font-playfair font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
          <p className="text-book-gray text-sm mb-2">{book.author}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-book-accent">${book.price.toFixed(2)}</span>
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{book.category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
