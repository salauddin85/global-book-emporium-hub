
export const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,classic",
    category: "Fiction",
    rating: 4.8,
    description: "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal.",
    publishedDate: "1960-07-11",
    publisher: "HarperCollins",
    pages: 336,
    isbn: "978-0-06-112008-4",
    reviews: [
      { id: 1, user: "Alice Smith", rating: 5, review: "A timeless classic that everyone should read." },
      { id: 2, user: "James Johnson", rating: 4, review: "Beautifully written with unforgettable characters." }
    ]
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 10.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,dystopian",
    category: "Science Fiction",
    rating: 4.7,
    description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality.",
    publishedDate: "1949-06-08",
    publisher: "Penguin Books",
    pages: 328,
    isbn: "978-0-452-28423-4",
    reviews: [
      { id: 1, user: "Mark Williams", rating: 5, review: "Prophetic and terrifying. More relevant now than ever." },
      { id: 2, user: "Sarah Davis", rating: 4, review: "A must-read dystopian novel that makes you think." }
    ]
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 9.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,gatsby",
    category: "Fiction",
    rating: 4.5,
    description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan is an exquisitely crafted tale of America in the 1920s.",
    publishedDate: "1925-04-10",
    publisher: "Scribner",
    pages: 180,
    isbn: "978-0-7432-7356-5",
    reviews: [
      { id: 1, user: "Robert Brown", rating: 5, review: "Fitzgerald's masterpiece. The prose is absolutely gorgeous." },
      { id: 2, user: "Jennifer Wilson", rating: 4, review: "A beautifully tragic story of wealth and the American dream." }
    ]
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 8.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,classic",
    category: "Romance",
    rating: 4.7,
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work 'her own darling child' and its vivacious heroine, Elizabeth Bennet, 'as delightful a creature as ever appeared in print.'",
    publishedDate: "1813-01-28",
    publisher: "Penguin Classics",
    pages: 432,
    isbn: "978-0-14-143951-8",
    reviews: [
      { id: 1, user: "Emma Thompson", rating: 5, review: "A perfect romance novel with wit and memorable characters." },
      { id: 2, user: "David Clark", rating: 4, review: "Austen's dialogue and character development are unmatched." }
    ]
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 14.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,fantasy",
    category: "Fantasy",
    rating: 4.9,
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure.",
    publishedDate: "1937-09-21",
    publisher: "Houghton Mifflin Harcourt",
    pages: 310,
    isbn: "978-0-618-00221-4",
    reviews: [
      { id: 1, user: "Peter Jackson", rating: 5, review: "The perfect adventure story that started my love for fantasy." },
      { id: 2, user: "Susan White", rating: 5, review: "Tolkien's world-building is unparalleled. A true masterpiece." }
    ]
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 11.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,journey",
    category: "Fiction",
    rating: 4.6,
    description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined.",
    publishedDate: "1988-06-01",
    publisher: "HarperOne",
    pages: 208,
    isbn: "978-0-06-231500-7",
    reviews: [
      { id: 1, user: "Michael Smith", rating: 4, review: "A spiritual journey that resonates with anyone seeking purpose." },
      { id: 2, user: "Linda Martinez", rating: 5, review: "Simple yet profound. I re-read this book every few years." }
    ]
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 15.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,magic",
    category: "Fantasy",
    rating: 4.9,
    description: "Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley.",
    publishedDate: "1997-06-26",
    publisher: "Scholastic",
    pages: 320,
    isbn: "978-0-590-35340-3",
    reviews: [
      { id: 1, user: "Daniel Wilson", rating: 5, review: "The book that defined a generation of readers. Pure magic." },
      { id: 2, user: "Rachel Green", rating: 5, review: "Rowling's imagination and storytelling are unmatched." }
    ]
  },
  {
    id: 8,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 13.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,dystopia",
    category: "Science Fiction",
    rating: 4.5,
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
    publishedDate: "2008-09-14",
    publisher: "Scholastic Press",
    pages: 374,
    isbn: "978-0-439-02348-1",
    reviews: [
      { id: 1, user: "Thomas Harris", rating: 4, review: "A thrilling dystopian adventure with a strong female lead." },
      { id: 2, user: "Karen Lee", rating: 5, review: "Collins creates a vivid, terrifying world you can't look away from." }
    ]
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 18.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,history",
    category: "Non-Fiction",
    rating: 4.7,
    description: "In Sapiens, Dr. Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions.",
    publishedDate: "2011-02-10",
    publisher: "Harper",
    pages: 464,
    isbn: "978-0-06-231609-7",
    reviews: [
      { id: 1, user: "Bill Gates", rating: 5, review: "A thought-provoking exploration of what makes us human." },
      { id: 2, user: "Maria Rodriguez", rating: 4, review: "Harari's insights will change how you see human history." }
    ]
  },
  {
    id: 10,
    title: "Becoming",
    author: "Michelle Obama",
    price: 19.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,memoir",
    category: "Biography",
    rating: 4.8,
    description: "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world's most famous address.",
    publishedDate: "2018-11-13",
    publisher: "Crown",
    pages: 448,
    isbn: "978-1-5247-6313-8",
    reviews: [
      { id: 1, user: "Oprah Winfrey", rating: 5, review: "An intimate and inspiring memoir from the former First Lady." },
      { id: 2, user: "John Adams", rating: 5, review: "Beautifully written with honesty, warmth, and wisdom." }
    ]
  },
  {
    id: 11,
    title: "Educated",
    author: "Tara Westover",
    price: 16.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,education",
    category: "Biography",
    rating: 4.7,
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent.",
    publishedDate: "2018-02-20",
    publisher: "Random House",
    pages: 352,
    isbn: "978-0-399-59050-4",
    reviews: [
      { id: 1, user: "Barack Obama", rating: 5, review: "A remarkable memoir of a young woman raised in a survivalist family." },
      { id: 2, user: "Jessica Lee", rating: 4, review: "A powerful story about the importance of education and self-invention." }
    ]
  },
  {
    id: 12,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 13.99,
    coverImage: "https://source.unsplash.com/random/800x1200/?book,thriller",
    category: "Thriller",
    rating: 4.6,
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
    publishedDate: "2019-02-05",
    publisher: "Celadon Books",
    pages: 336,
    isbn: "978-1-250-30169-7",
    reviews: [
      { id: 1, user: "Stephen King", rating: 4, review: "A psychological thriller with a twist you won't see coming." },
      { id: 2, user: "Nancy Brown", rating: 5, review: "Gripping from start to finish. I couldn't put it down." }
    ]
  }
];

export const categories = [
  "All",
  "Fiction",
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Thriller",
  "Mystery",
  "Biography",
  "Non-Fiction",
  "History",
  "Self-Help"
];

export const getFeaturedBooks = () => books.slice(0, 6);
export const getNewArrivals = () => [...books].sort(() => 0.5 - Math.random()).slice(0, 4);
export const getBestSellers = () => [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);
export const getBookById = (id) => books.find(book => book.id === parseInt(id));
export const getRelatedBooks = (category, currentId) => books.filter(book => book.category === category && book.id !== currentId).slice(0, 4);
export const getBooksByCategory = (category) => category === "All" ? books : books.filter(book => book.category === category);
export const searchBooks = (query) => {
  const lowercasedQuery = query.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(lowercasedQuery) || 
    book.author.toLowerCase().includes(lowercasedQuery) ||
    book.category.toLowerCase().includes(lowercasedQuery)
  );
};
