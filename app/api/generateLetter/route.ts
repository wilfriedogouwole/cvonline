// app/api/generateLetter/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json(); // Récupère les données du corps de la requête POST

    if (!prompt) {
      return NextResponse.json({ error: 'Le prompt est requis' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    return NextResponse.json({ result: completion.choices[0].message?.content });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Échec de la génération de la lettre' }, { status: 500 });
  }
}
