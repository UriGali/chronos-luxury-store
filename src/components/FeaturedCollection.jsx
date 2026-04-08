import React from 'react';

const watches = [
  {
    id: 1,
    name: 'The Obsidian Classic',
    price: '$2,450',
    image: '/images/watch_1.png',
  },
  {
    id: 2,
    name: 'Rose Gold Heritage',
    price: '$3,100',
    image: '/images/watch_2.png',
  },
  {
    id: 3,
    name: 'Titanium Luminary',
    price: '$4,800',
    image: '/images/watch_3.png',
  }
];

const FeaturedCollection = () => {
  return (
    <section id="collections" className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold tracking-[0.2em] text-sm uppercase mb-3">Curated Selection</h2>
          <h3 className="font-serif text-4xl md:text-5xl">Featured Collection</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {watches.map((watch) => (
            <div key={watch.id} className="group relative bg-dark-200 overflow-hidden cursor-pointer rounded-sm border border-transparent hover:border-white/10 transition-colors duration-500">
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent z-10"></div>
                <img 
                  src={watch.image} 
                  alt={watch.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Hover Add to Cart Button */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h4 className="font-serif text-xl mb-2">{watch.name}</h4>
                <p className="text-gold tracking-wider">{watch.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
