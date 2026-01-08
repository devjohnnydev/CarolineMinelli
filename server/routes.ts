import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existing = await storage.getServices();
  if (existing.length === 0) {
    const seeds = [
      { title: "Guarda", description: "Proteção e bem-estar dos filhos e menores.", category: "Família", icon: "Shield" },
      { title: "Investigação de Paternidade", description: "Reconhecimento biológico e garantia de direitos.", category: "Família", icon: "Search" },
      { title: "Divórcio", description: "Atuação em divórcios judiciais e extrajudiciais.", category: "Família", icon: "HeartCrack" },
      { title: "Regularização de Imóvel", description: "Regularização documental e usucapião.", category: "Civil", icon: "Home" },
      { title: "Indenização", description: "Ações de reparação por danos materiais e morais.", category: "Civil", icon: "Gavel" },
      { title: "Direito do Consumidor", description: "Defesa contra práticas abusivas e defeitos.", category: "Civil", icon: "ShoppingBag" },
      { title: "Consultoria Cível", description: "Orientação preventiva e análise de riscos.", category: "Civil", icon: "BookOpen" },
      { title: "Acordos Extrajudiciais", description: "Resolução de conflitos de forma amigável.", category: "Civil", icon: "Handshake" },
      { title: "Planejamento Patrimonial", description: "Organização e proteção de bens e herança.", category: "Civil", icon: "Briefcase" }
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
