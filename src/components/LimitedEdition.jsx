import React, { useState, useEffect } from 'react';

const LimitedEdition = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="limited" className="relative py-32 bg-dark overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/70 z-10 mix-blend-multiply"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sparks-of-a-golden-flame-4166-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-gold tracking-[0.3em] text-sm uppercase mb-4">Upcoming Release</h2>
        <h3 className="font-serif text-5xl md:text-6xl mb-6">The Nocturne Tourbillon</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed">
          Crafted from forged carbon and showcasing our most intricate movement to date. 
          Limited to only 50 pieces worldwide. Reserve yours before the unveiling.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-sm mb-2 shadow-2xl">
                <span className="font-serif text-3xl md:text-4xl text-white">
                  {value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-gold uppercase text-xs tracking-[0.2em]">{unit}</span>
            </div>
          ))}
        </div>

        <button className="bg-gold text-dark px-10 py-4 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-gold-light hover:scale-105 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          Pre-Order Now
        </button>
      </div>
    </section>
  );
};

export default LimitedEdition;
