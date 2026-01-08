import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { type Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  // Dynamically get icon component
  const IconComponent = (Icons as any)[service.icon] || Icons.Scale;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <div className="group h-full p-8 rounded-2xl glass-card hover:bg-secondary/20 transition-all duration-300 border border-border hover:border-primary/30 relative overflow-hidden">
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          <div className="p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <IconComponent className="w-8 h-8" />
          </div>
          
          <h3 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-sm text-primary/80 font-medium mb-4 uppercase tracking-wider">
            {service.category}
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
