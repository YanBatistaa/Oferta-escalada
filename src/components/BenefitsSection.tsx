import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Headphones, Smartphone, TrendingUp } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Entrega Ultra Rápida",
      description: "Site pronto em até 36 horas. Começe a vender online rapidamente."
    },
    {
      icon: Headphones,
      title: "Suporte Incluso",
      description: "30 dias de suporte técnico gratuito para você ficar tranquilo."
    },
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description: "Funciona perfeitamente em mobile, tablet e desktop."
    },
    {
      icon: TrendingUp,
      title: "SEO Otimizado",
      description: "Seu site preparado para aparecer no Google e atrair clientes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Por Que Escolher Nossos Serviços?
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa para ter presença online profissional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
