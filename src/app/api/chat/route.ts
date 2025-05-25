import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo', // or gpt-4 if you prefer
  });

  return NextResponse.json({ reply: chatCompletion.choices[0].message.content });
}
