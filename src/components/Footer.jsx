import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-wider block mb-6">
              CHRONOS <span className="text-gold">&</span> CO.
            </span>
            <p className="text-gray-400 font-light text-sm max-w-sm mb-8 leading-relaxed">
              Pioneers in luxury horology since 1894. We create timepieces that are not just instruments of measure, but heirlooms of timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Heritage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Care & Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Boutiques</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Stay Updated</h4>
            <p className="text-gray-400 text-sm font-light mb-4">
              Subscribe to receive updates on exclusive releases and brand news.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors text-white w-full"
              />
              <button 
                type="submit" 
                className="bg-white text-dark hover:bg-gold py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Chronos & Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
