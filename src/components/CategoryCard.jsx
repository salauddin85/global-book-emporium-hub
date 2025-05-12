
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ category, image, count }) => {
  return (
    <Link 
      to={`/books?category=${category}`}
      className="group rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl relative"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={category} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white font-playfair text-xl font-bold mb-1">{category}</h3>
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm">{count} Books</span>
            <span className="text-book-accent group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
