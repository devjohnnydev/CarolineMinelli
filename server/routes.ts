import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existing = await storage.getServices();
  if (existing.length === 0) {
    const seeds = [
      { title: "Direito Cível", description: "Atuação em demandas cíveis, contratos, responsabilidade civil e soluções jurídicas personalizadas.", category: "Civil", icon: "Gavel" },
      { title: "Direito do Consumidor", description: "Defesa dos direitos do consumidor, ações indenizatórias, revisão de contratos e práticas abusivas.", category: "Consumidor", icon: "ShoppingBag" },
      { title: "Direito Extrajudicial", description: "Resolução de questões documentais, inventários e divórcios em cartório com agilidade.", category: "Extrajudicial", icon: "Scale" }
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
