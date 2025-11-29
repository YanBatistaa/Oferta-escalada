import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Users, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useWhatsAppRotation } from "@/hooks/useWhatsAppRotation";

export const HeroSection = () => {
  const { redirectToWhatsApp } = useWhatsAppRotation();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-destructive text-destructive-foreground px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Oferta Exclusiva e Limitada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Seu Site Profissional Completo por Apenas{" "}
            <span className="text-secondary">R$ 300</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            De <span className="line-through text-gray-400">R$ 2.800</span> por{" "}
            <span className="text-secondary font-bold">R$ 300</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <Button 
              size="lg" 
              onClick={redirectToWhatsApp}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Garantir Minha Oferta
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-300">Clientes Satisfeitos</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">36h</p>
                <p className="text-sm text-gray-300">Entrega Rápida</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <CheckCircle className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">5 Anos</p>
                <p className="text-sm text-gray-300">de Experiência</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
