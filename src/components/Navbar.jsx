import { ShoppingBag, Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="w-6 h-6 sm:hidden cursor-pointer hover:text-gold transition-colors" />
            <div className="hidden sm:flex space-x-8">
              <a href="#collections" className="text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300">Collections</a>
              <a href="#limited" className="text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300">Heritage</a>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center cursor-pointer">
            <span className="font-serif text-2xl font-bold tracking-wider">
              CHRONOS <span className="text-gold">&</span> CO.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gold transition-colors duration-300" />
            <div className="relative group cursor-pointer">
              <ShoppingBag className="w-5 h-5 group-hover:text-gold transition-colors duration-300" />
              <span className="absolute -top-2 -right-2 bg-gold text-dark text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
