const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark/95 z-10"></div>
        <img 
          src="/images/hero_watch.png" 
          alt="Luxury Watch Close-up" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <h2 className="text-gold tracking-[0.3em] text-sm md:text-base uppercase mb-6 font-medium animate-fade-in-up">
          Masterpiece Collection
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          Precision in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-600">Every Second</span>
        </h1>
        <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Discover our exclusive collection of meticulously crafted timepieces. 
          Where traditional horology meets contemporary elegance.
        </p>
        <button className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark px-10 py-4 uppercase tracking-[0.2em] text-sm transition-all duration-500 ease-out hover:scale-105">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
