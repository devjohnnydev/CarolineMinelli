import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { useServices } from "@/hooks/use-services";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Instagram, 
  ChevronDown,
  Scale,
  Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import brandingImg from "@/assets/branding.png";
import scalesImg from "@/assets/hero-bg.png";
import logoImg from "@assets/head_1768702302355.png";
import partnersHeaderImg from "@assets/image_1768702895988.png";

export default function Home() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <FloatingWhatsApp />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background z-0" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px]" />
        
        {/* Background Scales Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center"
          style={{
            backgroundImage: `url(${scalesImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-block"
          >
            <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gold-gradient-text"
          >
            Caroline Minelli
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary max-w-3xl mb-10 font-light leading-relaxed"
          >
            "Construindo relações humanizadas por meios alternativos nas resoluções de conflitos."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-white text-background hover:text-background font-bold text-lg px-8 h-14 rounded-full transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Consultoria <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-bold text-lg px-8 h-14 rounded-full transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nossas Áreas
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-[4/5] bg-secondary/50">
                {/* Lawyer Image */}
                <img 
                  src={brandingImg} 
                  alt="Dra. Caroline Minelli" 
                  className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <h3 className="text-2xl font-serif text-primary font-bold">Dra. Caroline Minelli</h3>
                  <p className="text-foreground/80">OAB/SP 474.676</p>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-primary font-medium tracking-widest uppercase mb-4">Sobre Mim</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground">
                Atuação com <span className="text-primary italic">Humanidade</span> e Segurança
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Atuo com foco em Direito de Família, com ênfase em divórcio e guarda de filhos, oferecendo um atendimento acolhedor, responsável e estratégico como advogada independente. Compreendo que essas demandas envolvem não apenas questões jurídicas, mas também aspectos emocionais profundos, que exigem sensibilidade, escuta ativa e respeito à história de cada família.
                </p>
                <p>
                  Minha atuação busca soluções jurídicas eficientes e equilibradas, priorizando sempre que possível a resolução consensual dos conflitos, de forma a reduzir o desgaste emocional das partes envolvidas e promover acordos mais justos e duradouros.
                </p>
              </div>

              {/* Parcerias Section */}
              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                  <Handshake className="w-5 h-5" />
                  Rede de Parceiros
                </h4>
                <p className="text-muted-foreground mb-4">
                  Trabalho com uma rede de parceiros advogados para garantir atendimento completo em áreas complementares:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <li className="flex items-center gap-2 text-foreground/90 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Direito Trabalhista
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Direito Empresarial
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Planejamento Patrimonial
                  </li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Divórcio Judicial e Extrajudicial",
                  "Guarda de Filhos",
                  "Direito do Consumidor",
                  "Atendimento Humanizado",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-secondary/20 relative">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={partnersHeaderImg} 
              alt="Principais Atuações" 
              className="max-w-[400px] h-auto object-contain"
            />
          </div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground text-lg">
              Atuamos com excelência e dedicação em diversas áreas do direito, 
              sempre focando na melhor solução para o seu caso.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : services && services.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3 h-auto">
                    <ServiceCard service={service} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-8 mr-4">
                <CarouselPrevious className="static translate-y-0 bg-transparent border-primary/30 text-primary hover:bg-primary hover:text-background" />
                <CarouselNext className="static translate-y-0 bg-transparent border-primary/30 text-primary hover:bg-primary hover:text-background" />
              </div>
            </Carousel>
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              Nenhum serviço cadastrado no momento.
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-multiply" />
        
        <div className="container px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-background mb-6">
            Precisa de orientação jurídica?
          </h2>
          <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Agende uma consulta inicial para entendermos o seu caso e traçarmos a melhor estratégia para defender seus direitos.
          </p>
          <Button 
            size="lg"
            className="bg-background text-primary hover:bg-white hover:text-primary-dark font-bold text-lg px-10 h-16 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => window.open("https://wa.me/5511918231667", "_blank")}
          >
            Falar no WhatsApp
          </Button>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section id="partners" className="py-24 bg-secondary/10 relative">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <img 
                src={partnersHeaderImg} 
                alt="Parcerias e Rede de Apoio" 
                className="max-w-[400px] h-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
              Como advogada independente, conto com uma rede de amigos e parceiros advogados para oferecer um suporte jurídico completo e especializado.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Divórcio Judicial e Extrajudicial",
                  description: "Resolução de conflitos familiares com foco no equilíbrio emocional e segurança jurídica, seja em via judicial ou em cartório.",
                },
                {
                  title: "Guarda",
                  description: "Acompanhamento jurídico especializado em processos de guarda, priorizando sempre o melhor interesse dos filhos.",
                },
                {
                  title: "Consumidor",
                  description: "Defesa técnica e ágil contra práticas abusivas, garantindo o respeito aos direitos e a reparação devida ao consumidor.",
                },
              ].map((partner, i) => (
                <div key={i} className="bg-background border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="text-xl font-serif font-bold text-primary mb-4">{partner.title}</h5>
                  <p className="text-muted-foreground">{partner.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-foreground/70 italic font-medium">
              Atuação pautada pela ética, acessibilidade e o mais alto rigor profissional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary font-medium tracking-widest uppercase mb-4">Contato</h4>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
                Vamos Conversar?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Entre em contato pelos canais abaixo ou preencha o formulário. 
                Retornaremos o mais breve possível.
              </p>

              <div className="space-y-8">
                <a href="https://wa.me/5511918231667" target="_blank" className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-foreground/5 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">WhatsApp</h5>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">(11) 91823-1667</p>
                  </div>
                </a>

                <a href="mailto:advcarolineminelli@gmail.com" className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-foreground/5 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Email</h5>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">advcarolineminelli@gmail.com</p>
                  </div>
                </a>

                <a href="https://instagram.com/advogada.carolineminelli" target="_blank" className="flex items-start gap-4 group">
                  <div className="p-3 rounded-full bg-foreground/5 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Instagram</h5>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">@advogada.carolineminelli</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-foreground/5">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Localização</h5>
                    <p className="text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/30 border border-border p-8 md:p-10 rounded-3xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Envie uma mensagem</h3>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary/10 py-12 border-t border-border">
        <div className="container px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="max-w-[200px] h-auto">
              <img src={logoImg} alt="Caroline Minelli Advogada" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-8 mb-8 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">Início</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#services" className="hover:text-primary transition-colors">Parcerias</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </div>

          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Caroline Minelli. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Icon helper component since we can't import dynamic icon name directly in map
function MessageCircle(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
