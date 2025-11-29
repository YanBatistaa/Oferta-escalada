import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "O que está incluído no pacote?",
      answer: "O pacote completo inclui: site profissional responsivo, domínio personalizado .com.br, agente de IA personalizado, configuração de campanha Google Ads, 30 dias de suporte técnico e hospedagem."
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer: "Seu site estará pronto em até 36 horas após a confirmação do pedido e envio de todas as informações necessárias. Trabalhamos com agilidade sem comprometer a qualidade."
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer: "Não! Nossa equipe cuida de tudo para você. Desenvolvemos, configuramos e colocamos seu site no ar. Você só precisa fornecer as informações do seu negócio e aprovar o resultado final."
    },
    {
      question: "Posso fazer alterações depois?",
      answer: "Sim! Você terá 30 dias de suporte gratuito para ajustes. Após esse período, oferecemos planos de manutenção mensal com valores acessíveis para continuar atualizando seu site."
    },
    {
      question: "A oferta é realmente limitada?",
      answer: "Sim! Esta é uma promoção especial com número limitado de vagas para garantir que possamos entregar com a qualidade que você merece. As vagas são preenchidas por ordem de chegada."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é feito após você confirmar interesse via WhatsApp. Aceitamos PIX, cartão de crédito e parcelamento. Você paga apenas após receber todas as informações do projeto."
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
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nosso serviço
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
