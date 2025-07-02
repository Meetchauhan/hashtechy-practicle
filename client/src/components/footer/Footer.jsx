const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center md:flex-row items-center">
        <span className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
