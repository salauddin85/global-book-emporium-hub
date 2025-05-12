
import PageHeader from '../components/PageHeader';
import Newsletter from '../components/Newsletter';
import { BookOpen, Book, Globe, Truck, Award, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Sarah has 15 years of experience in the publishing industry and founded Boighor Global with a vision to connect readers with books from around the world.',
      image: 'https://source.unsplash.com/random/300x300/?woman,portrait,1',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Curation',
      bio: 'With a PhD in Literature, Michael leads our book curation team, ensuring we offer the highest quality and most diverse selection of titles.',
      image: 'https://source.unsplash.com/random/300x300/?man,portrait,1',
    },
    {
      name: 'Amelia Rodriguez',
      role: 'Chief of Operations',
      bio: 'Amelia oversees our global distribution network and ensures that books reach customers in perfect condition, no matter where they are.',
      image: 'https://source.unsplash.com/random/300x300/?woman,portrait,2',
    },
  ];

  return (
    <>
      <PageHeader 
        title="About Boighor Global" 
        subtitle="Our story, mission, and the team behind the books" 
      />
      
      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Boighor Global was founded in 2015 with a simple yet powerful mission: to make quality books from around the world accessible to everyone, everywhere.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              What started as a small corner bookshop in New York has grown into a global operation with partnerships with publishers across six continents. We believe that stories transcend borders, and our goal is to bring the richness and diversity of global literature to readers everywhere.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we serve readers in over 50 countries, offering books in multiple languages and from diverse cultural perspectives. Our team of passionate book lovers works tirelessly to curate selections that inspire, educate, and entertain.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://source.unsplash.com/random/600x400/?bookstore" 
              alt="Boighor Global Bookstore" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-book-accent p-4 rounded-lg shadow-lg text-white">
              <p className="font-bold text-2xl">Since</p>
              <p className="text-3xl font-playfair">2015</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="bg-gray-50 dark:bg-book-primary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-book-accent/20 p-4 rounded-full mb-4">
                <BookOpen size={32} className="text-book-accent" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Spreading Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of books to educate, inspire, and transform lives. Our mission is to spread knowledge and stories to every corner of the world.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-book-accent/20 p-4 rounded-full mb-4">
                <Globe size={32} className="text-book-accent" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Global Perspective</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We curate books from diverse cultures and perspectives, believing that understanding different viewpoints fosters empathy and connection.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-book-accent/20 p-4 rounded-full mb-4">
                <Heart size={32} className="text-book-accent" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Passion for Books</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team consists of dedicated book lovers who are passionate about connecting readers with stories that will move and inspire them.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-book-accent/20 p-4 rounded-full mb-4">
                <Book size={32} className="text-book-accent" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Quality Curation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We carefully select each title in our collection, ensuring that we offer only the best and most meaningful books across all genres.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-book-accent/20 p-4 rounded-full mb-4">
                <Truck size={32} className="text-book-accent" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Accessible to All</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive to make books accessible to everyone through competitive pricing, global shipping, and digital options.
              </p>
            </div>
            
            <div className="bg-white dark:bg-book-primary/40 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-book-accent/20 p-4 rounded-full mb-4">
                <Award size={32} className="text-book-accent" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">Excellence in Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to providing exceptional customer service, ensuring that every interaction with Boighor Global exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="bg-book-accent text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
              <p className="text-lg">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">10k+</p>
              <p className="text-lg">Book Titles</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">25+</p>
              <p className="text-lg">Languages</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-2">500k+</p>
              <p className="text-lg">Happy Readers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-heading text-center mb-16">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-book-primary/40 rounded-lg shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-book-accent mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default About;
