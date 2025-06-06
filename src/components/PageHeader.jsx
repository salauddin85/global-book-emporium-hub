
const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-white dark:bg-gray-800 py-12 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
