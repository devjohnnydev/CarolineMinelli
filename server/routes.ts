import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existing = await storage.getServices();
  if (existing.length === 0) {
    const seeds = [
      { title: "Direito Civil", description: "Atuação em demandas cíveis, contratos, responsabilidade civil e soluções jurídicas personalizadas.", category: "Civil", icon: "Gavel" },
      { title: "Direito do Consumidor", description: "Defesa dos direitos do consumidor, ações indenizatórias, revisão de contratos e práticas abusivas.", category: "Consumidor", icon: "ShoppingBag" },
      { title: "Direito Trabalhista", description: "Assessoria e atuação em demandas trabalhistas, tanto para empregados quanto para empregadores, com foco em segurança jurídica e prevenção de conflitos.", category: "Trabalhista", icon: "Briefcase" },
      { title: "Direito Empresarial", description: "Consultoria jurídica para empresas, contratos empresariais, estruturação de negócios e suporte jurídico estratégico.", category: "Empresarial", icon: "Scale" },
      { title: "Planejamento Patrimonial e Sucessório", description: "Organização e proteção do patrimônio familiar, planejamento sucessório, inventários e estratégias para segurança jurídica e sucessão tranquila.", category: "Sucessório", icon: "Home" }
    ];

    for (const seed of seeds) {
      await storage.createService(seed);
    }
    console.log("Database seeded with services.");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the DB on startup
  await seedDatabase();

  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  return httpServer;
}
