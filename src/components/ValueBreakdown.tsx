import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useWhatsAppRotation } from "@/hooks/useWhatsAppRotation";

export const ValueBreakdown = () => {
  const { redirectToWhatsApp } = useWhatsAppRotation();
  const items = [
    { label: "Site profissional completo", value: "R$ 1.200" },
    { label: "Domínio personalizado (.com.br)", value: "R$ 200/ano" },
    { label: "Agente de IA personalizado", value: "R$ 400/mês" },
    { label: "Campanha Google Ads configurada", value: "R$ 1.000" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 shadow-xl border-2">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Veja o Valor Real da Oferta
              </h2>
              <p className="text-muted-foreground text-lg">
                Compare quanto custaria contratar tudo separadamente
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                  <span className="font-bold text-foreground">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-muted-foreground line-through mb-2">
                Valor Total: R$ 2.800
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gradient-to-r from-secondary to-accent p-6 rounded-lg text-center mb-6"
            >
              <p className="text-sm font-bold text-secondary-foreground uppercase tracking-wide mb-2">
                Oferta Especial
              </p>
              <p className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-2">
                Apenas R$ 300
              </p>
              <p className="text-secondary-foreground font-semibold">
                Economize mais de R$ 2.500 agora!
              </p>
            </motion.div>

            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Bônus Exclusivo:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Primeira campanha de vendas no Google Ads configurada pela nossa equipe — totalmente GRÁTIS!
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
