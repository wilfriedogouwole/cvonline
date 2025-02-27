import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import { OPENAI_CONFIG, ERROR_MESSAGES } from '@/lib/constants';
import { createUserPrompt } from '@/lib/prompts';
import { getMockResponse } from '@/lib/mockResponses';
import type { MotivationLetterData } from '@/lib/types';

// Vérification de la clé API au démarrage (facultative en mode mock)
if (!process.env.OPENAI_API_KEY && process.env.USE_MOCK !== "true") {
  throw new Error(ERROR_MESSAGES.API_KEY);
}

// Instance OpenAI (créée uniquement si nécessaire)
let openai: OpenAI | null = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 30000,
  });
}

// Limite de mots pour la lettre de motivation
const MAX_WORDS = 250;

// Force le serveur à ne pas mettre en cache les réponses
export const dynamic = 'force-dynamic';

// Fonction pour retarder l'exécution (utile pour simuler un délai)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function POST(req: Request) {
  try {
    // Récupération et validation des données
    const data: MotivationLetterData = await req.json();
    console.log("Requête reçue:", new Date().toISOString());
    
    // Création et vérification du prompt utilisateur
    const userPrompt = createUserPrompt(data);
    if (!userPrompt || userPrompt.split(/\s+/).length > MAX_WORDS) {
      console.log("Prompt trop long ou invalide, requête refusée.");
      return NextResponse.json(
        { error: `Votre texte dépasse la limite de ${MAX_WORDS} mots ou est invalide.` },
        { status: 400 }
      );
    }

    // Mode simulation forcé en raison des problèmes de quota
    // Modification ici: activé par défaut, pas seulement en développement
    const useMock = true; // Force l'utilisation du mode mock
    
    if (useMock) {
      console.log('Mode simulation activé pour contourner le problème de quota');
      await delay(1500); // Simulation d'un délai réaliste
      const mockResponse = getMockResponse(data);
      return NextResponse.json({
        content: mockResponse,
        source: "mock" // Indication optionnelle que c'est une réponse simulée
      });
    }

    // Le code suivant ne sera exécuté que si vous décidez de désactiver le mode mock à l'avenir
    if (!openai) {
      throw new Error("Configuration OpenAI manquante");
    }

    console.log("Requête envoyée à OpenAI:", new Date().toISOString());
    const completion = await openai.chat.completions.create({
      ...OPENAI_CONFIG,
      messages: [
        {
          role: "system",
          content: "Vous êtes un assistant expert en rédaction de lettres de motivation.",
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    let content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error(ERROR_MESSAGES.GENERATION);
    }
    console.log("Réponse reçue de OpenAI:", new Date().toISOString());
    
    // Limitation de la longueur de la réponse
    const words = content.split(/\s+/);
    if (words.length > MAX_WORDS) {
      content = words.slice(0, MAX_WORDS).join(' ') + '...';
    }
    return NextResponse.json({ content });
  } catch (error: any) {
    console.error("Erreur:", error);
    
    // Message d'erreur générique en français
    return NextResponse.json(
      { error: "Une erreur s'est produite. Le service utilise actuellement des réponses simulées en raison de limitations techniques." },
      { status: 500 }
    );
  }
}