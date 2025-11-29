import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, AlertCircle } from "lucide-react";

export const FinalCTA = () => {
  const whatsappLink = "https://wa.me/5511933699801?text=Olá!%20Gostaria%20de%20desenvolver%20o%20site";

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-full mb-8"
          >
            <AlertCircle className="h-5 w-5" />
            <span className="font-bold uppercase tracking-wide">Últimas Vagas Disponíveis!</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Não Perca Esta Oportunidade Única!
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Garanta seu site profissional com <span className="font-bold">89% de desconto</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-secondary" />
              <p className="text-primary-foreground font-semibold text-lg">
                Oferta por tempo limitado
              </p>
            </div>
            <p className="text-primary-foreground/80">
              Esta é uma promoção exclusiva com número limitado de vagas para garantir entregas de qualidade. 
              As vagas são preenchidas por ordem de chegada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-12 py-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="mr-3 h-6 w-6" />
                Garantir Minha Oferta Agora
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-primary-foreground/70 text-sm"
          >
            ⚡ Resposta em poucos minutos via WhatsApp
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
