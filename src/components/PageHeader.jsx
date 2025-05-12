
const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-book-accent/10 dark:bg-book-accent/5 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
