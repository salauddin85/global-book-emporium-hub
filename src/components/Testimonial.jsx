
import { Star } from 'lucide-react';

const Testimonial = ({ name, role, comment, rating, image }) => {
  return (
    <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-book-gray">{role}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="italic text-gray-600 dark:text-gray-300 flex-grow">{comment}</p>
    </div>
  );
};

export default Testimonial;
