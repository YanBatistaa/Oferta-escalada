import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useWhatsAppRotation } from "@/hooks/useWhatsAppRotation";

export const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { redirectToWhatsApp } = useWhatsAppRotation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg md:text-xl font-bold text-foreground">
            Sites Profissionais
          </h1>
          <span className="hidden md:inline-block text-sm bg-destructive text-destructive-foreground px-3 py-1 rounded-full font-semibold">
            R$ 300
          </span>
        </div>
        
        <Button 
          onClick={redirectToWhatsApp}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </div>
    </motion.header>
  );
};
