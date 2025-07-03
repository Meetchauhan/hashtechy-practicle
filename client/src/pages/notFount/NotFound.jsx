const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-7xl font-extrabold text-cyan-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-6 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
