import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existing = await storage.getServices();
  if (existing.length === 0) {
    const seeds = [
      { title: "Divórcio Judicial e Extrajudicial", description: "Atuação em divórcios consensuais e litigiosos, com foco na melhor estratégia para o cliente.", category: "Família", icon: "Scale" },
      { title: "Guarda", description: "Proteção e bem-estar dos filhos, garantindo seus direitos e segurança jurídica.", category: "Família", icon: "Shield" },
      { title: "Consumidor", description: "Defesa dos direitos do consumidor contra abusos e práticas ilegais.", category: "Consumidor", icon: "ShoppingBag" }
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
