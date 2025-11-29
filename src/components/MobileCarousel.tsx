import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio1 from "@/assets/portfolio-4.jpg";
import portfolio2 from "@/assets/portfolio-5.jpg";

export const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const portfolioImages = [portfolio1, portfolio2, portfolio1, portfolio2, portfolio1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Veja Nossos Projetos
          </h2>
          <p className="text-muted-foreground text-lg">
            Sites profissionais que transformaram negócios
          </p>
        </motion.div>

        <div className="max-w-sm mx-auto relative">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
            style={{ 
              width: '320px',
              height: '640px',
              perspective: '1000px'
            }}
          >
            {/* Phone Frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-900 z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="absolute inset-3 bg-white rounded-[2.5rem] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={portfolioImages[currentIndex]}
                    alt={`Portfolio ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
