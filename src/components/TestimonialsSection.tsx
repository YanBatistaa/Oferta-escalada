import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária - Clínica de Estética",
      text: "Meu site ficou incrível e começou a gerar leads na primeira semana! A equipe foi super atenciosa e entregou tudo no prazo.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Carlos Oliveira",
      role: "Advogado",
      text: "Equipe profissional, entrega rápida e suporte excepcional. Meus clientes adoraram o novo site e já recebi vários contatos.",
      rating: 5,
      avatar: "CO"
    },
    {
      name: "Ana Paula Santos",
      role: "Consultora de Negócios",
      text: "Melhor investimento que fiz para minha empresa. O site é moderno, rápido e trouxe muita credibilidade ao meu negócio. Recomendo!",
      rating: 5,
      avatar: "AS"
    }
  ];

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
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Histórias reais de sucesso e transformação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
                
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground italic relative z-10">
                  "{testimonial.text}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
