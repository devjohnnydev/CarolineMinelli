import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logoImg from "@/assets/logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Áreas de Atuação", href: "#services" },
    { name: "Parcerias", href: "#partners" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img 
              src={logoImg} 
              alt="Logo Caroline Minelli" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none text-foreground">Caroline Minelli</span>
            <span className="text-[10px] tracking-[0.2em] text-primary uppercase">Advogada</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
          <Button 
            className="bg-primary hover:bg-white text-primary-foreground hover:text-primary font-semibold transition-all duration-300 rounded-full px-6 border border-primary hover:border-primary"
            onClick={() => window.open("https://wa.me/5511918231667", "_blank")}
          >
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-serif font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-primary text-primary-foreground font-bold"
                onClick={() => window.open("https://wa.me/5511918231667", "_blank")}
              >
                Fale Conosco
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
