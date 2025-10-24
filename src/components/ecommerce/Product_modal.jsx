import CloseIcon from '@mui/icons-material/Close';

const ProductModal = ({
  isOpen,
  onClose,
  category,
  title,
  description,
  price,
  image,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-4xl rounded-xl bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 dark:bg-primary/20">
                {category}
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                {title}
              </h2>
              <p className="text-gray-300 mb-6">
                {description}
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-6">
                <p className="text-4xl font-bold text-primary">{price}</p>
              </div>
              <button
                onClick={onAddToCart}
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
